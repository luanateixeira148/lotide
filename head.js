// FUNCTION IMPLEMENTATION
let assertEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
  }
  console.assert(actual === expected, errorMsg);
};

let head = function(arr) {
  return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");