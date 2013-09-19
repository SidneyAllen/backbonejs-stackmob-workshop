define([ 
  'stackmobinit'
], function(StackMob) {

  var Model = StackMob.Model.extend({
      schemaName: "wine"
 	});

  return Model;

});

