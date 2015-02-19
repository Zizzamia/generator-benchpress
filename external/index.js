'use strict';
var bower = require('bower');
var util = require('util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createBenchmarkFiles = function createBenchmarkFiles() {
  this.moduleName = this.name.split('#')[0];
  this.moduleVer = this.name.split('#')[1];
  var srcDist = 'version';
  var version = this._.slugify(this.moduleVer.replace(/\./g, '-'));
  this.moduleVerFolder = this.moduleName + '-' + version;
  var modulesPath = 'modules/benchmarks_external';
  var distPathTest = modulesPath + '/e2e_test/' + this.moduleVerFolder;
  var distPathSrc = modulesPath + '/src/' + this.moduleVerFolder + '/' + this.moduleVerFolder;

  bower.commands
  .install([this.name], {}, { 
    'directory': 'benchpress-bower/' + this.moduleVerFolder
  });
 
  this.template(srcDist + '/benchmark.es6', distPathSrc + '_benchmark.es6');
  this.template(srcDist + '/benchmark.html', distPathSrc + '_benchmark.html');
  this.template(srcDist + '/perf.es6', distPathTest + '_perf.js');
};
