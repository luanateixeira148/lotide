const assertEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
  }
  console.assert(actual === expected, errorMsg);
};


const countLetters = function(str) {
  let result = {};

  for (const letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"));