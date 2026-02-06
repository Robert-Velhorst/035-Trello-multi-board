/**
 * Helper Utilities
 * 
 * Common utility functions used throughout the extension.
 */

// ============================================
// DOM UTILITIES
// ============================================

/**
 * Show an element
 * @param {HTMLElement} element
 */
export function showElement(element) {
  if (element) {
    element.style.display = '';
    element.style.visibility = 'visible';
  }
}

/**
 * Hide an element
 * @param {HTMLElement} element
 */
export function hideElement(element) {
  if (element) {
    element.style.display = 'none';
    element.style.visibility = 'hidden';
  }
}

/**
 * Toggle element visibility
 * @param {HTMLElement} element
 * @param {boolean} show
 */
export function toggleVisibility(element, show) {
  if (show) {
    showElement(element);
  } else {
    hideElement(element);
  }
}

/**
 * Set element text content safely
 * @param {HTMLElement} element
 * @param {string} text
 */
export function setText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

/**
 * Set element HTML content safely
 * @param {HTMLElement} element
 * @param {string} html
 */
export function setHTML(element, html) {
  if (element) {
    element.innerHTML = html;
  }
}

/**
 * Add CSS class to element
 * @param {HTMLElement} element
 * @param {string} className
 */
export function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}

/**
 * Remove CSS class from element
 * @param {HTMLElement} element
 * @param {string} className
 */
export function removeClass(element, className) {
  if (element) {
    element.classList.remove(className);
  }
}

/**
 * Toggle CSS class on element
 * @param {HTMLElement} element
 * @param {string} className
 * @param {boolean} force
 */
export function toggleClass(element, className, force) {
  if (element) {
    element.classList.toggle(className, force);
  }
}

// ============================================
// VALIDATION UTILITIES
// ============================================

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Parse and validate multiple emails from a string
 * @param {string} emailString - Emails separated by newlines, commas, or semicolons
 * @returns {{valid: boolean, validEmails: string[], invalidEmails: string[], count: number}}
 */
export function parseEmails(emailString) {
  const emails = emailString
    .split(/[\n,;]/)
    .map(e => e.trim())
    .filter(Boolean);

  const validEmails = [];
  const invalidEmails = [];

  emails.forEach(email => {
    if (isValidEmail(email)) {
      validEmails.push(email);
    } else {
      invalidEmails.push(email);
    }
  });

  return {
    valid: invalidEmails.length === 0,
    validEmails,
    invalidEmails,
    count: emails.length
  };
}

/**
 * Sanitize user input to prevent XSS
 * @param {string} input
 * @returns {string}
 */
export function sanitizeInput(input) {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ============================================
// ARRAY UTILITIES
// ============================================

/**
 * Remove duplicates from an array
 * @param {Array} array
 * @returns {Array}
 */
export function uniqueArray(array) {
  return [...new Set(array)];
}

/**
 * Chunk an array into smaller arrays
 * @param {Array} array
 * @param {number} size
 * @returns {Array<Array>}
 */
export function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// ============================================
// ASYNC UTILITIES
// ============================================

/**
 * Delay execution for a specified time
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry a function with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} baseDelay - Base delay in ms
 * @returns {Promise<any>}
 */
export async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  let lastError;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries - 1) {
        const delayMs = baseDelay * Math.pow(2, attempt);
        await delay(delayMs);
      }
    }
  }
  
  throw lastError;
}

// ============================================
// STORAGE UTILITIES
// ============================================

/**
 * Get data from Chrome local storage
 * @param {string|string[]} keys
 * @returns {Promise<Object>}
 */
export async function getStorage(keys) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(keys, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result);
      }
    });
  });
}

/**
 * Set data in Chrome local storage
 * @param {Object} data
 * @returns {Promise<void>}
 */
export async function setStorage(data) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(data, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Remove data from Chrome local storage
 * @param {string|string[]} keys
 * @returns {Promise<void>}
 */
export async function removeStorage(keys) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove(keys, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
}

// ============================================
// FORMATTING UTILITIES
// ============================================

/**
 * Format a date to a readable string
 * @param {Date|string} date
 * @returns {string}
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Truncate a string to a maximum length
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 50) {
  if (!str || str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + '...';
}

/**
 * Capitalize the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
