// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let errorMsg = "🛑🛑🛑 Assertion Failed" + actual + " !== " + expected;
  let passMsg = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
  if (actual === expected) {
    console.log(passMsg);
  }
  console.assert(actual === expected, errorMsg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 3);