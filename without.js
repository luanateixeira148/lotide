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

module.exports = without;