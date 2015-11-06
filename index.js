'use strict'

module.exports = function argumentIndex (index, fn) {
  return function indexed () {
    return fn(arguments[index])
  }
}
