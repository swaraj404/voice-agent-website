# Google Sheets Form Troubleshooting Guide

## Issue: Form data not saving to Google Sheets

### Solution: Update Your Google Apps Script

The issue is likely with how the script receives data. Please **replace** your entire Google Apps Script with this updated version:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    
    let data;
    
    if (e.postData && e.postData.contents) {
     
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    

    const timestamp = new Date();
    sheet.appendRow([
      Utilities.formatDate(timestamp, "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss"),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'Data saved successfully',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    
    Logger.log('Error: ' + error.toString());
    
   
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false,
        message: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


function doGet(e) {
  return ContentService
    .createTextOutput("✅ Form endpoint is working! Your script is deployed correctly.")
    .setMimeType(ContentService.MimeType.TEXT);
}


function testManual() {
  const testData = {
    parameter: {
      name: "Test User",
      email: "test@example.com",
      phone: "+91 9876543210",
      message: "This is a test message"
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

## Step-by-Step Fix:

### 1. Update Apps Script
1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. **Delete all existing code**
4. **Paste the new code above**
5. Click **Save** (💾 icon)

### 2. Re-deploy the Script
This is **CRITICAL** - you must create a NEW deployment:

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ → Choose **Web app**
3. Settings:
   - **Description**: "Contact Form v2" (or any new description)
   - **Execute as**: **Me** (your email address)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. Copy the **NEW** Web App URL

### 3. Update Contact.tsx
Replace the old URL with the new one in your Contact.tsx file (line 22)

### 4. Test Your Setup

**Test 1: Visit the URL directly**
- Open the Web App URL in your browser
- You should see: "✅ Form endpoint is working!"

**Test 2: Check Sheet Headers**
Make sure your Google Sheet has these exact headers in Row 1:
- Column A: **Timestamp**
- Column B: **Name**
- Column C: **Email**
- Column D: **Phone**
- Column E: **Message**

**Test 3: Manual Test in Apps Script**
1. In Apps Script editor, select `testManual` function from dropdown
2. Click **Run** ▶️
3. Check your Google Sheet - you should see test data appear

**Test 4: Submit the Form**
1. Fill out the contact form on your website
2. Click Submit
3. Check Google Sheet immediately
4. Data should appear in a new row

## Common Issues:

### Issue 1: "Authorization Required" Error
**Fix:** Re-authorize the script:
1. Deploy → Manage deployments
2. Click ✏️ (edit) on your deployment
3. Click **Deploy**
4. Re-authorize when prompted

### Issue 2: Data Still Not Appearing
**Check these:**
- ✅ Sheet headers match exactly (Timestamp, Name, Email, Phone, Message)
- ✅ "Execute as" is set to "Me" (not "User accessing the web app")
- ✅ "Who has access" is set to "Anyone"
- ✅ You're using the NEW deployment URL (not the old one)

### Issue 3: Permission Denied
**Fix:**
1. Go to Deploy → Manage deployments
2. Click "Archive" on old deployments
3. Create a fresh deployment
4. When authorizing:
   - Click "Advanced"
   - Click "Go to [Project Name] (unsafe)"
   - Click "Allow"

### Issue 4: URL Changed But Still Not Working
- Clear browser cache
- Try in incognito/private window
- Wait 1-2 minutes after deployment (propagation time)

## Debug Checklist:

Run through this list:
- [ ] Sheet has correct headers in Row 1
- [ ] Apps Script code is updated to new version
- [ ] New deployment created (not just re-deployed old one)
- [ ] "Execute as: Me" is selected
- [ ] "Who has access: Anyone" is selected
- [ ] New Web App URL copied to Contact.tsx
- [ ] Test URL in browser shows success message
- [ ] testManual() function runs successfully in editor
- [ ] Form submission shows success alert
- [ ] Checked Sheet within 30 seconds of submission

## Still Having Issues?

1. **Check Apps Script Logs:**
   - In Apps Script editor: View → Executions
   - Look for errors in recent executions

2. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Go to Console tab
   - Submit form and check for errors

3. **Try Alternative Method:**
   Use the JSON method instead - I can provide an alternative implementation

Let me know which step is failing and I'll help you fix it! 🚀
