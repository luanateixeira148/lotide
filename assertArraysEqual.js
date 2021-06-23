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


//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);