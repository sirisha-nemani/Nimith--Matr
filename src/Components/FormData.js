function doPost(e) {
  const sheetUrl = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1a8Ulv2X10Z4_c5MPYn49LTv9Ah8HTX6fCjBNG7iNsok/edit?pli=1&gid=0#gid=0");

  const sheet = sheetUrl.getSheetByName('Sheet1');

  let data = e.parameter;

  sheet.appendRow([data.Name,data.Company,data.Email,data.Budget_Range,data.Needs]);

  return ContentService.createTextOutput("Data Added Successfully");
}
