function doGet(request) {
  var file = DriveApp.getFileById(request.parameters.srcId);
  const content = file.getBlob().getBytes();
  const encodedContent = Utilities.base64Encode(content);
  return ContentService.createTextOutput(request.parameters.dstId + ".setAttribute('src', 'data:image/jpg;base64, "+ encodedContent + "')").setMimeType(ContentService.MimeType.JAVASCRIPT);
} 
