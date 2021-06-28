const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // --> should pass
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)); // --> should fail

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // --> should pass
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)); // --> should fail