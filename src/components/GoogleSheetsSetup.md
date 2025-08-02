# Google Sheets Integration Setup

To connect the consultation form to Google Sheets, follow these steps:

## Step 1: Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Replace 'YOUR_SPREADSHEET_ID' with your actual Google Sheets ID
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Name', 'Email', 'Phone', 'Date', 'Time', 'Timestamp']
      ]);
    }
    
    // Add the new consultation booking
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.date,
      data.time,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Copy the spreadsheet ID from the URL (the long string of characters)
4. Replace 'YOUR_SPREADSHEET_ID' in the Apps Script code with your actual ID

## Step 3: Deploy the Apps Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## Step 4: Update the React Component

1. Open `src/components/ConsultationDialog.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual web app URL

## Step 5: Grant Permissions

When you first run the script, Google will ask for permissions to access your Google Sheets. Grant the necessary permissions.

Your consultation form will now automatically save submissions to your Google Spreadsheet!