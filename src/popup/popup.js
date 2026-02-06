/**
 * Trello Bulk Member Manager - Main Popup Script
 * 
 * Handles all UI interactions and coordinates with the Trello API.
 */

import { authenticate, isAuthenticated, logout, getUserInfo } from '../api/auth.js';
import { trelloClient, TrelloApiError } from '../api/trello-client.js';
import { parseEmails, showElement, hideElement, delay } from '../utils/helpers.js';
import { LoadingSpinner, ProgressTracker, Toast, ConfirmDialog } from '../ui/components/progress.js';

// ============================================
// STATE
// ============================================

const state = {
  boards: [],
  workspaces: [],
  selectedBoards: new Set(),
  selectedWorkspaces: new Set(),
  currentTab: 'boards'
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
  // Screens
  loginScreen: document.getElementById('login-screen'),
  mainScreen: document.getElementById('main-screen'),
  
  // Login
  loginBtn: document.getElementById('login-btn'),
  logoutBtn: document.getElementById('logout-btn'),
  userInfo: document.getElementById('user-info'),
  userName: document.getElementById('user-name'),
  
  // Tabs
  tabs: document.querySelectorAll('.tab'),
  boardsTab: document.getElementById('boards-tab'),
  workspacesTab: document.getElementById('workspaces-tab'),
  
  // Boards
  boardAction: document.getElementById('board-action'),
  boardSearch: document.getElementById('board-search'),
  boardRefresh: document.getElementById('board-refresh'),
  boardList: document.getElementById('board-list'),
  selectAllBoards: document.getElementById('select-all-boards'),
  boardCount: document.getElementById('board-count'),
  boardEmailSection: document.getElementById('board-email-section'),
  boardUsernameSection: document.getElementById('board-username-section'),
  boardEmails: document.getElementById('board-emails'),
  boardUsername: document.getElementById('board-username'),
  boardSubmit: document.getElementById('board-submit'),
  
  // Workspaces
  workspaceAction: document.getElementById('workspace-action'),
  workspaceSearch: document.getElementById('workspace-search'),
  workspaceRefresh: document.getElementById('workspace-refresh'),
  workspaceList: document.getElementById('workspace-list'),
  selectAllWorkspaces: document.getElementById('select-all-workspaces'),
  workspaceCount: document.getElementById('workspace-count'),
  workspaceEmailSection: document.getElementById('workspace-email-section'),
  workspaceUsernameSection: document.getElementById('workspace-username-section'),
  workspaceEmails: document.getElementById('workspace-emails'),
  workspaceUsername: document.getElementById('workspace-username'),
  workspaceSubmit: document.getElementById('workspace-submit'),
  
  // Progress
  progressOverlay: document.getElementById('progress-overlay'),
  progressContainer: document.getElementById('progress-container')
};

// ============================================
// UI COMPONENTS
// ============================================

const toast = new Toast();
const confirmDialog = new ConfirmDialog();
let loadingSpinner = null;
let progressTracker = null;

// ============================================
// INITIALIZATION
// ============================================

async function init() {
  // Check authentication status
  const authenticated = await isAuthenticated();
  
  if (authenticated) {
    await showMainScreen();
  } else {
    showLoginScreen();
  }
  
  // Set up event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Login/Logout
  elements.loginBtn.addEventListener('click', handleLogin);
  elements.logoutBtn.addEventListener('click', handleLogout);
  
  // Tabs
  elements.tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  // Board actions
  elements.boardAction.addEventListener('change', handleBoardActionChange);
  elements.boardSearch.addEventListener('input', handleBoardSearch);
  elements.boardRefresh.addEventListener('click', loadBoards);
  elements.selectAllBoards.addEventListener('change', handleSelectAllBoards);
  elements.boardSubmit.addEventListener('click', handleBoardSubmit);
  
  // Workspace actions
  elements.workspaceAction.addEventListener('change', handleWorkspaceActionChange);
  elements.workspaceSearch.addEventListener('input', handleWorkspaceSearch);
  elements.workspaceRefresh.addEventListener('click', loadWorkspaces);
  elements.selectAllWorkspaces.addEventListener('change', handleSelectAllWorkspaces);
  elements.workspaceSubmit.addEventListener('click', handleWorkspaceSubmit);
  
  // Input validation
  elements.boardEmails.addEventListener('input', validateBoardForm);
  elements.boardUsername.addEventListener('input', validateBoardForm);
  elements.workspaceEmails.addEventListener('input', validateWorkspaceForm);
  elements.workspaceUsername.addEventListener('input', validateWorkspaceForm);
}

// ============================================
// AUTHENTICATION
// ============================================

function showLoginScreen() {
  showElement(elements.loginScreen);
  hideElement(elements.mainScreen);
  hideElement(elements.userInfo);
}

async function showMainScreen() {
  hideElement(elements.loginScreen);
  showElement(elements.mainScreen);
  showElement(elements.userInfo);
  
  // Load user info
  const userInfo = await getUserInfo();
  if (userInfo) {
    elements.userName.textContent = userInfo.fullName || userInfo.username;
  }
  
  // Load data
  await Promise.all([loadBoards(), loadWorkspaces()]);
}

async function handleLogin() {
  elements.loginBtn.disabled = true;
  elements.loginBtn.textContent = 'Connecting...';
  
  try {
    const result = await authenticate();
    
    if (result.success) {
      toast.success('Successfully connected to Trello!');
      await showMainScreen();
    } else {
      toast.error(result.error || 'Failed to connect to Trello');
    }
  } catch (error) {
    console.error('Login error:', error);
    toast.error('An error occurred during login');
  } finally {
    elements.loginBtn.disabled = false;
    elements.loginBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10 18H5V6h5v12zm9-6h-5V6h5v6z"/>
      </svg>
      Connect with Trello
    `;
  }
}

async function handleLogout() {
  const confirmed = await confirmDialog.show({
    title: 'Logout',
    message: 'Are you sure you want to disconnect from Trello?',
    confirmText: 'Logout',
    type: 'warning'
  });
  
  if (confirmed) {
    await logout();
    toast.info('Logged out successfully');
    showLoginScreen();
  }
}

// ============================================
// TAB NAVIGATION
// ============================================

function switchTab(tabName) {
  state.currentTab = tabName;
  
  // Update tab buttons
  elements.tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  
  // Update tab content
  elements.boardsTab.classList.toggle('active', tabName === 'boards');
  elements.boardsTab.classList.toggle('hidden', tabName !== 'boards');
  elements.workspacesTab.classList.toggle('active', tabName === 'workspaces');
  elements.workspacesTab.classList.toggle('hidden', tabName !== 'workspaces');
}

// ============================================
// BOARDS
// ============================================

async function loadBoards() {
  showLoading(elements.boardList, 'Loading boards...');
  
  try {
    state.boards = await trelloClient.getBoards();
    state.selectedBoards.clear();
    renderBoardList(state.boards);
    updateBoardCount();
  } catch (error) {
    console.error('Error loading boards:', error);
    elements.boardList.innerHTML = `
      <div class="empty-state">
        <p>Failed to load boards</p>
        <button class="btn btn-secondary" onclick="loadBoards()">Retry</button>
      </div>
    `;
    toast.error('Failed to load boards');
  }
}

function renderBoardList(boards) {
  if (boards.length === 0) {
    elements.boardList.innerHTML = `
      <div class="empty-state">
        <p>No boards found</p>
      </div>
    `;
    return;
  }
  
  elements.boardList.innerHTML = boards.map(board => `
    <div class="item" data-id="${board.id}">
      <input type="checkbox" 
             class="board-checkbox" 
             data-id="${board.id}"
             ${state.selectedBoards.has(board.id) ? 'checked' : ''}>
      <span class="item-name" title="${board.name}">${board.name}</span>
      ${board.organization ? `<span class="item-badge">${board.organization.displayName}</span>` : ''}
    </div>
  `).join('');
  
  // Add checkbox listeners
  elements.boardList.querySelectorAll('.board-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        state.selectedBoards.add(id);
      } else {
        state.selectedBoards.delete(id);
      }
      updateBoardCount();
      validateBoardForm();
    });
  });
}

function handleBoardSearch(e) {
  const query = e.target.value.toLowerCase();
  const filtered = state.boards.filter(board => 
    board.name.toLowerCase().includes(query)
  );
  renderBoardList(filtered);
}

function handleSelectAllBoards(e) {
  const checkboxes = elements.boardList.querySelectorAll('.board-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked;
    const id = checkbox.dataset.id;
    if (e.target.checked) {
      state.selectedBoards.add(id);
    } else {
      state.selectedBoards.delete(id);
    }
  });
  updateBoardCount();
  validateBoardForm();
}

function updateBoardCount() {
  elements.boardCount.textContent = `${state.selectedBoards.size} selected`;
}

function handleBoardActionChange() {
  const action = elements.boardAction.value;
  if (action === 'add') {
    showElement(elements.boardEmailSection);
    hideElement(elements.boardUsernameSection);
  } else {
    hideElement(elements.boardEmailSection);
    showElement(elements.boardUsernameSection);
  }
  validateBoardForm();
}

function validateBoardForm() {
  const action = elements.boardAction.value;
  const hasSelection = state.selectedBoards.size > 0;
  
  let hasInput = false;
  if (action === 'add') {
    hasInput = elements.boardEmails.value.trim().length > 0;
  } else {
    hasInput = elements.boardUsername.value.trim().length > 0;
  }
  
  elements.boardSubmit.disabled = !(hasSelection && hasInput);
}

async function handleBoardSubmit() {
  const action = elements.boardAction.value;
  const boardIds = Array.from(state.selectedBoards);
  
  if (action === 'add') {
    await addMembersToBoards(boardIds);
  } else {
    await removeMemberFromBoards(boardIds);
  }
}

async function addMembersToBoards(boardIds) {
  const emailResult = parseEmails(elements.boardEmails.value);
  
  if (!emailResult.valid) {
    toast.warning(`Invalid emails: ${emailResult.invalidEmails.join(', ')}`);
  }
  
  if (emailResult.validEmails.length === 0) {
    toast.error('No valid email addresses provided');
    return;
  }
  
  const confirmed = await confirmDialog.show({
    title: 'Confirm Action',
    message: `Add ${emailResult.validEmails.length} member(s) to ${boardIds.length} board(s)?`,
    confirmText: 'Add Members'
  });
  
  if (!confirmed) return;
  
  // Show progress
  showProgressOverlay();
  progressTracker = new ProgressTracker(elements.progressContainer);
  const totalOperations = boardIds.length * emailResult.validEmails.length;
  progressTracker.start(totalOperations, 'Adding members to boards');
  
  for (const boardId of boardIds) {
    const board = state.boards.find(b => b.id === boardId);
    
    for (const email of emailResult.validEmails) {
      try {
        await trelloClient.addMemberToBoard(boardId, email);
        progressTracker.update(true, `${email} → ${board?.name || boardId}`);
      } catch (error) {
        progressTracker.update(false, `${email} → ${board?.name || boardId}`, error.message);
      }
      await delay(200); // Rate limiting
    }
  }
  
  const results = progressTracker.complete();
  
  // Add close button
  addCloseButton();
  
  if (results.failures.length === 0) {
    toast.success('All members added successfully!');
  } else {
    toast.warning(`Completed with ${results.failures.length} errors`);
  }
}

async function removeMemberFromBoards(boardIds) {
  const username = elements.boardUsername.value.trim();
  
  const confirmed = await confirmDialog.show({
    title: 'Confirm Removal',
    message: `Remove "${username}" from ${boardIds.length} board(s)?`,
    confirmText: 'Remove Member',
    type: 'warning'
  });
  
  if (!confirmed) return;
  
  // Show progress
  showProgressOverlay();
  progressTracker = new ProgressTracker(elements.progressContainer);
  progressTracker.start(boardIds.length, 'Removing member from boards');
  
  for (const boardId of boardIds) {
    const board = state.boards.find(b => b.id === boardId);
    
    try {
      // First, find the member
      const members = await trelloClient.getBoardMembers(boardId);
      const member = members.find(m => 
        m.username === username || m.email === username
      );
      
      if (member) {
        await trelloClient.removeMemberFromBoard(boardId, member.id);
        progressTracker.update(true, board?.name || boardId);
      } else {
        progressTracker.update(false, board?.name || boardId, 'Member not found');
      }
    } catch (error) {
      progressTracker.update(false, board?.name || boardId, error.message);
    }
    await delay(200);
  }
  
  const results = progressTracker.complete();
  addCloseButton();
  
  if (results.failures.length === 0) {
    toast.success('Member removed from all boards!');
  } else {
    toast.warning(`Completed with ${results.failures.length} errors`);
  }
}

// ============================================
// WORKSPACES
// ============================================

async function loadWorkspaces() {
  showLoading(elements.workspaceList, 'Loading workspaces...');
  
  try {
    state.workspaces = await trelloClient.getWorkspaces();
    state.selectedWorkspaces.clear();
    renderWorkspaceList(state.workspaces);
    updateWorkspaceCount();
  } catch (error) {
    console.error('Error loading workspaces:', error);
    elements.workspaceList.innerHTML = `
      <div class="empty-state">
        <p>Failed to load workspaces</p>
        <button class="btn btn-secondary" onclick="loadWorkspaces()">Retry</button>
      </div>
    `;
    toast.error('Failed to load workspaces');
  }
}

function renderWorkspaceList(workspaces) {
  if (workspaces.length === 0) {
    elements.workspaceList.innerHTML = `
      <div class="empty-state">
        <p>No workspaces found</p>
      </div>
    `;
    return;
  }
  
  elements.workspaceList.innerHTML = workspaces.map(workspace => `
    <div class="item" data-id="${workspace.id}">
      <input type="checkbox" 
             class="workspace-checkbox" 
             data-id="${workspace.id}"
             ${state.selectedWorkspaces.has(workspace.id) ? 'checked' : ''}>
      <span class="item-name" title="${workspace.displayName}">${workspace.displayName}</span>
    </div>
  `).join('');
  
  // Add checkbox listeners
  elements.workspaceList.querySelectorAll('.workspace-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        state.selectedWorkspaces.add(id);
      } else {
        state.selectedWorkspaces.delete(id);
      }
      updateWorkspaceCount();
      validateWorkspaceForm();
    });
  });
}

function handleWorkspaceSearch(e) {
  const query = e.target.value.toLowerCase();
  const filtered = state.workspaces.filter(workspace => 
    workspace.displayName.toLowerCase().includes(query)
  );
  renderWorkspaceList(filtered);
}

function handleSelectAllWorkspaces(e) {
  const checkboxes = elements.workspaceList.querySelectorAll('.workspace-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.checked = e.target.checked;
    const id = checkbox.dataset.id;
    if (e.target.checked) {
      state.selectedWorkspaces.add(id);
    } else {
      state.selectedWorkspaces.delete(id);
    }
  });
  updateWorkspaceCount();
  validateWorkspaceForm();
}

function updateWorkspaceCount() {
  elements.workspaceCount.textContent = `${state.selectedWorkspaces.size} selected`;
}

function handleWorkspaceActionChange() {
  const action = elements.workspaceAction.value;
  if (action === 'add') {
    showElement(elements.workspaceEmailSection);
    hideElement(elements.workspaceUsernameSection);
  } else {
    hideElement(elements.workspaceEmailSection);
    showElement(elements.workspaceUsernameSection);
  }
  validateWorkspaceForm();
}

function validateWorkspaceForm() {
  const action = elements.workspaceAction.value;
  const hasSelection = state.selectedWorkspaces.size > 0;
  
  let hasInput = false;
  if (action === 'add') {
    hasInput = elements.workspaceEmails.value.trim().length > 0;
  } else {
    hasInput = elements.workspaceUsername.value.trim().length > 0;
  }
  
  elements.workspaceSubmit.disabled = !(hasSelection && hasInput);
}

async function handleWorkspaceSubmit() {
  const action = elements.workspaceAction.value;
  const workspaceIds = Array.from(state.selectedWorkspaces);
  
  if (action === 'add') {
    await addMembersToWorkspaces(workspaceIds);
  } else {
    await removeMemberFromWorkspaces(workspaceIds);
  }
}

async function addMembersToWorkspaces(workspaceIds) {
  const emailResult = parseEmails(elements.workspaceEmails.value);
  
  if (!emailResult.valid) {
    toast.warning(`Invalid emails: ${emailResult.invalidEmails.join(', ')}`);
  }
  
  if (emailResult.validEmails.length === 0) {
    toast.error('No valid email addresses provided');
    return;
  }
  
  const confirmed = await confirmDialog.show({
    title: 'Confirm Action',
    message: `Add ${emailResult.validEmails.length} member(s) to ${workspaceIds.length} workspace(s)?`,
    confirmText: 'Add Members'
  });
  
  if (!confirmed) return;
  
  showProgressOverlay();
  progressTracker = new ProgressTracker(elements.progressContainer);
  const totalOperations = workspaceIds.length * emailResult.validEmails.length;
  progressTracker.start(totalOperations, 'Adding members to workspaces');
  
  for (const workspaceId of workspaceIds) {
    const workspace = state.workspaces.find(w => w.id === workspaceId);
    
    for (const email of emailResult.validEmails) {
      try {
        await trelloClient.addMemberToWorkspace(workspaceId, email);
        progressTracker.update(true, `${email} → ${workspace?.displayName || workspaceId}`);
      } catch (error) {
        progressTracker.update(false, `${email} → ${workspace?.displayName || workspaceId}`, error.message);
      }
      await delay(200);
    }
  }
  
  const results = progressTracker.complete();
  addCloseButton();
  
  if (results.failures.length === 0) {
    toast.success('All members added successfully!');
  } else {
    toast.warning(`Completed with ${results.failures.length} errors`);
  }
}

async function removeMemberFromWorkspaces(workspaceIds) {
  const username = elements.workspaceUsername.value.trim();
  
  const confirmed = await confirmDialog.show({
    title: 'Confirm Removal',
    message: `Remove "${username}" from ${workspaceIds.length} workspace(s)?`,
    confirmText: 'Remove Member',
    type: 'warning'
  });
  
  if (!confirmed) return;
  
  showProgressOverlay();
  progressTracker = new ProgressTracker(elements.progressContainer);
  progressTracker.start(workspaceIds.length, 'Removing member from workspaces');
  
  for (const workspaceId of workspaceIds) {
    const workspace = state.workspaces.find(w => w.id === workspaceId);
    
    try {
      const members = await trelloClient.getWorkspaceMembers(workspaceId);
      const member = members.find(m => 
        m.username === username || m.email === username
      );
      
      if (member) {
        await trelloClient.removeMemberFromWorkspace(workspaceId, member.id);
        progressTracker.update(true, workspace?.displayName || workspaceId);
      } else {
        progressTracker.update(false, workspace?.displayName || workspaceId, 'Member not found');
      }
    } catch (error) {
      progressTracker.update(false, workspace?.displayName || workspaceId, error.message);
    }
    await delay(200);
  }
  
  const results = progressTracker.complete();
  addCloseButton();
  
  if (results.failures.length === 0) {
    toast.success('Member removed from all workspaces!');
  } else {
    toast.warning(`Completed with ${results.failures.length} errors`);
  }
}

// ============================================
// HELPERS
// ============================================

function showLoading(container, message) {
  container.innerHTML = `
    <div class="loading-spinner-container" style="padding: 40px;">
      <div class="loading-spinner"></div>
      <p class="loading-message">${message}</p>
    </div>
  `;
}

function showProgressOverlay() {
  elements.progressContainer.innerHTML = '';
  elements.progressOverlay.classList.remove('hidden');
  setTimeout(() => elements.progressOverlay.classList.add('show'), 10);
}

function hideProgressOverlay() {
  elements.progressOverlay.classList.remove('show');
  setTimeout(() => {
    elements.progressOverlay.classList.add('hidden');
    elements.progressContainer.innerHTML = '';
  }, 300);
}

function addCloseButton() {
  const closeBtn = document.createElement('button');
  closeBtn.className = 'btn btn-primary btn-block';
  closeBtn.style.marginTop = '16px';
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', hideProgressOverlay);
  elements.progressContainer.appendChild(closeBtn);
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', init);
