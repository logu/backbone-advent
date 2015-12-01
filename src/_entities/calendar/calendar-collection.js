'use strict';
var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
var Calendar = require('./calendar-model.js');

module.exports = Backbone.Collection.extend({

  model: Calendar,

  url: 'https://spreadsheets.google.com/feeds/list/1nekHxDh6FF5r_QBe72nlrzf0LydBqdCC8IobDfdiWoQ/od6/public/values?alt=json',
  //https://docs.google.com/spreadsheets/d/1nekHxDh6FF5r_QBe72nlrzf0LydBqdCC8IobDfdiWoQ/pubhtml

  // As we using JSONP, we need to override the built in Backbone fetch()
  sync: function (method, model, options) {
    var params = _.extend({
      type: 'GET',
      dataType: 'jsonp',
      url: this.url,
      processData: false
    }, options);
    return $.ajax(params);
  },

  // The JSON returned isn't collection friendly for our needs (the items are nested further down),
  // so parse the response before passing it on
  parse: function (response) {
    // This is what we need
    var data = response.feed.entry;
    // But they have IDs, and Backbone will think they're duplicates, so drop the ID
    data = _.map(data, function (item) {
      var obj = _.omit(item, 'id');
      return obj;
    });
    return data;
  }

});
