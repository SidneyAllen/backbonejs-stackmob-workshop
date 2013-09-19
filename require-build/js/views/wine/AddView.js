define([
  'jquery',
  'underscore', 
  'backbone',
  'models/wine/WineModel',
  'text!templates/wine/addTemplate.html',
  'router',
  'libs/app/util'
], function($,_,Backbone,Wine, AddTemplate, Router,Util){

  var AddView = Backbone.View.extend({
     
      events: {
         "click #saveBtn": "save"
      },

      initialize: function() {
        this.template = _.template(AddTemplate);
        this.collection = this.options.collection;
        this.router = this.options.router;
      },

      render: function() {
        this.$el.empty();
        this.$el.append(this.template({winery : ""}));

        return this;
      },

      save: function(e) {
        var collection = this.collection,
            router = this.router;
        e.preventDefault();


        var wine = new Wine({winery:$('#winery').val() });

        wine.create({
          success: function(model){
            collection.add(model);
            router.navigate('#',{trigger: true, replace: false});
          }
        });  

        $('#winery').val('');   
        
        return this;
      }
    });

  return AddView;
  
});