# Trello Bulk Member Manager v2.0 - Setup Guide

## Prerequisites

Before using this extension, you need a **Trello API Key**. This is free and takes 30 seconds.

## Step 1: Get Your Trello API Key

1. Go to [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. Log in with your Trello account
3. Click **"New"** to create a new Power-Up/Integration
4. Fill in:
   - **Name:** Trello Bulk Member Manager
   - **Workspace:** Select your workspace
   - **Iframe connector URL:** `https://trello.com` (placeholder)
5. Click **"Create"**
6. On the next page, click **"Generate a new API key"**
7. Copy your **API Key**

## Step 2: Configure the Extension

1. Open the file `popup/popup-bundled.js` in a text editor (Notepad works fine)
2. Find this line near the top:
   ```javascript
   const TRELLO_APP_KEY = 'YOUR_TRELLO_APP_KEY';
   ```
3. Replace `YOUR_TRELLO_APP_KEY` with your actual API key from Step 1
4. Save the file

## Step 3: Install the Extension

### Chrome / Edge / Brave

1. Open your browser and navigate to `chrome://extensions` (or `edge://extensions` for Edge)
2. Enable **"Developer mode"** (toggle in the top-right corner)
3. Click **"Load unpacked"**
4. Select the `dist` folder (this folder)
5. The extension icon will appear in your browser toolbar

## Step 4: Connect to Trello

1. Click the extension icon in your toolbar
2. Click **"Connect with Trello"**
3. A Trello authorization page will open
4. Click **"Allow"** to grant the extension access
5. You're ready to go!

## Usage

### Adding Members to Boards
1. Select the **Boards** tab
2. Choose **"Add Members"** from the action dropdown
3. Check the boards you want to add members to
4. Enter email addresses (one per line)
5. Click **"Execute Action"**

### Removing Members from Boards
1. Select the **Boards** tab
2. Choose **"Remove Members"** from the action dropdown
3. Check the boards you want to remove a member from
4. Enter the Trello username or email of the member
5. Click **"Execute Action"**

### Workspace Operations
The same add/remove operations are available for **Workspaces** via the Workspaces tab.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Not authenticated" error | Click the logout button and re-connect |
| Boards not loading | Check your API key is correct in `popup-bundled.js` |
| Extension not appearing | Make sure Developer mode is enabled |
| "API Error: 401" | Your token may have expired; logout and reconnect |
| "API Error: 429" | Rate limited; wait a minute and try again |

## Security

- Your Trello credentials are **never stored** by this extension
- Authentication uses Trello's official OAuth flow
- Your API token is stored locally in Chrome's secure storage
- The extension only communicates with `trello.com` and `api.trello.com`
