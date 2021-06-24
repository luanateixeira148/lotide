const assertArraysEqual = function(a, b) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${a} !==  ${b}`;
  let passMsg = `✅✅✅ Assertion Passed: ${a} === ${b}`;

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

  if (answer) {
    console.log(passMsg);
  }
  console.assert(answer, errorMsg);
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

const letterPositions = function(setence) {
  let result = {};

  for (let i = 0; i < setence.length; i++) {
    if (setence[i] in result) {
      result[setence[i]].push(i);
    } else {
      result[setence[i]] = [i];
    }
  }
  return result;
}

console.log(letterPositions("lighthouse in the house"));