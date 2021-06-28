const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');


//TEST
console.log(assertArrayEqual(middle([1]), [1])); // [] empty --> false
console.log(assertArrayEqual(middle([1, 2]), [1])); // [] empty --> return false

console.log(assertArrayEqual(middle([1, 2, 3]), [2])); // odd --> true
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3])); // odd --> true

console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])); // even --> true
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // even --> true