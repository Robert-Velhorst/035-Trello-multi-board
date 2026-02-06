/**
 * Trello Bulk Member Manager - Bundled Popup Script
 * 
 * This is a bundled version that doesn't use ES modules for Chrome extension compatibility.
 */

// ============================================
// TRELLO APP KEY - REPLACE WITH YOUR OWN
// ============================================
const TRELLO_APP_KEY = 'YOUR_TRELLO_APP_KEY'; // Get this from https://trello.com/power-ups/admin

// ============================================
// AUTH MODULE
// ============================================

const STORAGE_KEYS = {
  TOKEN: 'trello_auth_token',
  USER_INFO: 'trello_user_info',
  TOKEN_EXPIRY: 'trello_token_expiry'
};

async function isAuthenticated() {
  try {
    const result = await chrome.storage.local.get([STORAGE_KEYS.TOKEN]);
    return !!result[STORAGE_KEYS.TOKEN];
  } catch (error) {
    console.error('Error checking auth:', error);
    return false;
  }
}

async function getToken() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEYS.TOKEN);
    return result[STORAGE_KEYS.TOKEN] || null;
  } catch (error) {
    return null;
  }
}

async function getUserInfo() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEYS.USER_INFO);
    return result[STORAGE_KEYS.USER_INFO] || null;
  } catch (error) {
    return null;
  }
}

async function authenticate() {
  return new Promise((resolve) => {
    const redirectUrl = chrome.identity.getRedirectURL();
    
    const params = new URLSearchParams({
      expiration: 'never',
      name: 'Trello Bulk Member Manager',
      scope: 'read,write,account',
      response_type: 'token',
      key: TRELLO_APP_KEY,
      return_url: redirectUrl,
      callback_method: 'fragment'
    });
    
    const authUrl = `https://trello.com/1/authorize?${params.toString()}`;
    
    chrome.identity.launchWebAuthFlow(
      { url: authUrl, interactive: true },
      async (responseUrl) => {
        if (chrome.runtime.lastError) {
          resolve({ success: false, error: chrome.runtime.lastError.message });
          return;
        }
        
        if (!responseUrl) {
          resolve({ success: false, error: 'No response URL' });
          return;
        }
        
        // Extract token
        const hashIndex = responseUrl.indexOf('#');
        if (hashIndex === -1) {
          resolve({ success: false, error: 'No token in response' });
          return;
        }
        
        const fragment = responseUrl.substring(hashIndex + 1);
        const tokenParams = new URLSearchParams(fragment);
        const token = tokenParams.get('token');
        
        if (!token) {
          resolve({ success: false, error: 'Could not extract token' });
          return;
        }
        
        // Save token
        await chrome.storage.local.set({ [STORAGE_KEYS.TOKEN]: token });
        
        // Fetch user info
        try {
          const response = await fetch(
            `https://api.trello.com/1/members/me?key=${TRELLO_APP_KEY}&token=${token}`
          );
          const userInfo = await response.json();
          await chrome.storage.local.set({ [STORAGE_KEYS.USER_INFO]: userInfo });
        } catch (e) {
          console.warn('Could not fetch user info:', e);
        }
        
        resolve({ success: true, token });
      }
    );
  });
}

async function logout() {
  await chrome.storage.local.remove([
    STORAGE_KEYS.TOKEN,
    STORAGE_KEYS.USER_INFO,
    STORAGE_KEYS.TOKEN_EXPIRY
  ]);
}

// ============================================
// API CLIENT
// ============================================

class TrelloClient {
  constructor() {
    this.baseUrl = 'https://api.trello.com/1';
  }

  async request(endpoint, options = {}) {
    const token = await getToken();
    if (!token) throw new Error('Not authenticated');

    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('key', TRELLO_APP_KEY);
    url.searchParams.append('token', token);

    const response = await fetch(url.toString(), {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  async getBoards() {
    return this.request('/members/me/boards');
  }

  async getWorkspaces() {
    return this.request('/members/me/organizations');
  }

  async getBoardMembers(boardId) {
    return this.request(`/boards/${boardId}/members`);
  }

  async getWorkspaceMembers(workspaceId) {
    return this.request(`/organizations/${workspaceId}/members`);
  }

  async addMemberToBoard(boardId, email, type = 'normal') {
    return this.request(`/boards/${boardId}/members`, {
      method: 'PUT',
      body: JSON.stringify({ email, type })
    });
  }

  async removeMemberFromBoard(boardId, memberId) {
    return this.request(`/boards/${boardId}/members/${memberId}`, {
      method: 'DELETE'
    });
  }

  async addMemberToWorkspace(workspaceId, email, type = 'normal') {
    return this.request(`/organizations/${workspaceId}/members`, {
      method: 'PUT',
      body: JSON.stringify({ email, type })
    });
  }

  async removeMemberFromWorkspace(workspaceId, memberId) {
    return this.request(`/organizations/${workspaceId}/members/${memberId}`, {
      method: 'DELETE'
    });
  }
}

const trelloClient = new TrelloClient();

// ============================================
// HELPERS
// ============================================

function showElement(el) {
  if (el) {
    el.style.display = '';
    el.classList.remove('hidden');
  }
}

function hideElement(el) {
  if (el) {
    el.style.display = 'none';
    el.classList.add('hidden');
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function parseEmails(str) {
  const emails = str.split(/[\n,;]/).map(e => e.trim()).filter(Boolean);
  const validEmails = emails.filter(isValidEmail);
  const invalidEmails = emails.filter(e => !isValidEmail(e));
  return { valid: invalidEmails.length === 0, validEmails, invalidEmails, count: emails.length };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

class Toast {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  }

  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close">×</button>
    `;
    toast.querySelector('.toast-close').onclick = () => this.dismiss(toast);
    this.container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    if (duration > 0) setTimeout(() => this.dismiss(toast), duration);
  }

  dismiss(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }

  success(msg) { this.show(msg, 'success'); }
  error(msg) { this.show(msg, 'error', 5000); }
  warning(msg) { this.show(msg, 'warning'); }
  info(msg) { this.show(msg, 'info'); }
}

const toast = new Toast();

// ============================================
// CONFIRM DIALOG
// ============================================

function confirm(options) {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    overlay.innerHTML = `
      <div class="dialog">
        <div class="dialog-header"><h3>${options.title}</h3></div>
        <div class="dialog-body"><p>${options.message}</p></div>
        <div class="dialog-footer">
          <button class="btn btn-secondary dialog-cancel">${options.cancelText || 'Cancel'}</button>
          <button class="btn btn-primary dialog-confirm">${options.confirmText || 'Confirm'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);

    const close = (result) => {
      overlay.classList.remove('show');
      setTimeout(() => overlay.remove(), 300);
      resolve(result);
    };

    overlay.querySelector('.dialog-cancel').onclick = () => close(false);
    overlay.querySelector('.dialog-confirm').onclick = () => close(true);
    overlay.onclick = (e) => { if (e.target === overlay) close(false); };
  });
}

// ============================================
// PROGRESS TRACKER
// ============================================

class ProgressTracker {
  constructor(container) {
    this.container = container;
    this.total = 0;
    this.completed = 0;
    this.failed = 0;
    this.failures = [];
  }

  start(total, operation) {
    this.total = total;
    this.completed = 0;
    this.failed = 0;
    this.failures = [];
    this.operation = operation;
    this.render();
  }

  update(success, item = '', error = '') {
    this.completed++;
    if (!success) {
      this.failed++;
      this.failures.push({ item, error });
    }
    this.render();
  }

  render() {
    const pct = this.total > 0 ? Math.round((this.completed / this.total) * 100) : 0;
    this.container.innerHTML = `
      <div class="progress-tracker">
        <div class="progress-header">
          <h3>${this.operation}</h3>
          <span class="progress-percentage">${pct}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${pct}%"></div>
        </div>
        <div class="progress-stats">
          <span>${this.completed} of ${this.total} completed</span>
          ${this.failed > 0 ? `<span class="progress-failed">${this.failed} failed</span>` : ''}
        </div>
      </div>
    `;
  }

  complete() {
    const isSuccess = this.failed === 0;
    this.container.innerHTML = `
      <div class="progress-complete ${isSuccess ? 'success' : 'has-errors'}">
        <div class="progress-icon">${isSuccess ? '✓' : '⚠'}</div>
        <h3>${isSuccess ? 'Complete!' : 'Completed with Errors'}</h3>
        <p>${this.completed - this.failed} of ${this.total} succeeded</p>
        ${this.failed > 0 ? `
          <details class="error-details">
            <summary>${this.failed} failed</summary>
            <ul>${this.failures.map(f => `<li><strong>${f.item}</strong>: ${f.error}</li>`).join('')}</ul>
          </details>
        ` : ''}
      </div>
    `;
    return { failures: this.failures };
  }
}

// ============================================
// STATE
// ============================================

const state = {
  boards: [],
  workspaces: [],
  selectedBoards: new Set(),
  selectedWorkspaces: new Set()
};

// ============================================
// DOM ELEMENTS
// ============================================

const els = {
  loginScreen: document.getElementById('login-screen'),
  mainScreen: document.getElementById('main-screen'),
  loginBtn: document.getElementById('login-btn'),
  logoutBtn: document.getElementById('logout-btn'),
  userInfo: document.getElementById('user-info'),
  userName: document.getElementById('user-name'),
  tabs: document.querySelectorAll('.tab'),
  boardsTab: document.getElementById('boards-tab'),
  workspacesTab: document.getElementById('workspaces-tab'),
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
  progressOverlay: document.getElementById('progress-overlay'),
  progressContainer: document.getElementById('progress-container')
};

// ============================================
// INITIALIZATION
// ============================================

async function init() {
  if (await isAuthenticated()) {
    await showMainScreen();
  } else {
    showLoginScreen();
  }
  setupEventListeners();
}

function setupEventListeners() {
  els.loginBtn.onclick = handleLogin;
  els.logoutBtn.onclick = handleLogout;
  els.tabs.forEach(tab => tab.onclick = () => switchTab(tab.dataset.tab));
  els.boardAction.onchange = handleBoardActionChange;
  els.boardSearch.oninput = handleBoardSearch;
  els.boardRefresh.onclick = loadBoards;
  els.selectAllBoards.onchange = handleSelectAllBoards;
  els.boardSubmit.onclick = handleBoardSubmit;
  els.boardEmails.oninput = validateBoardForm;
  els.boardUsername.oninput = validateBoardForm;
  els.workspaceAction.onchange = handleWorkspaceActionChange;
  els.workspaceSearch.oninput = handleWorkspaceSearch;
  els.workspaceRefresh.onclick = loadWorkspaces;
  els.selectAllWorkspaces.onchange = handleSelectAllWorkspaces;
  els.workspaceSubmit.onclick = handleWorkspaceSubmit;
  els.workspaceEmails.oninput = validateWorkspaceForm;
  els.workspaceUsername.oninput = validateWorkspaceForm;
}

// ============================================
// AUTH HANDLERS
// ============================================

function showLoginScreen() {
  showElement(els.loginScreen);
  hideElement(els.mainScreen);
  hideElement(els.userInfo);
}

async function showMainScreen() {
  hideElement(els.loginScreen);
  showElement(els.mainScreen);
  showElement(els.userInfo);
  const info = await getUserInfo();
  if (info) els.userName.textContent = info.fullName || info.username;
  await Promise.all([loadBoards(), loadWorkspaces()]);
}

async function handleLogin() {
  els.loginBtn.disabled = true;
  els.loginBtn.textContent = 'Connecting...';
  try {
    const result = await authenticate();
    if (result.success) {
      toast.success('Connected to Trello!');
      await showMainScreen();
    } else {
      toast.error(result.error || 'Failed to connect');
    }
  } catch (e) {
    toast.error('Login error');
  } finally {
    els.loginBtn.disabled = false;
    els.loginBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10 18H5V6h5v12zm9-6h-5V6h5v6z"/></svg> Connect with Trello`;
  }
}

async function handleLogout() {
  if (await confirm({ title: 'Logout', message: 'Disconnect from Trello?', confirmText: 'Logout' })) {
    await logout();
    toast.info('Logged out');
    showLoginScreen();
  }
}

// ============================================
// TAB NAVIGATION
// ============================================

function switchTab(tab) {
  els.tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  els.boardsTab.classList.toggle('active', tab === 'boards');
  els.boardsTab.classList.toggle('hidden', tab !== 'boards');
  els.workspacesTab.classList.toggle('active', tab === 'workspaces');
  els.workspacesTab.classList.toggle('hidden', tab !== 'workspaces');
}

// ============================================
// BOARDS
// ============================================

async function loadBoards() {
  els.boardList.innerHTML = '<div class="loading-spinner-container" style="padding:40px"><div class="loading-spinner"></div><p>Loading boards...</p></div>';
  try {
    state.boards = await trelloClient.getBoards();
    state.selectedBoards.clear();
    renderBoardList(state.boards);
    updateBoardCount();
  } catch (e) {
    els.boardList.innerHTML = '<div class="empty-state"><p>Failed to load boards</p></div>';
    toast.error('Failed to load boards');
  }
}

function renderBoardList(boards) {
  if (!boards.length) {
    els.boardList.innerHTML = '<div class="empty-state"><p>No boards found</p></div>';
    return;
  }
  els.boardList.innerHTML = boards.map(b => `
    <div class="item" data-id="${b.id}">
      <input type="checkbox" class="board-checkbox" data-id="${b.id}" ${state.selectedBoards.has(b.id) ? 'checked' : ''}>
      <span class="item-name" title="${b.name}">${b.name}</span>
      ${b.organization ? `<span class="item-badge">${b.organization.displayName}</span>` : ''}
    </div>
  `).join('');
  els.boardList.querySelectorAll('.board-checkbox').forEach(cb => {
    cb.onchange = (e) => {
      if (e.target.checked) state.selectedBoards.add(e.target.dataset.id);
      else state.selectedBoards.delete(e.target.dataset.id);
      updateBoardCount();
      validateBoardForm();
    };
  });
}

function handleBoardSearch(e) {
  const q = e.target.value.toLowerCase();
  renderBoardList(state.boards.filter(b => b.name.toLowerCase().includes(q)));
}

function handleSelectAllBoards(e) {
  els.boardList.querySelectorAll('.board-checkbox').forEach(cb => {
    cb.checked = e.target.checked;
    if (e.target.checked) state.selectedBoards.add(cb.dataset.id);
    else state.selectedBoards.delete(cb.dataset.id);
  });
  updateBoardCount();
  validateBoardForm();
}

function updateBoardCount() {
  els.boardCount.textContent = `${state.selectedBoards.size} selected`;
}

function handleBoardActionChange() {
  if (els.boardAction.value === 'add') {
    showElement(els.boardEmailSection);
    hideElement(els.boardUsernameSection);
  } else {
    hideElement(els.boardEmailSection);
    showElement(els.boardUsernameSection);
  }
  validateBoardForm();
}

function validateBoardForm() {
  const action = els.boardAction.value;
  const hasSelection = state.selectedBoards.size > 0;
  const hasInput = action === 'add' ? els.boardEmails.value.trim().length > 0 : els.boardUsername.value.trim().length > 0;
  els.boardSubmit.disabled = !(hasSelection && hasInput);
}

async function handleBoardSubmit() {
  const action = els.boardAction.value;
  const ids = Array.from(state.selectedBoards);
  if (action === 'add') await addMembersToBoards(ids);
  else await removeMemberFromBoards(ids);
}

async function addMembersToBoards(boardIds) {
  const emailResult = parseEmails(els.boardEmails.value);
  if (emailResult.invalidEmails.length) toast.warning(`Invalid: ${emailResult.invalidEmails.join(', ')}`);
  if (!emailResult.validEmails.length) { toast.error('No valid emails'); return; }
  
  if (!await confirm({ title: 'Confirm', message: `Add ${emailResult.validEmails.length} member(s) to ${boardIds.length} board(s)?`, confirmText: 'Add' })) return;
  
  showProgressOverlay();
  const tracker = new ProgressTracker(els.progressContainer);
  tracker.start(boardIds.length * emailResult.validEmails.length, 'Adding members');
  
  for (const boardId of boardIds) {
    const board = state.boards.find(b => b.id === boardId);
    for (const email of emailResult.validEmails) {
      try {
        await trelloClient.addMemberToBoard(boardId, email);
        tracker.update(true, `${email} → ${board?.name}`);
      } catch (e) {
        tracker.update(false, `${email} → ${board?.name}`, e.message);
      }
      await delay(200);
    }
  }
  
  tracker.complete();
  addCloseButton();
}

async function removeMemberFromBoards(boardIds) {
  const username = els.boardUsername.value.trim();
  if (!await confirm({ title: 'Confirm Removal', message: `Remove "${username}" from ${boardIds.length} board(s)?`, confirmText: 'Remove' })) return;
  
  showProgressOverlay();
  const tracker = new ProgressTracker(els.progressContainer);
  tracker.start(boardIds.length, 'Removing member');
  
  for (const boardId of boardIds) {
    const board = state.boards.find(b => b.id === boardId);
    try {
      const members = await trelloClient.getBoardMembers(boardId);
      const member = members.find(m => m.username === username || m.email === username);
      if (member) {
        await trelloClient.removeMemberFromBoard(boardId, member.id);
        tracker.update(true, board?.name);
      } else {
        tracker.update(false, board?.name, 'Member not found');
      }
    } catch (e) {
      tracker.update(false, board?.name, e.message);
    }
    await delay(200);
  }
  
  tracker.complete();
  addCloseButton();
}

// ============================================
// WORKSPACES
// ============================================

async function loadWorkspaces() {
  els.workspaceList.innerHTML = '<div class="loading-spinner-container" style="padding:40px"><div class="loading-spinner"></div><p>Loading workspaces...</p></div>';
  try {
    state.workspaces = await trelloClient.getWorkspaces();
    state.selectedWorkspaces.clear();
    renderWorkspaceList(state.workspaces);
    updateWorkspaceCount();
  } catch (e) {
    els.workspaceList.innerHTML = '<div class="empty-state"><p>Failed to load workspaces</p></div>';
    toast.error('Failed to load workspaces');
  }
}

function renderWorkspaceList(workspaces) {
  if (!workspaces.length) {
    els.workspaceList.innerHTML = '<div class="empty-state"><p>No workspaces found</p></div>';
    return;
  }
  els.workspaceList.innerHTML = workspaces.map(w => `
    <div class="item" data-id="${w.id}">
      <input type="checkbox" class="workspace-checkbox" data-id="${w.id}" ${state.selectedWorkspaces.has(w.id) ? 'checked' : ''}>
      <span class="item-name" title="${w.displayName}">${w.displayName}</span>
    </div>
  `).join('');
  els.workspaceList.querySelectorAll('.workspace-checkbox').forEach(cb => {
    cb.onchange = (e) => {
      if (e.target.checked) state.selectedWorkspaces.add(e.target.dataset.id);
      else state.selectedWorkspaces.delete(e.target.dataset.id);
      updateWorkspaceCount();
      validateWorkspaceForm();
    };
  });
}

function handleWorkspaceSearch(e) {
  const q = e.target.value.toLowerCase();
  renderWorkspaceList(state.workspaces.filter(w => w.displayName.toLowerCase().includes(q)));
}

function handleSelectAllWorkspaces(e) {
  els.workspaceList.querySelectorAll('.workspace-checkbox').forEach(cb => {
    cb.checked = e.target.checked;
    if (e.target.checked) state.selectedWorkspaces.add(cb.dataset.id);
    else state.selectedWorkspaces.delete(cb.dataset.id);
  });
  updateWorkspaceCount();
  validateWorkspaceForm();
}

function updateWorkspaceCount() {
  els.workspaceCount.textContent = `${state.selectedWorkspaces.size} selected`;
}

function handleWorkspaceActionChange() {
  if (els.workspaceAction.value === 'add') {
    showElement(els.workspaceEmailSection);
    hideElement(els.workspaceUsernameSection);
  } else {
    hideElement(els.workspaceEmailSection);
    showElement(els.workspaceUsernameSection);
  }
  validateWorkspaceForm();
}

function validateWorkspaceForm() {
  const action = els.workspaceAction.value;
  const hasSelection = state.selectedWorkspaces.size > 0;
  const hasInput = action === 'add' ? els.workspaceEmails.value.trim().length > 0 : els.workspaceUsername.value.trim().length > 0;
  els.workspaceSubmit.disabled = !(hasSelection && hasInput);
}

async function handleWorkspaceSubmit() {
  const action = els.workspaceAction.value;
  const ids = Array.from(state.selectedWorkspaces);
  if (action === 'add') await addMembersToWorkspaces(ids);
  else await removeMemberFromWorkspaces(ids);
}

async function addMembersToWorkspaces(workspaceIds) {
  const emailResult = parseEmails(els.workspaceEmails.value);
  if (emailResult.invalidEmails.length) toast.warning(`Invalid: ${emailResult.invalidEmails.join(', ')}`);
  if (!emailResult.validEmails.length) { toast.error('No valid emails'); return; }
  
  if (!await confirm({ title: 'Confirm', message: `Add ${emailResult.validEmails.length} member(s) to ${workspaceIds.length} workspace(s)?`, confirmText: 'Add' })) return;
  
  showProgressOverlay();
  const tracker = new ProgressTracker(els.progressContainer);
  tracker.start(workspaceIds.length * emailResult.validEmails.length, 'Adding members');
  
  for (const workspaceId of workspaceIds) {
    const workspace = state.workspaces.find(w => w.id === workspaceId);
    for (const email of emailResult.validEmails) {
      try {
        await trelloClient.addMemberToWorkspace(workspaceId, email);
        tracker.update(true, `${email} → ${workspace?.displayName}`);
      } catch (e) {
        tracker.update(false, `${email} → ${workspace?.displayName}`, e.message);
      }
      await delay(200);
    }
  }
  
  tracker.complete();
  addCloseButton();
}

async function removeMemberFromWorkspaces(workspaceIds) {
  const username = els.workspaceUsername.value.trim();
  if (!await confirm({ title: 'Confirm Removal', message: `Remove "${username}" from ${workspaceIds.length} workspace(s)?`, confirmText: 'Remove' })) return;
  
  showProgressOverlay();
  const tracker = new ProgressTracker(els.progressContainer);
  tracker.start(workspaceIds.length, 'Removing member');
  
  for (const workspaceId of workspaceIds) {
    const workspace = state.workspaces.find(w => w.id === workspaceId);
    try {
      const members = await trelloClient.getWorkspaceMembers(workspaceId);
      const member = members.find(m => m.username === username || m.email === username);
      if (member) {
        await trelloClient.removeMemberFromWorkspace(workspaceId, member.id);
        tracker.update(true, workspace?.displayName);
      } else {
        tracker.update(false, workspace?.displayName, 'Member not found');
      }
    } catch (e) {
      tracker.update(false, workspace?.displayName, e.message);
    }
    await delay(200);
  }
  
  tracker.complete();
  addCloseButton();
}

// ============================================
// PROGRESS OVERLAY
// ============================================

function showProgressOverlay() {
  els.progressContainer.innerHTML = '';
  els.progressOverlay.classList.remove('hidden');
  setTimeout(() => els.progressOverlay.classList.add('show'), 10);
}

function hideProgressOverlay() {
  els.progressOverlay.classList.remove('show');
  setTimeout(() => {
    els.progressOverlay.classList.add('hidden');
    els.progressContainer.innerHTML = '';
  }, 300);
}

function addCloseButton() {
  const btn = document.createElement('button');
  btn.className = 'btn btn-primary btn-block';
  btn.style.marginTop = '16px';
  btn.textContent = 'Close';
  btn.onclick = hideProgressOverlay;
  els.progressContainer.appendChild(btn);
}

// ============================================
// START
// ============================================

document.addEventListener('DOMContentLoaded', init);
