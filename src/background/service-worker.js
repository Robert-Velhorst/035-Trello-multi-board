/**
 * Trello Bulk Member Manager - Background Service Worker
 * 
 * Handles background tasks and extension lifecycle events.
 */

// ============================================
// INSTALLATION & UPDATE
// ============================================

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Trello Bulk Member Manager installed');
    
    // Open welcome page or show notification
    // chrome.tabs.create({ url: 'welcome.html' });
  } else if (details.reason === 'update') {
    console.log('Trello Bulk Member Manager updated to version', chrome.runtime.getManifest().version);
  }
});

// ============================================
// MESSAGE HANDLING
// ============================================

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle messages from popup or content scripts
  switch (message.type) {
    case 'GET_AUTH_STATUS':
      handleGetAuthStatus(sendResponse);
      return true; // Keep channel open for async response
      
    case 'CLEAR_AUTH':
      handleClearAuth(sendResponse);
      return true;
      
    default:
      console.log('Unknown message type:', message.type);
      sendResponse({ error: 'Unknown message type' });
  }
});

async function handleGetAuthStatus(sendResponse) {
  try {
    const result = await chrome.storage.local.get(['trello_auth_token']);
    sendResponse({ authenticated: !!result.trello_auth_token });
  } catch (error) {
    sendResponse({ authenticated: false, error: error.message });
  }
}

async function handleClearAuth(sendResponse) {
  try {
    await chrome.storage.local.remove([
      'trello_auth_token',
      'trello_user_info',
      'trello_token_expiry'
    ]);
    sendResponse({ success: true });
  } catch (error) {
    sendResponse({ success: false, error: error.message });
  }
}

// ============================================
// ALARM HANDLING (for scheduled tasks)
// ============================================

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm triggered:', alarm.name);
  
  // Handle different alarm types
  switch (alarm.name) {
    case 'token-refresh':
      // Refresh token if needed
      break;
    default:
      console.log('Unknown alarm:', alarm.name);
  }
});

// ============================================
// ERROR HANDLING
// ============================================

self.addEventListener('error', (event) => {
  console.error('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

console.log('Trello Bulk Member Manager service worker loaded');
