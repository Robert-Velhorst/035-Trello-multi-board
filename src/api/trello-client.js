/**
 * Trello API Client
 * 
 * A centralized, secure API client for all Trello operations.
 * Handles authentication, error handling, and rate limiting.
 */

import { getToken, getAppKey, isAuthenticated } from './auth.js';

/**
 * Rate limiter to prevent API abuse
 */
class RateLimiter {
  constructor(maxRequests = 10, perSeconds = 10) {
    this.maxRequests = maxRequests;
    this.perSeconds = perSeconds;
    this.requests = [];
  }

  async throttle() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.perSeconds * 1000);

    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = (this.perSeconds * 1000) - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.requests.push(now);
  }
}

/**
 * Custom error class for API errors
 */
export class TrelloApiError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = 'TrelloApiError';
    this.status = status;
    this.response = response;
  }
}

/**
 * Main Trello API Client class
 */
export class TrelloClient {
  constructor() {
    this.baseUrl = 'https://api.trello.com/1';
    this.rateLimiter = new RateLimiter(10, 10); // 10 requests per 10 seconds
  }

  /**
   * Make an authenticated API request
   * @param {string} endpoint - API endpoint (e.g., '/members/me/boards')
   * @param {Object} options - Fetch options
   * @returns {Promise<any>}
   */
  async request(endpoint, options = {}) {
    // Check authentication
    if (!await isAuthenticated()) {
      throw new TrelloApiError('Not authenticated. Please log in first.', 401);
    }

    // Apply rate limiting
    await this.rateLimiter.throttle();

    // Get credentials
    const token = await getToken();
    const apiKey = getAppKey();

    // Build URL with authentication
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append('key', apiKey);
    url.searchParams.append('token', token);

    // Merge default options
    const fetchOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    };

    try {
      const response = await fetch(url.toString(), fetchOptions);

      // Handle different response statuses
      if (!response.ok) {
        const errorText = await response.text();
        throw new TrelloApiError(
          `API Error: ${response.status} - ${errorText}`,
          response.status,
          errorText
        );
      }

      // Handle empty responses
      const text = await response.text();
      if (!text) return null;

      return JSON.parse(text);
    } catch (error) {
      if (error instanceof TrelloApiError) {
        throw error;
      }
      throw new TrelloApiError(`Network error: ${error.message}`, 0, null);
    }
  }

  // ============================================
  // BOARDS
  // ============================================

  /**
   * Get all boards for the authenticated user
   * @returns {Promise<Array>}
   */
  async getBoards() {
    return this.request('/members/me/boards', {
      method: 'GET'
    });
  }

  /**
   * Get a specific board by ID
   * @param {string} boardId
   * @returns {Promise<Object>}
   */
  async getBoard(boardId) {
    return this.request(`/boards/${boardId}`, {
      method: 'GET'
    });
  }

  /**
   * Get all members of a board
   * @param {string} boardId
   * @returns {Promise<Array>}
   */
  async getBoardMembers(boardId) {
    return this.request(`/boards/${boardId}/members`, {
      method: 'GET'
    });
  }

  /**
   * Add a member to a board by email
   * @param {string} boardId
   * @param {string} email
   * @param {string} type - Member type: 'normal', 'admin', or 'observer'
   * @returns {Promise<Object>}
   */
  async addMemberToBoard(boardId, email, type = 'normal') {
    return this.request(`/boards/${boardId}/members`, {
      method: 'PUT',
      body: JSON.stringify({
        email: email,
        type: type
      })
    });
  }

  /**
   * Remove a member from a board
   * @param {string} boardId
   * @param {string} memberId
   * @returns {Promise<void>}
   */
  async removeMemberFromBoard(boardId, memberId) {
    return this.request(`/boards/${boardId}/members/${memberId}`, {
      method: 'DELETE'
    });
  }

  // ============================================
  // WORKSPACES (Organizations)
  // ============================================

  /**
   * Get all workspaces for the authenticated user
   * @returns {Promise<Array>}
   */
  async getWorkspaces() {
    return this.request('/members/me/organizations', {
      method: 'GET'
    });
  }

  /**
   * Get a specific workspace by ID
   * @param {string} workspaceId
   * @returns {Promise<Object>}
   */
  async getWorkspace(workspaceId) {
    return this.request(`/organizations/${workspaceId}`, {
      method: 'GET'
    });
  }

  /**
   * Get all members of a workspace
   * @param {string} workspaceId
   * @returns {Promise<Array>}
   */
  async getWorkspaceMembers(workspaceId) {
    return this.request(`/organizations/${workspaceId}/members`, {
      method: 'GET'
    });
  }

  /**
   * Add a member to a workspace by email
   * @param {string} workspaceId
   * @param {string} email
   * @param {string} type - Member type: 'normal' or 'admin'
   * @returns {Promise<Object>}
   */
  async addMemberToWorkspace(workspaceId, email, type = 'normal') {
    return this.request(`/organizations/${workspaceId}/members`, {
      method: 'PUT',
      body: JSON.stringify({
        email: email,
        type: type
      })
    });
  }

  /**
   * Remove a member from a workspace
   * @param {string} workspaceId
   * @param {string} memberId
   * @returns {Promise<void>}
   */
  async removeMemberFromWorkspace(workspaceId, memberId) {
    return this.request(`/organizations/${workspaceId}/members/${memberId}`, {
      method: 'DELETE'
    });
  }

  /**
   * Get all boards in a workspace
   * @param {string} workspaceId
   * @returns {Promise<Array>}
   */
  async getWorkspaceBoards(workspaceId) {
    return this.request(`/organizations/${workspaceId}/boards`, {
      method: 'GET'
    });
  }

  // ============================================
  // CARDS
  // ============================================

  /**
   * Get all cards on a board
   * @param {string} boardId
   * @returns {Promise<Array>}
   */
  async getBoardCards(boardId) {
    return this.request(`/boards/${boardId}/cards`, {
      method: 'GET'
    });
  }

  /**
   * Get a specific card
   * @param {string} cardId
   * @returns {Promise<Object>}
   */
  async getCard(cardId) {
    return this.request(`/cards/${cardId}`, {
      method: 'GET'
    });
  }

  /**
   * Add a member to a card
   * @param {string} cardId
   * @param {string} memberId
   * @returns {Promise<Object>}
   */
  async addMemberToCard(cardId, memberId) {
    return this.request(`/cards/${cardId}/idMembers`, {
      method: 'POST',
      body: JSON.stringify({
        value: memberId
      })
    });
  }

  /**
   * Remove a member from a card
   * @param {string} cardId
   * @param {string} memberId
   * @returns {Promise<void>}
   */
  async removeMemberFromCard(cardId, memberId) {
    return this.request(`/cards/${cardId}/idMembers/${memberId}`, {
      method: 'DELETE'
    });
  }

  // ============================================
  // USER
  // ============================================

  /**
   * Get current user information
   * @returns {Promise<Object>}
   */
  async getCurrentUser() {
    return this.request('/members/me', {
      method: 'GET'
    });
  }

  /**
   * Search for a member by email or username
   * @param {string} query - Email or username
   * @returns {Promise<Array>}
   */
  async searchMembers(query) {
    return this.request(`/search/members?query=${encodeURIComponent(query)}`, {
      method: 'GET'
    });
  }
}

// Export a singleton instance
export const trelloClient = new TrelloClient();
