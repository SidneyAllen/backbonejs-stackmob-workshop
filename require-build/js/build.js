({
    appDir: "../",
    baseUrl: "js",
    dir: "../../require-build",
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
        deps: ['jquery','underscore','backbone','stackmob'],
        exports: "StackMobInit"

      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      }
    },
    modules: [
        {
            name: "main"
        }
    ]
})