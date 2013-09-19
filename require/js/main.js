
require.config({
  baseUrl: "/js/",
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: 'libs/jquery/jquery-1.8.2',
    underscore: 'libs/underscore/underscore-1.4.4',
    backbone: 'libs/backbone/backbone-1.0.0-min',
    stackmob: 'libs/stackmob/stackmob-js-0.9.1-min',
    stackmobinit: 'stackmob-init',
    templates: '../templates',
    app: 'app'
  },
  shim: {
      stackmob: {
        deps: ['jquery'],
        exports: "StackMob"
      },    
      stackmobinit: {
        deps: ['stackmob','underscore'],
        exports: "StackMobInit"

      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ["underscore"],
        exports: "Backbone"
      }
    }
});

require([
  'app'
], function( App ){
    $(function(){
      App.initialize();
    });
});