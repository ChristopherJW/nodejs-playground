// https://projecteuler.net/problem=6

var upperBound = 100

var arr = []
var _ = require('underscore')

for(var i = 0; i < upperBound; i++ ) {
  arr.push(i+1);
}

console.log(
  Math.pow(
    _.reduce(arr, function(sum, i) { return sum + i } ),
    2
  )
  -
  _.chain(arr)
    .map(function(i) { return i*i} )
    .reduce(function(sum, i) { return sum + i })
    .value()
)
