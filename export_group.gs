function exportGroupEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("A2:C").clear(); // Clear previous data
  let pageToken;
  let row = 2;
  let totalGroups = 0;

  do {
    const response = AdminDirectory.Groups.list({
      customer: "my_customer",
      maxResults: 100,
      pageToken: pageToken,
    });

    const groups = response.groups;
    pageToken = response.nextPageToken;

    if (groups && groups.length > 0) {
      groups.forEach((group) => {
        sheet.getRange(row, 1).setValue(group.name);
        sheet.getRange(row, 2).setValue(group.email);
        sheet.getRange(row, 3).setValue(group.directMembersCount);
        row++;
        totalGroups++;
      });
    }
  } while (pageToken);

  sheet.getRange(2, 6).setValue(totalGroups); // Total Groups
}
