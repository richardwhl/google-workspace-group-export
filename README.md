# Google Workspace Group Email Exporter

A Google Apps Script that exports all Google Workspace groups with their emails and member counts to a Google Sheet.

![Google Workspace Groups Export](https://img.shields.io/badge/Google%20Workspace-Admin%20Directory-blue) 
![Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-ES6-yellow)

## 📌 Features

- 📊 Exports all Google Groups in your domain
- 🧹 Automatically clears previous data before export
- 📋 Outputs three key details per group:
  - Group name
  - Group email address
  - Direct member count
- 🔢 Displays total group count
- ⏭️ Handles API pagination automatically

## 🛠️ Prerequisites

- Google Workspace admin account
- Access to Google Apps Script
- Admin Directory API enabled
- Basic spreadsheet permissions

## 🚀 Installation

1. **Create a new Google Sheet**
2. **Open Script Editor**:
   - `Extensions` → `Apps Script`
3. **Copy files**:
   - Paste `Code.gs` content
   - Add `appsscript.json` manifest
4. **Enable services**:
   - In Apps Script editor, click `Services` (+)
   - Add `Admin Directory API`

## 🏃‍♂️ Usage

### Basic Usage
1. Open your Google Sheet
2. Run `exportGroupEmails()` from:
   - The Apps Script editor
   - Or the custom menu (if enabled)

### Output Structure
| Column | Data          |
|--------|---------------|
| A      | Group Name    |
| B      | Group Email   |
| C      | Member Count  |
| F2     | Total Groups  |

## ⚙️ Configuration

### Optional Custom Menu
Add this to `Code.gs` for easier access:
```javascript
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Group Export')
    .addItem('Export Groups', 'exportGroupEmails')
    .addToUi();
}
