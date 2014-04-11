Package.describe({
  summary: "Check and Save Cordova Status to Session"
});

Package.on_use(function (api) {
  api.use('deps');
  api.use('session');
  api.add_files(["cordova-status.js"], "client");
});

