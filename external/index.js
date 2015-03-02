'use strict';
var bower = require('bower');
var fs = require('fs');
var util = require('util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createBenchmarkFiles = function createBenchmarkFiles() {
  var nameModule = this.name;
  var srcPerfSpec = undefined;
  if (this.arguments.length > 1) {
    srcPerfSpec = this.arguments[0];
    nameModule = this.arguments[1];
  }
  if (nameModule.indexOf('#') >= 0) {
    this.moduleName = nameModule.split('#')[0];
    this.moduleVer = nameModule.split('#')[1];
    var version = this._.slugify(this.moduleVer.replace(/\./g, '-'));
    this.moduleVerFolder = this.moduleName + '-' + version;
  } else {
    this.moduleVerFolder = nameModule;
  }
  var distPath = 'benchmarks/' + this.moduleVerFolder;

  if (srcPerfSpec) {
    var srcPath = 'benchmarks/' + srcPerfSpec;
    if (!fs.existsSync(distPath)){
      fs.mkdirSync(distPath);
    }
    fs.createReadStream(srcPath + '/index.html')
      .pipe(fs.createWriteStream(distPath + '/index.html'));
    fs.createReadStream(srcPath + '/benchmark.spec.js')
      .pipe(fs.createWriteStream(distPath + '/benchmark.spec.js'));
  } else {
    this.template('app/protractor.conf.js', 'benchmarks/protractorBenchmarks.conf.js');
    this.template('app/index.html', distPath + '/index.html');
    this.template('app/benchmark.spec.js', distPath + '/benchmark.spec.js');
  }
  
  bower.commands
  .install([nameModule], {'forceLatest': true}, { 
    'directory': distPath + '/bower_components'
  });
};
