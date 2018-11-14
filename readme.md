# argument-index [![Build Status](https://travis-ci.org/bendrucker/argument-index.svg?branch=master)](https://travis-ci.org/bendrucker/argument-index) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/argument-index.svg)](https://greenkeeper.io/)

> Pass an argument at a specified index along to a function


## Install

```
$ npm install --save argument-index
```


## Usage

```js
var argument = require('argument-index')

var doubleSecond = argument(1, function double (value) {
  return value * 2
})

doubleSecond(1, 2)
//=> 4

doubleSecond(2, 5)
//=> 10
```

## API

#### `argument(index, fn)` -> `function`

Returns a function (outer) that will call `fn` (inner) with the outer argument at `index`.

##### index

*Required*  
Type: `number`

The numeric index of the argument to process.

##### fn

*Required*  
Type: `function`  
Arguments: `value`

A single argument function that will be called with the argument at the specified index.


## License

MIT © [Ben Drucker](http://bendrucker.me)
