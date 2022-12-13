function doGet(e) {
  var template = HtmlService.createTemplateFromFile("index");
  var web = template
    .evaluate()
    .setTitle("AppScript")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      "width=device-width, initial-scale=1,maximum-scale=1.0"
    )
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setFaviconUrl("https://i.ibb.co/gWJkYWS/2.png");
  return web;
}