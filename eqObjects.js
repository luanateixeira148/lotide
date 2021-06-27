const assertEqual = function(actual, expected) {
  let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
  // console.assert(actual === expected, errorMsg);
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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 of Object.keys(object1)) {
        for (let key2 of Object.keys(object2)) {
          if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
            if (!eqArrays(object1[key1], object2[key2])) {
              return false;
          } else {
          if (key1 === key2) {
            if (object1[key1] !== object2[key2]) {
              return false;
            } else {
              return true;
            }
          } 
        }
      }
    }
  }
}
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), true); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false