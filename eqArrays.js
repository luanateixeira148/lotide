const eqArrays = function(arr1, arr2) {
  let answer;
  if (arr1.length !== arr2.length) {
    answer = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] || typeof(arr1[i] !== typeof(arr2[i]))) {
        answer = false;
      }

      if (arr1[i] === arr2[i] && typeof(arr1[i]) === typeof(arr2[i])) {
        answer = true;
      }
    }
  }
  return answer;
}

module.exports = eqArrays;