# Trello Bulk Member Manager

A Chrome extension for managing Trello board and workspace members in bulk. Add or remove multiple users across multiple boards and workspaces with a single action.

## Features

- **Bulk Add Members** to multiple boards or workspaces at once
- **Bulk Remove Members** from multiple boards or workspaces at once
- **Search & Filter** boards and workspaces by name
- **Select All / Deselect All** for quick selection
- **Progress Tracking** with real-time progress bars during operations
- **Error Reporting** with detailed failure summaries
- **Secure OAuth** authentication (no hardcoded credentials)
- **Modern UI** with clean, professional design

## Screenshots

The extension popup provides a clean tabbed interface:

- **Boards Tab** - Select boards and manage members
- **Workspaces Tab** - Select workspaces and manage members
- **Progress Overlay** - Real-time tracking of bulk operations

## Installation

### From Chrome Web Store

*(Coming soon)*

### Manual Installation (Developer Mode)

1. Clone this repository:
   ```bash
   git clone https://github.com/Noodzakelijk-Online/035-Trello-multi-board.git
   ```
2. Get a Trello API Key from [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
3. Edit `dist/popup/popup-bundled.js` and replace `YOUR_TRELLO_APP_KEY` with your key
4. Open Chrome and go to `chrome://extensions`
5. Enable **Developer mode**
6. Click **Load unpacked** and select the `dist` folder
7. Click the extension icon and connect to Trello

See [dist/SETUP.md](dist/SETUP.md) for detailed setup instructions.

## Project Structure

```
trello-extension-enhanced/
├── dist/                          # Production-ready extension
│   ├── manifest.json              # Chrome extension manifest (v3)
│   ├── SETUP.md                   # Setup instructions
│   ├── assets/icons/              # Extension icons
│   ├── background/
│   │   └── service-worker.js      # Background service worker
│   └── popup/
│       ├── popup.html             # Popup UI
│       ├── popup.css              # Styles
│       └── popup-bundled.js       # Bundled application logic
├── src/                           # Source code (modular)
│   ├── api/
│   │   ├── auth.js                # Trello OAuth authentication
│   │   └── trello-client.js       # Trello API client
│   ├── background/
│   │   └── service-worker.js      # Background service worker
│   ├── popup/
│   │   ├── popup.html             # Popup HTML
│   │   ├── popup.css              # Popup styles
│   │   └── popup.js               # Popup logic (ES modules)
│   ├── ui/components/
│   │   └── progress.js            # UI components (progress, toast, dialog)
│   └── utils/
│       └── helpers.js             # Utility functions
└── README.md                      # This file
```

## Architecture

### v2.0 Improvements over v1.x

| Aspect | v1.x (Legacy) | v2.0 (Current) |
|--------|---------------|-----------------|
| **Security** | Hardcoded API key & token | Secure OAuth2 per-user authentication |
| **Manifest** | Manifest V2 | Manifest V3 |
| **Code Size** | ~45,000 lines (1.4 MB) | ~800 lines (48 KB) |
| **Architecture** | Monolithic, duplicated code | Modular, DRY components |
| **Error Handling** | None | Comprehensive with user feedback |
| **Progress** | No feedback | Real-time progress bars |
| **UI** | Basic HTML | Modern, responsive design |
| **Rate Limiting** | None | Built-in API rate limiting |
| **Input Validation** | None | Email validation, form validation |

### Security Model

- Uses Trello's official OAuth flow via `chrome.identity` API
- Each user authenticates with their own Trello account
- API tokens are stored in Chrome's encrypted local storage
- No credentials are hardcoded or transmitted to third parties

## API Reference

The extension uses the [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/):

- `GET /1/members/me/boards` - List user's boards
- `GET /1/members/me/organizations` - List user's workspaces
- `PUT /1/boards/{id}/members` - Add member to board
- `DELETE /1/boards/{id}/members/{memberId}` - Remove member from board
- `PUT /1/organizations/{id}/members` - Add member to workspace
- `DELETE /1/organizations/{id}/members/{memberId}` - Remove member from workspace

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Changelog

### v2.0.0 (2026-02-06)
- Complete rewrite with modern architecture
- Migrated to Manifest V3
- Implemented secure OAuth2 authentication
- Added progress tracking with real-time feedback
- Added toast notifications and confirmation dialogs
- Reduced code size by ~97% through refactoring
- Added search and filter functionality
- Added comprehensive error handling
- Modern, responsive UI design

### v1.0.0 (Legacy)
- Initial release with basic bulk member management
- Manifest V2
- Hardcoded credentials (security vulnerability)
