/**
 * Trello OAuth Authentication Module
 * 
 * This module handles secure authentication with Trello using OAuth.
 * Each user authenticates with their own Trello account - no hardcoded credentials.
 */

// Trello App Key - This is public and safe to include
// You need to register your app at https://trello.com/power-ups/admin
const TRELLO_APP_KEY = 'YOUR_TRELLO_APP_KEY'; // Replace with your registered app key

/**
 * Storage keys for authentication data
 */
const STORAGE_KEYS = {
  TOKEN: 'trello_auth_token',
  USER_INFO: 'trello_user_info',
  TOKEN_EXPIRY: 'trello_token_expiry'
};

/**
 * Check if user is currently authenticated
 * @returns {Promise<boolean>}
 */
export async function isAuthenticated() {
  try {
    const result = await chrome.storage.local.get([STORAGE_KEYS.TOKEN, STORAGE_KEYS.TOKEN_EXPIRY]);
    
    if (!result[STORAGE_KEYS.TOKEN]) {
      return false;
    }
    
    // Check if token has expired
    if (result[STORAGE_KEYS.TOKEN_EXPIRY]) {
      const expiry = new Date(result[STORAGE_KEYS.TOKEN_EXPIRY]);
      if (expiry < new Date()) {
        await logout();
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
}

/**
 * Get the stored authentication token
 * @returns {Promise<string|null>}
 */
export async function getToken() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEYS.TOKEN);
    return result[STORAGE_KEYS.TOKEN] || null;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
}

/**
 * Get stored user information
 * @returns {Promise<Object|null>}
 */
export async function getUserInfo() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEYS.USER_INFO);
    return result[STORAGE_KEYS.USER_INFO] || null;
  } catch (error) {
    console.error('Error getting user info:', error);
    return null;
  }
}

/**
 * Authenticate user with Trello using OAuth
 * Opens a popup window for user to authorize the extension
 * @returns {Promise<{success: boolean, token?: string, error?: string}>}
 */
export async function authenticate() {
  return new Promise((resolve) => {
    // Build the authorization URL
    const authUrl = buildAuthUrl();
    
    // Use Chrome's identity API for secure OAuth flow
    chrome.identity.launchWebAuthFlow(
      {
        url: authUrl,
        interactive: true
      },
      async (redirectUrl) => {
        if (chrome.runtime.lastError) {
          console.error('Auth error:', chrome.runtime.lastError);
          resolve({
            success: false,
            error: chrome.runtime.lastError.message || 'Authentication failed'
          });
          return;
        }
        
        if (!redirectUrl) {
          resolve({
            success: false,
            error: 'No redirect URL received'
          });
          return;
        }
        
        // Extract token from redirect URL
        const token = extractTokenFromUrl(redirectUrl);
        
        if (!token) {
          resolve({
            success: false,
            error: 'Could not extract token from response'
          });
          return;
        }
        
        // Store the token securely
        await saveToken(token);
        
        // Fetch and store user info
        try {
          const userInfo = await fetchUserInfo(token);
          await saveUserInfo(userInfo);
        } catch (error) {
          console.warn('Could not fetch user info:', error);
        }
        
        resolve({
          success: true,
          token: token
        });
      }
    );
  });
}

/**
 * Build the Trello authorization URL
 * @returns {string}
 */
function buildAuthUrl() {
  const redirectUrl = chrome.identity.getRedirectURL();
  
  const params = new URLSearchParams({
    expiration: 'never', // Token never expires (user can revoke manually)
    name: 'Trello Bulk Member Manager',
    scope: 'read,write,account',
    response_type: 'token',
    key: TRELLO_APP_KEY,
    return_url: redirectUrl,
    callback_method: 'fragment'
  });
  
  return `https://trello.com/1/authorize?${params.toString()}`;
}

/**
 * Extract the token from the OAuth redirect URL
 * @param {string} url - The redirect URL containing the token
 * @returns {string|null}
 */
function extractTokenFromUrl(url) {
  try {
    // Token is in the URL fragment (after #)
    const hashIndex = url.indexOf('#');
    if (hashIndex === -1) return null;
    
    const fragment = url.substring(hashIndex + 1);
    const params = new URLSearchParams(fragment);
    
    return params.get('token');
  } catch (error) {
    console.error('Error extracting token:', error);
    return null;
  }
}

/**
 * Save the authentication token securely
 * @param {string} token
 */
async function saveToken(token) {
  await chrome.storage.local.set({
    [STORAGE_KEYS.TOKEN]: token,
    [STORAGE_KEYS.TOKEN_EXPIRY]: null // Token doesn't expire unless revoked
  });
}

/**
 * Save user information
 * @param {Object} userInfo
 */
async function saveUserInfo(userInfo) {
  await chrome.storage.local.set({
    [STORAGE_KEYS.USER_INFO]: userInfo
  });
}

/**
 * Fetch user information from Trello API
 * @param {string} token
 * @returns {Promise<Object>}
 */
async function fetchUserInfo(token) {
  const response = await fetch(
    `https://api.trello.com/1/members/me?key=${TRELLO_APP_KEY}&token=${token}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch user info: ${response.status}`);
  }
  
  return await response.json();
}

/**
 * Log out the current user
 * Clears all stored authentication data
 */
export async function logout() {
  await chrome.storage.local.remove([
    STORAGE_KEYS.TOKEN,
    STORAGE_KEYS.USER_INFO,
    STORAGE_KEYS.TOKEN_EXPIRY
  ]);
}

/**
 * Revoke the current token on Trello's side
 * This invalidates the token completely
 */
export async function revokeToken() {
  const token = await getToken();
  
  if (token) {
    try {
      await fetch(
        `https://api.trello.com/1/tokens/${token}?key=${TRELLO_APP_KEY}&token=${token}`,
        { method: 'DELETE' }
      );
    } catch (error) {
      console.error('Error revoking token:', error);
    }
  }
  
  await logout();
}

/**
 * Get the Trello App Key
 * @returns {string}
 */
export function getAppKey() {
  return TRELLO_APP_KEY;
}
