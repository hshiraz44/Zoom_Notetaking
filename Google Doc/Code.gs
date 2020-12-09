function onOpen()
{
  DocumentApp.getUi().createMenu('My Menu')
    .addItem('Show Sidebar','showSideBar' )
    .addToUi();
}

function addTimeStamp()
{
  var ts=Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'MM/dd/yyyy HH:mm:ss');
  DocumentApp.getActiveDocument().getBody().appendParagraph(ts);
}

function showSideBar()
{
  var ui=HtmlService.createHtmlOutputFromFile('sidebar');
  DocumentApp.getUi().showSidebar(ui);
}

function doGet()
{
  var ui=HtmlService.createHtmlOutputFromFile('sidebar');
  return ui.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}