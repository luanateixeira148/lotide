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


function middle(arr) {
  let newArr = []
  let middleIndex = 0;
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 === 0) {
    middleIndex = arr.length/2;
    newArr.push(arr[middleIndex - 1]);
    newArr.push(arr[middleIndex]);
    return newArr;
  } else if (arr.length % 2 === 1) {
    middleIndex = arr.length/2 - 0.5
    newArr.push(arr[middleIndex]);
    return newArr;
  }
}


//TEST
console.log(middle([1])); // []
console.log(middle([1, 2])); // []

console.log(middle([1, 2, 3])); // odd
console.log(middle([1, 2, 3, 4, 5])); // odd

console.log(middle([1, 2, 3, 4])); // even
console.log(middle([1, 2, 3, 4, 5, 6])); // even