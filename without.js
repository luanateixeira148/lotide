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


function without(source, itemsToRemove) {

  let toPush = true;
  let newArr = [];

  for (let s = 0; s < source.length; s++) {
    toPush = true;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[s] === itemsToRemove[i]) {
        toPush = false;
      }
    }
    if (toPush) {
      newArr.push(source[s]);
    }
  }
  return newArr;
}