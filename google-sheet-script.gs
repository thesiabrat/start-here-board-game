// Send Mae Into Your World: saves each boarding to this Google Sheet.
// Paste this whole file into Extensions → Apps Script, then Deploy → New deployment → Web app.

var HEADERS = ["Timestamp", "Door", "Saturday pick", "Packing pick", "Sentence pick", "Weather pick", "Style", "Reading from", "Year about", "Object", "Feeling", "Remembered post/note",
               "Name", "More of in Year Two", "How they found me", "OK to quote", "Device"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    var p = (e && e.parameter) || {};
    if (p.website) return ok(); // spam trap

    var clip = function (v, n) { return String(v || "").slice(0, n || 200); };
    sheet.appendRow([
      new Date(), clip(p.door, 30), clip(p.s1, 20), clip(p.s2, 20), clip(p.s3, 20), clip(p.s4, 20), clip(p.style, 40), clip(p.q1, 80), clip(p.q2, 120), clip(p.q3, 80), clip(p.q4, 30),
      clip(p.q5, 120), clip(p.name, 40), clip(p.more, 600), clip(p.found, 40), clip(p.quoteOk, 5), clip(p.ua, 10)
    ]);
    return ok();
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return ok(); }

function ok() {
  return ContentService.createTextOutput("ok").setMimeType(ContentService.MimeType.TEXT);
}
