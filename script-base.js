'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');
var chalk = require('chalk');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = this._.slugify(this._.humanize(this.appname));
  this.scriptAppName = this._.camelize(this.appname);

  this.cameledName = this._.camelize(this.name);
  this.classedName = this._.classify(this.name);
  this.slugifyName = this._.slugify(this._.humanize(this.name));

  this.env.options.srcPath = this.options.srcPath = 'src';

  var sourceRoot = '/templates';
  this.scriptSuffix = '.js';

  this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.srcPath, dest.toLowerCase()) + this.scriptSuffix
  ]);
};

Generator.prototype.testTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.srcPath, dest.toLowerCase()) + '.spec' + this.scriptSuffix
  ]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + '.html',
    path.join('template', dest.toLowerCase()) + '.html'
  ]);
};

Generator.prototype.generateSourceAndTest = function (appTemplate, testTemplate, targetDirectory) {
  var name = this.slugifyName;
  this.appTemplate(appTemplate, path.join(targetDirectory, name));
  this.testTemplate(testTemplate, path.join(targetDirectory, 'test', name));
};

Generator.prototype.generateTemplateComponent = function () {
  var name = this.slugifyName;
  this.htmlTemplate('component', path.join(name, name));
};
