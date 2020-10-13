<h1 align="center">Easy Laravel Mix Extension</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/easy-mix-extension"><img src="https://img.shields.io/npm/v/easy-mix-extension.svg?color=success" alt="NPM"></a>
    <a href="https://npmcharts.com/compare/easy-mix-extension?minimal=true"><img src="https://img.shields.io/npm/dt/easy-mix-extension.svg" alt="NPM"></a>
    <a href="https://www.npmjs.com/package/easy-mix-extension"><img src="https://img.shields.io/npm/l/easy-mix-extension.svg" alt="NPM"></a>
</p>



## Introduction

This extension will add some handy shortcuts for frequently used modification for [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).

> This will also include support for the [Vue 3](https://github.com/vuejs/vue) dev-tools as long as it's missing from [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).



## Table of Contents

1. [**Installation**](#installation)
    - [**NPM Command**](#npm-command)
    - [**Require the Package**](#require-the-package)
1. [**Documentation**](#documentation)
    - [**babel-dynamic-import**](#babel-dynamic-import)
    - [**babel-root-import**](#babel-root-import)
1. [**Use**](#use)
1. [**Issues & Contribution**](#issues--contribution)
1. [**License**](#license)



## Installation

Installation after successfully [installed Laravel Mix](https://laravel-mix.com/docs/5.0/installation). Simply execute the following command line:



### NPM Command

```sh
npm i -D easy-laravel-mix
```



### Require the Package

The package can be simply required within your **`webpack.mix.js`** file:

```js
const mix = require('laravel-mix')

// Add the following line:
require('easy-mix-extension')

mix...
```


## Dokumentation

The following configurations are currently available:

|Configuration Name|Description|
|-|-|
|babel-dynamic-import|Shorthand configuration for [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)<br>*(Used for Vue 3 chunks)*|
|babel-root-import|Shorthand configuration for [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import)|
|vue-3-support|Fixes the [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) bug for Vue 3 dev-tools|

### babel-dynamic-import

Configuration for the [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) plugin. By default this will place all dynamic import chunks into a separate folder.

```js
mix.easy('babel-dynamic-import')
mix.easy('babel-dynamic-import', 'public/js/chunks') // Default Value
```

### babel-root-import

Configuration for the [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import) plugin. This will reference the root directory (of the javascript resources) with a given character.

```js
mix.easy('babel-root-import')
mix.easy('babel-root-import', '@') // Default Value
```



## Use

The Easy Laravel Mix Extension is build with super easy use in mind.

You can pass each config separately, as an array or an object with additional configuration.

Here are some examples:

```js
// Separat Declaration
mix.easy('name-sample-1')
mix.easy('name-sample-2')
mix.easy('name-with-value-1', 'value')
mix.easy('name-with-value-2', 'value')

// Array Declaration
mix.easy(['name-sample-1', 'name-sample-2'])

// Object Declaration
mix.easy({
    'name-with-value-1': 'value',
    'name-with-value-2': 'value',
})
```



## Issues & Contribution

For any kind of [**Issue**](https://github.com/danielneubert/easy-mix-extension/issues) with this project feel free to open up a new topic in its [**GitHub Issue**](https://github.com/danielneubert/easy-mix-extension/issues).

If you would like to contribute to this project or add your own configuration you are welcome! Please add a pull-request, so I can curate your addition.



## License

Easy Laravel Mix Extension is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
