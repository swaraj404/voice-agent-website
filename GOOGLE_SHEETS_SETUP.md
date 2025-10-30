# Google Sheets Form Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "KOEL AI Contact Form Submissions"
3. In the first row, add these headers:
   - Column A: **Timestamp**
   - Column B: **Name**
   - Column C: **Email**
   - Column D: **Phone**
   - Column E: **Message**

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false,
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput("Form endpoint is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (💾 icon)
5. Name your project: "KOEL AI Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description**: "KOEL AI Contact Form"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to KOEL AI Form Handler (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycbz.../exec
    ```

## Step 4: Add URL to Your Website

Copy the web app URL and paste it in the next step when I update the code.

## Step 5: Test the Form

After deployment:
1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - the data should appear!

## Email Notifications (Optional)

To get email notifications when someone submits the form, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: "contact@koelai.com", // Change to your email
      subject: "New Contact Form Submission - KOEL AI",
      body: `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}

Submitted at: ${timestamp}
      `
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Troubleshooting

- **CORS Error**: Make sure "Who has access" is set to "Anyone"
- **Permission Denied**: Re-authorize the script in Deploy settings
- **Data not appearing**: Check if the script execution is set to "Me" not "User accessing the web app"
