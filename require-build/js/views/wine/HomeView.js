define([
  'jquery',
  'views/wine/ListView',
  'backbone'
], function($, ListView, Backbone){
  
  var HomeView = Backbone.View.extend({
    initialize: function() {
        this.collection = this.options.collection;
        this.render();
    },

    render: function() {
      this.$el.empty();
      this.$el.append("<h1>Wine Cellar</h1>");
      this.$el.append("<a href='#add'>Add Wine</a>");

      this.listView = new ListView({collection : this.collection});
      this.$el.append(this.listView.render().el);

      return this;
    }
  });

  return HomeView;
  
});