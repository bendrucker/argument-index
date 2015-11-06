'use strict'

var test = require('tape')
var argument = require('./')

test(function (t) {
  var doubleSecond = argument(1, function double (value) {
    return value * 2
  })

  t.equals(doubleSecond(1, 2), 4)
  t.equals(doubleSecond(2, 5), 10)

  t.end()
})
