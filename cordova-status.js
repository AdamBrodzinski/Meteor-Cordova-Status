// Meteor Generate
// Copyright(c) 2014 Adam Brodzinski <adambrodzinski@gmail.com>
// MIT Licensed
//
// Set Cordova events into Session so they can be reactivley used in
// your app. This package also handles disconnecting before the app
// is put into background mode. This prevents iOS from crashing when
// app is put into the background


/*global cordovaStatus:true */

document.addEventListener("deviceready", function() {
  Session.set('cordovaReady', true);
  Session.set('cordovaLoaded', true);
  Session.set('cordovaStatus', 'ready');
});

document.addEventListener("pause", function() {
  Session.set('cordovaStatus', 'paused');
});

document.addEventListener("resume", function() {
  Session.set('cordovaStatus', 'resumed');
});

document.addEventListener("offline", function() {
  Session.set('cordovaStatus', 'offline');
});

document.addEventListener("online", function() {
  Session.set('cordovaStatus', 'online');
});


// In any of these states, we "may" have lost our connectivity to Meteor
// if we have not and we are connected, than this command has no effect
// http://docs.meteor.com/#meteor_reconnect
//
Deps.autorun(function () {
  //console.debug('[Cordova Status]:', cordovaStatus);
  var cordovaStatus = Session.get('cordovaStatus');

  if (cordovaStatus === 'online' ||  cordovaStatus === 'resumed') {
    Meteor.reconnect();
  }

  if (cordovaStatus === 'paused' || cordovaStatus === 'offline') {
    Meteor.disconnect();
  }
});
