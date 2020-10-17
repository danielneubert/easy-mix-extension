<h1 align="center">Easy Laravel Mix Extension</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/easy-mix-extension"><img src="https://img.shields.io/npm/v/easy-mix-extension.svg?color=success" alt="NPM"></a>
    <a href="https://npmcharts.com/compare/easy-mix-extension?minimal=true"><img src="https://img.shields.io/npm/dt/easy-mix-extension.svg" alt="NPM"></a>
    <a href="https://www.npmjs.com/package/easy-mix-extension"><img src="https://img.shields.io/npm/l/easy-mix-extension.svg" alt="NPM"></a>
</p>



## Introduction

This extension will add some handy shortcuts for frequently used modification for [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).



## Table of Contents

1. [**Installation**](#installation)
    - [**NPM Command**](#npm-command)
    - [**Require the Package**](#require-the-package)
1. [**Documentation**](#documentation)
    - [**alias**](#alias)
    - [**dynamic-import**](#dynamic-import)
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
|alias|Add import aliases like `import('@/App.vue')`)|
|dynamic-import|Shorthand configuration for [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)<br>*(Used for Vue 3 chunks)*|


### alias

Easy configuration for import aliases starting from the entry file.

```js
mix.easy('alias')
mix.easy('alias', { '@': '/' }) // default
mix.easy('alias', {
    '@': '/',
    '@components': 'components',
})
```


### dynamic-import

Configuration for the [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) plugin. The given directory will be relative to your output directory.

```js
mix.easy('dynamic-import')
mix.easy('dynamic-import', 'chunks') // default
```



## Use

The Easy Laravel Mix Extension is build with super easy use in mind.

You can pass each config separately, as an array or an object with additional configuration.

Here are some examples:

```js
// Separat Declaration
mix.easy('sample-1')
mix.easy('sample-2')
mix.easy('sample-3', 'value')

// Array Declaration
mix.easy(['sample-1', 'sample-2'])

// Object Declaration
mix.easy({
    'sample-3': 'value',
})
```



## Issues & Contribution

For any kind of [**Issue**](https://github.com/danielneubert/easy-mix-extension/issues) with this project feel free to open up a new topic in its [**GitHub Issue**](https://github.com/danielneubert/easy-mix-extension/issues).

If you would like to contribute to this project or add your own configuration you are welcome! Please add a pull-request, so I can curate your addition.



## License

Easy Laravel Mix Extension is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
