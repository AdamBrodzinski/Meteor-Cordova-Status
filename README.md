Meteor-Cordova-Status
=====================

Sets various Cordova events into Session so they can be reactivley used in your app.

### Install Package

`mrt add cordova-status`

### Usage

```javascript
  if (Session.equals('cordovaStatus', 'ready')) {
    console.log('Ready to go...');
  }   

  if (Session.equals('cordovaStatus', 'resumed')) {
    console.log('resumed app');
  }
  
  if (Session.equals('cordovaStatus', 'offline')) {
    alert('No data connection');
  }   
```

### Offline handling

This package also handles disconnecting before the app is put into background mode. This prevents iOS
from crashing when app is put into the background and brought back into the foreground.

### note, as of 0.2.0 the package no longer automatically disconnects and reconnects when going online/offline

