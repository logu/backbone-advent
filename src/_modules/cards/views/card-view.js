'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/card.hbs');

module.exports = Marionette.ItemView.extend({

  tagName: 'li',

  template: tpl,

  className: 'card',

  ui: {
    'door': '.door'
  },

  events:{
    'click' : 'onClick'
  },

  onRender: function(){
    var date = new Date();
    var day =  5;//date.getDate();
    var modelDay = parseInt(this.model.get('day'));

    if( day === modelDay) {
      this.$el.addClass('current');
    }    
    if(modelDay < day ) {
      this.ui.door.addClass("open");
    }
  },

  onClick: function(){
    this.ui.door.toggleClass("open");
  }

});
