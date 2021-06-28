const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // Should pass
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // Should fail