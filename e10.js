// https://projecteuler.net/problem=10
var upperBound = 1000000

var arr = []
var _ = require('underscore')

for(var i = 0; i < upperBound; i++ ) {
  arr.push(i+1);
}

function isPrime(i)
{
  if( i < 2 ) { return false; }
  for(j = 2; j <= Math.sqrt(i); j++) {
    if( (i%j) == 0 ) {
      return false;
    }
  }

  return true;
}

console.log(
  _.chain(arr)
    .filter(isPrime)
    .reduce(function(sum,i){return sum+i;})
    .value()
)
