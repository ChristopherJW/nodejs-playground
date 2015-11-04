// https://projecteuler.net/problem=1

var upperBound = 1000

var arr = []
var _ = require('underscore')

for(var i = 0; i < upperBound; i++ ) {
  arr.push(i);
}

console.log(
  _.chain(arr)
    .filter(function(i) { return (i%3)==0 || (i%5) == 0 } )
    .reduce(function(sum, i) { return sum + i}, 0)
    .value()
)
