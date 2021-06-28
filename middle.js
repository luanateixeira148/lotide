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

module.exports = middle;