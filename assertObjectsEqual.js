//object1 is the actual variable, object2 is the expected variable

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

const assertObjectsEqual = function(object1, object2) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${object1} !==  ${object2}`;
  let passMsg = `✅✅✅ Assertion Passed: ${object1} === ${object2}`;

let answer;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    answer = false;
  } else if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 of Object.keys(object1)) {
        for (let key2 of Object.keys(object2)) {
          if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
            if (!eqArrays(object1[key1], object2[key2])) {
              answer = false;
          } else {
          if (key1 === key2) {
            if (object1[key1] !== object2[key2]) {
              answer = false;
            } else {
              answer = true;
            }
          } 
        }
      }
    }
  }
}
  if (answer) {
    return passMsg;
  } else {
    return errorMsg;
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false