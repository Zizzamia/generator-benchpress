'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);

  this.scriptSuffix = '.js';
  this.sourceRoot(path.join(__dirname, '/templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join('src', dest.toLowerCase()) + this.scriptSuffix
  ]);
};

Generator.prototype.testTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join('src', dest.toLowerCase()) + this.scriptSuffix
  ]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src,
    path.join('src', dest.toLowerCase())
  ]);
};

Generator.prototype.generateSourceAndTest = function (appTemplate, testTemplate, targetDirectory) {
  // Services use classified names
  //if (this.generatorName.toLowerCase() === 'service') {
  //  this.cameledName = this.classedName;
  //}

  this.appTemplate(appTemplate, path.join(targetDirectory, this.name));
  this.testTemplate(testTemplate, path.join(targetDirectory, 'test', this.name));
};
