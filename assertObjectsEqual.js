const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (eqObjects(actual, expected)) {
    return passMsg;
  } else {
    return errorMsg;
  }
};

module.exports = assertObjectsEqual;