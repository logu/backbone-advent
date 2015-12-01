'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Router = require('./router');
var MarketLayoutView = require('./views/calendar-layout-view');

var CalendarCollection = require('../../_entities/calendar/calendar-collection');
var Cards = require('../../_modules/cards');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.mainLayout = new MarketLayoutView();
    this.router = new Router({
      controller: this
    });
    this.showMainLayout();
    this.calendarCollection = new CalendarCollection();
  },

  showMainLayout: function() {
    this.container.show(this.mainLayout);
  },

  startCards: function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;

    if(month === 12) {
      this.cards = new Cards({
        currentDay: day,
        container: this.mainLayout.getRegion('main'),
        collection: this.calendarCollection
      });
    }

    this.calendarCollection.fetch({
      success: function(){
        console.log('ok')
      }
    });
  },

});
