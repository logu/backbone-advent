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

  initialize: function(){
    var date = new Date();
    var modelDay = parseInt(this.model.get('day'));
    this.currentDate =  date.getDate();
    this.available = modelDay < this.currentDate || this.currentDate === modelDay
  },

  onRender: function(){

    if(this.currentDate === parseInt(this.model.get('day'))) {
      this.$el.addClass('current');
    }    
    if(parseInt(this.model.get('day')) < this.currentDate ) {
      this.ui.door.addClass("open");
    }
  },

  serializeData: function(){
    var data = Marionette.ItemView.prototype.serializeData.apply(this, arguments);
    data.available = this.available;
    return data;
  },


  onClick: function(){
    this.ui.door.hasClass('available') ? this.ui.door.toggleClass("open") : '';
  }

});
