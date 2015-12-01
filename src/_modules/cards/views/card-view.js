'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/card.hbs');

module.exports = Marionette.ItemView.extend({

  tagName: 'li',

  template: tpl,

  className: 'card',

  ui: {
  },

  events:{
    'click' : 'onClick'
  },

  initialise: function(options){
      this.currentDay = options.currentDay;
  },

  onRender: function(options){
    if( this.currentDay !== this.model.get('day') && this.model.get('day') < this.currentDay ) {
      console.log('today is open', this.model.get('day'))
    }
  }



});
