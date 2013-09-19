define([
  'jquery',
  'underscore', 
  'backbone',
  'text!templates/wine/listTemplate.html'
], function($,_,Backbone, ListTemplate){

  var ListView = Backbone.View.extend({
      tagName: 'ul',

      initialize: function() {
        this.collection = this.options.collection;
        this.template = _.template(ListTemplate);
        this.collection.bind('all', _.bind(this.render,this));
      },

      render: function() {
        var   $el = this.$el,
        template = this.template;
        
        this.$el.empty();
        
        this.collection.each(function(model) {
          $el.append(template(model.toJSON()));
        });
                 
        return this;
      }
    });

  return ListView;
  
});