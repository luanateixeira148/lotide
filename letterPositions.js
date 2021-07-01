const letterPositions = function(setence) {
  let result = {};

  for (let i = 0; i < setence.length; i++) {
    if (setence[i] in result) {
      result[setence[i]].push(i);
    } else {
      result[setence[i]] = [i];
    }
  }
  return result;
}

module.exports = letterPositions;