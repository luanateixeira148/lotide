const assertEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
  }
  console.assert(actual === expected, errorMsg);
};

let tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);