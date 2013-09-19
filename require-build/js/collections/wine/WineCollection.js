define([
  'stackmobinit',
  'models/wine/WineModel'
], function(StackMob,WineModel){

  var Collection = StackMob.Collection.extend({
 	model: WineModel
  });

  return Collection;

});