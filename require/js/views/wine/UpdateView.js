define([
  'jquery',
  'underscore', 
  'backbone',
  'models/wine/WineModel',
  'text!templates/wine/addTemplate.html',
  'router',
  'libs/app/util'
], function($,_,Backbone,Wine, AddTemplate, Router,Util){

  var UpdateView = Backbone.View.extend({
      
    events: {
       "click #saveBtn": "save"
    },

    initialize: function() {
      this.template = _.template(AddTemplate);
      this.model = this.options.model;
      this.router = this.options.router;
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template(this.model.toJSON()));

      return this;
    },

    save: function(e) {
      var collection = this.collection,
          router = this.router;

      e.preventDefault();
              
      this.model.save({winery:$('#winery').val() },{
        success: function(model){  
          router.navigate('#',{trigger: true, replace: false});
        }
      });    
    }
  });

  return UpdateView;
  
});