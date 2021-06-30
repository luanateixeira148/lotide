const takeUntil = function(array, callback) {
  let count = 0;
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, count);
    }
    count++;
  }
}