const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (eqArrays(actual, expected)) {
    return passMsg;
  } else {
    return errorMsg;
  }
};

module.exports = assertArraysEqual;