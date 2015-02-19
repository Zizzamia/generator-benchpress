module.exports = function(config) {
  config.set({
    scripts: [{
      id: 'angular',
      src: '../bower_components/angular/angular.min.js'
    },{
      id: '<%= scriptAppName %>',
      src: '<%= _.slugify(appname) %>-tpls.js'
    },{
      src: '<%= _.slugify(appname) %>-benchmark.js',
    }]
  })
};
