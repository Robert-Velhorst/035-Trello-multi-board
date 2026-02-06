/**
 * Progress Tracking Components
 * 
 * UI components for showing loading states and bulk operation progress.
 */

/**
 * Loading Spinner Component
 */
export class LoadingSpinner {
  constructor(container) {
    this.container = container;
    this.element = null;
  }

  /**
   * Show the loading spinner
   * @param {string} message - Loading message to display
   */
  show(message = 'Loading...') {
    this.element = document.createElement('div');
    this.element.className = 'loading-overlay';
    this.element.innerHTML = `
      <div class="loading-spinner-container">
        <div class="loading-spinner"></div>
        <p class="loading-message">${message}</p>
      </div>
    `;
    this.container.appendChild(this.element);
  }

  /**
   * Update the loading message
   * @param {string} message
   */
  updateMessage(message) {
    if (this.element) {
      const messageEl = this.element.querySelector('.loading-message');
      if (messageEl) {
        messageEl.textContent = message;
      }
    }
  }

  /**
   * Hide the loading spinner
   */
  hide() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    }
  }
}

/**
 * Progress Bar Component for bulk operations
 */
export class ProgressTracker {
  constructor(container) {
    this.container = container;
    this.element = null;
    this.total = 0;
    this.completed = 0;
    this.failed = 0;
    this.successes = [];
    this.failures = [];
  }

  /**
   * Start tracking progress
   * @param {number} total - Total number of operations
   * @param {string} operation - Description of the operation
   */
  start(total, operation = 'Processing') {
    this.total = total;
    this.completed = 0;
    this.failed = 0;
    this.successes = [];
    this.failures = [];
    this.operation = operation;
    this.render();
  }

  /**
   * Update progress
   * @param {boolean} success - Whether the operation succeeded
   * @param {string} item - Description of the item processed
   * @param {string} error - Error message if failed
   */
  update(success = true, item = '', error = '') {
    this.completed++;
    if (success) {
      this.successes.push(item);
    } else {
      this.failed++;
      this.failures.push({ item, error });
    }
    this.render();
  }

  /**
   * Render the progress bar
   */
  render() {
    const percentage = this.total > 0 ? Math.round((this.completed / this.total) * 100) : 0;
    
    if (!this.element) {
      this.element = document.createElement('div');
      this.element.className = 'progress-tracker';
      this.container.appendChild(this.element);
    }

    this.element.innerHTML = `
      <div class="progress-header">
        <h3>${this.operation}</h3>
        <span class="progress-percentage">${percentage}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${percentage}%"></div>
      </div>
      <div class="progress-stats">
        <span class="progress-completed">${this.completed} of ${this.total} completed</span>
        ${this.failed > 0 ? `<span class="progress-failed">${this.failed} failed</span>` : ''}
      </div>
    `;
  }

  /**
   * Complete the progress tracking
   * @returns {{successes: Array, failures: Array}}
   */
  complete() {
    const isSuccess = this.failed === 0;
    
    if (this.element) {
      this.element.innerHTML = `
        <div class="progress-complete ${isSuccess ? 'success' : 'has-errors'}">
          <div class="progress-icon">${isSuccess ? '✓' : '⚠'}</div>
          <h3>${isSuccess ? 'Operation Complete!' : 'Completed with Errors'}</h3>
          <p>${this.completed - this.failed} of ${this.total} operations succeeded</p>
          ${this.failed > 0 ? `
            <details class="error-details">
              <summary>${this.failed} operations failed</summary>
              <ul>
                ${this.failures.map(f => `<li><strong>${f.item}</strong>: ${f.error}</li>`).join('')}
              </ul>
            </details>
          ` : ''}
        </div>
      `;
    }

    return {
      successes: this.successes,
      failures: this.failures
    };
  }

  /**
   * Remove the progress tracker from DOM
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    }
  }
}

/**
 * Toast Notification Component
 */
export class Toast {
  constructor(container = document.body) {
    this.container = container;
    this.toastContainer = null;
    this.init();
  }

  init() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.className = 'toast-container';
    this.container.appendChild(this.toastContainer);
  }

  /**
   * Show a toast notification
   * @param {string} message
   * @param {string} type - 'success', 'error', 'warning', 'info'
   * @param {number} duration - Duration in ms
   */
  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close">×</button>
    `;

    // Add close button functionality
    toast.querySelector('.toast-close').addEventListener('click', () => {
      this.dismiss(toast);
    });

    this.toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto dismiss
    if (duration > 0) {
      setTimeout(() => this.dismiss(toast), duration);
    }

    return toast;
  }

  /**
   * Dismiss a toast
   * @param {HTMLElement} toast
   */
  dismiss(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }

  /**
   * Show success toast
   * @param {string} message
   */
  success(message) {
    return this.show(message, 'success');
  }

  /**
   * Show error toast
   * @param {string} message
   */
  error(message) {
    return this.show(message, 'error', 5000);
  }

  /**
   * Show warning toast
   * @param {string} message
   */
  warning(message) {
    return this.show(message, 'warning');
  }

  /**
   * Show info toast
   * @param {string} message
   */
  info(message) {
    return this.show(message, 'info');
  }
}

/**
 * Confirmation Dialog Component
 */
export class ConfirmDialog {
  constructor() {
    this.overlay = null;
  }

  /**
   * Show a confirmation dialog
   * @param {Object} options
   * @returns {Promise<boolean>}
   */
  show({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', type = 'warning' }) {
    return new Promise((resolve) => {
      this.overlay = document.createElement('div');
      this.overlay.className = 'dialog-overlay';
      
      this.overlay.innerHTML = `
        <div class="dialog dialog-${type}">
          <div class="dialog-header">
            <h3>${title}</h3>
          </div>
          <div class="dialog-body">
            <p>${message}</p>
          </div>
          <div class="dialog-footer">
            <button class="btn btn-secondary dialog-cancel">${cancelText}</button>
            <button class="btn btn-primary dialog-confirm">${confirmText}</button>
          </div>
        </div>
      `;

      document.body.appendChild(this.overlay);

      // Add event listeners
      this.overlay.querySelector('.dialog-cancel').addEventListener('click', () => {
        this.close();
        resolve(false);
      });

      this.overlay.querySelector('.dialog-confirm').addEventListener('click', () => {
        this.close();
        resolve(true);
      });

      // Close on overlay click
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
          resolve(false);
        }
      });

      // Trigger animation
      setTimeout(() => this.overlay.classList.add('show'), 10);
    });
  }

  /**
   * Close the dialog
   */
  close() {
    if (this.overlay) {
      this.overlay.classList.remove('show');
      setTimeout(() => {
        if (this.overlay && this.overlay.parentNode) {
          this.overlay.parentNode.removeChild(this.overlay);
          this.overlay = null;
        }
      }, 300);
    }
  }
}
