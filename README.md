# generator-benchpress [![NPM version](https://badge.fury.io/js/generator-benchpress.svg)](https://www.npmjs.org/package/generator-benchpress) [![NPM Downloads](http://img.shields.io/npm/dm/generator-benchpress.svg)](https://www.npmjs.org/package/generator-benchpress)
> This generator is the scaffolding tool for generate by Yeoman your benchmarks

## Dependencies
- Package manager for javascript: [npm](https://www.npmjs.com/)
- Package management: [Bower](http://bower.io/) 
- The streaming build system: [Gulp](http://gulpjs.com/) 

## Usage
Installing Yeoman
```
npm install -g yo
```

Install `generator-benchpress`:
```
npm install -g generator-benchpress
```

Run `yo benchpress` passing a module name:
```
yo benchpress [module-name]
```

## Generators

Available generators:

* [benchpress:module](#module)
* [benchpress:external](#external)

### module
Generates a module

Example:
```bash
yo benchpress module-name
```

### external
Generate a benchmark of an external module version
```bash
yo benchpress:external ng-tasty#0.5.0
```


## Creator

Designed and built by Leonardo Zizzamia, like grandma used to make.

- <http://twitter.com/zizzamia>
- <http://github.com/zizzamia>
