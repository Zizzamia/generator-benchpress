'use strict';
var bower = require('bower');
var util = require('util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createBenchmarkFiles = function createBenchmarkFiles() {
  var slugifyName = this._.slugify(this.name.replace(/\./g, '-'));
  var distPath = 'benchmarks/' + slugifyName;

  this.template('app/protractor.conf.js', 'benchmarks/protractorBenchmarks.conf.js');
  this.template('app/index.html', distPath + '/index.html');
  this.template('app/benchmark.spec.js', distPath + '/benchmark.spec.js');
};
