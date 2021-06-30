let findKeyByValue = function(obj, val) {
  for (let item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
}