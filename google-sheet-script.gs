// Google Sheet : Extensions > Apps Script > coller ce code > Déployer > Application Web
// Exécuter en tant que : moi | Accès : tout le monde. Copier l'URL dans SHEET_URL (index.html).
function doPost(e){
  var s=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0], d=JSON.parse(e.postData.contents);
  s.appendRow([new Date(), d.type||'', d.nom||'', d.contact||'', d.besoin||'', d.message||'']);
  return ContentService.createTextOutput('ok');
}
