module.exports = function(config) {
  config.set({
    scripts: [{
      id: 'angular',
      src: '../../bower_components/angular/angular.min.js'
    },{
      id: '<%= moduleName %>',
      src: '../../benchpress-bower/<%= moduleVerFolder %>/<%= _.slugify(moduleName) %>/<%= moduleName %>.min.js'
    },{
      src: 'benchmark.js',
    }]
  })
};
