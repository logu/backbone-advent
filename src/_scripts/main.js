// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libraries
var Backbone = require('backbone');

// Application
var Application = require('./app');

// Subapps & high level modules
var HeaderApp = require('../_modules/header');
var Calendar = require('../_subapps/calendar');

// Application  level
var app = new Application();
var appLayout = app.getAppLayout();

//---------- Adding sub apps

// Module/Header
app.addSubApp('header', HeaderApp, {
  container: appLayout.getRegion('header'),
  title: 'UX Advent Calendar'
});

// Sub app/market
app.addSubApp('calendar', Calendar, {
  container: appLayout.getRegion('main')
});




app.start();

Backbone.history.start();
