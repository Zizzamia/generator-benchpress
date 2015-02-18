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
  if (this.moduleName !== 'dist') {
    var srcDist = 'benchmarks/version';
    var version = this._.slugify(this.moduleVer.replace(/\./g, '-'));
    this.moduleVerFolder = this.moduleName + '-' + version;
    var distPath = 'benchmarks/' + this.moduleVerFolder;
    bower.commands
    .install([this.name], {}, { 
      'directory': 'benchpress-bower/' + this.moduleVerFolder
    });
  } else {
    var srcDist = 'benchmarks/dist';
    var distPath = 'benchmarks/' + this.appname;
  }
 
  this.template(srcDist + '/benchmark.js', distPath + '/benchmark.js');
  this.template(srcDist + '/main.html', distPath + '/main.html');
  this.template(srcDist + '/bp.conf.js', distPath + '/bp.conf.js');
};
