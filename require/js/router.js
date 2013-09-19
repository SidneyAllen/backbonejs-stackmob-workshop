// Filename: router.js
define([
  'jquery',
  'backbone',
  'libs/app/util',
  'views/wine/HomeView',
  'views/wine/AddView',
  'views/wine/UpdateView',
  'collections/wine/WineCollection'
], function($, Backbone, Util, HomeView, AddView, UpdateView, Wines) {
  
  var AppRouter = Backbone.Router.extend({
      routes:{
        "":"home",
        "add":"add",
        "update/:id":"update"
      },

      initialize:function(options) {
        this.collection = options.collection;
      },

      home:function () {
        this.changePage( new HomeView({collection : this.collection}) );
      },
      add:function () {
        this.changePage( new AddView({collection : this.collection, router : this}) );
      },

      update:function (e) {
        this.model = this.collection.get(e);
        this.changePage(new UpdateView({ model : this.model, router : this}) );
      },
    
      changePage:function (page) {
        $('body').empty();
        $('body').append($(page.render().el));
      }

    });

    var initialize = function() {
      var wines = new Wines();
      wines.fetch({async:true});

      wineApp = new AppRouter({collection : wines});
      Backbone.history.start();
    }

  return { 
    initialize: initialize
  };
});