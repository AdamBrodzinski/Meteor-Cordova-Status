// Cordova Status
// Copyright(c) 2014 Adam Brodzinski <adambrodzinski@gmail.com>
// MIT Licensed
//
// Set Cordova events into Session so they can be reactivley used in
// your app.
//
// This package also handles disconnecting before the app is put into
// background mode. This prevents iOS from crashing when paused.
//
// If you want to handle offline/online events you'll need to use the
// reactive online/offline to call #disconnect/#reconnect

document.addEventListener("deviceready", function() {
  Session.set('cordovaReady', true);
  Session.set('cordovaLoaded', true);
  Session.set('cordovaStatus', 'ready');
});


document.addEventListener("pause", function() {
  Session.set('cordovaStatus', 'paused');
  Meteor.disconnect();
});


document.addEventListener("resume", function() {
  Session.set('cordovaStatus', 'resumed');
  Meteor.reconnect();
});


document.addEventListener("offline", function() {
  Session.set('cordovaStatus', 'offline');
});


document.addEventListener("online", function() {
  Session.set('cordovaStatus', 'online');
});

