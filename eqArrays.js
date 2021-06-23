const assertEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
  }
  console.assert(actual === expected, errorMsg);
};

function eqArrays(a, b) {
  let answer;
  if (a.length !== b.length) {
    answer = false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        answer = false;
      } else {
        if (typeof(a[i]) !== typeof(b[i])) {
          answer = false;
        } else {
          answer = true;
        }
      }
    }
  }
  return answer;
}


//TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays((["1", "2", "3"], ["1", "2", 3]), true));