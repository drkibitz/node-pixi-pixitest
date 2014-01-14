[![NPM version](https://badge.fury.io/js/node-pixi-pixitest.png)](http://badge.fury.io/js/node-pixi-pixitest)

# Node Pixi - pixitest

A test lib for [node-pixi](https://github.com/drkibitz/node-pixi). The purpose of this module is to maintain a centralized codebase to support node-pixi cross-platform tests.

## Install

node-pixi-pixitest can be installed with [Node](http://nodejs.org/) and [NPM](https://npmjs.org/). Use `--save-dev` to automattically append it to your package.json `devDependencies`.

```shell
npm install node-pixi-pixitest --save-dev
```

## Usage

This module comes with [Chai.js](http://chaijs.com) and [Resemble.js](https://github.com/huddle/resemble.js). These namespaces are defined globally in the browser or node:

- `chai`
- `expect` (Shortcut to chai.expect)
- `resemble`
- `pixitest`

To use in the browser:
```html
<script src="pixitest.js"></script>
```

To use in node.js:
```javascript
var pixitest = require('node-pixi-pixitest');
console.log(global.pixitest === pixitest); // true
```

## Build

node-pixi-pixitest can be compiled for the browser with [Grunt](http://gruntjs.com/). If you don't already have this, go install [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) then install the [Grunt Command Line](http://gruntjs.com/getting-started).
```shell
npm install -g grunt-cli
```

Get the source:
```shell
git clone https://github.com/drkibitz/node-pixi-pixitest.git
```

Then, within your cloned repository, install node-pixi-pixitest devDependencies using NPM:
```shell
npm install
```

Then build with Grunt:
```
grunt
```

## Contribute

Want to contribute to node-pixi? Just make a pull request or a suggestion on [Github](https://github.com/drkibitz/node-pixi/issues). Please make sure you write tests, and run them before committing changes.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/drkibitz/node-pixi-pixitest/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

