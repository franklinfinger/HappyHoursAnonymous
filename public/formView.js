var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
var Model = require('./model')

////// Form View ///////

module.exports = Backbone.View.extend ({

  template: _.template(tmpl.create),
  initialize: function () {
    this.$el.append(this.render());
  },
  render: function () {
    var markup = this.template;
    this.$el.html(markup);
    return this;
  },
  events: {
    'click button': 'createPost',
  },
  createPost: function (event) {
    event.preventDefault();
    newPost = {
      address: this.$el.find('input[name="address"]').val(),
      name: this.$el.find('input[name="name"]').val(),
      city: this.$el.find('#cityPick').val(),
      phone: this.$el.find('input[name="phone"]').val(),
      startTime: this.$el.find('input[name="startTime"]').val(),
      endTime: this.$el.find('input[name="endTime"]').val(),
      onMonday: this.$el.find('input[name="onMonday"]')[0].checked,
      onTuesday: this.$el.find('input[name="onTuesday"]')[0].checked,
      onWednesday: this.$el.find('input[name="onWednesday"]')[0].checked,
      onThursday: this.$el.find('input[name="onThursday"]')[0].checked,
      onFriday: this.$el.find('input[name="onFriday"]')[0].checked,
      onSaturday: this.$el.find('input[name="onSaturday"]')[0].checked,
      onSunday: this.$el.find('input[name="onSunday"]')[0].checked,
      image: this.$el.find('input[name="image"]').val(),
      specials: this.$el.find('input[name="specials"]').val(),
    };
    var newPostModel = new Model(newPost);
    this.$el.find('input').val('');
    this.$el.find('#cityPick').val('void');
    newPostModel.save();
    this.collection.add(newPostModel);
    newPostModel = new Model({});
  }
})
