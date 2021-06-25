// const assertEqual = function(actual, expected) {
//   let errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
//   let passMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   if (actual === expected) {
//     console.log(passMsg);
//   }
//   console.assert(actual === expected, errorMsg);
// };


const findKey = function(obj, callback) {
  for (let item in obj) {
    console.log("item:", item)
    if (callback(obj[item])) {
      return item;
    }
  }
}


//TEST

// const callback = function(x) {
//   console.log("value of x:", x, "value of x.stars:", x.stars);
//   return x.stars === 2;
// }


// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, callback))  // => returns "noma"

