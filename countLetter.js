const countLetters = function(str) {
  let result = {};

  for (const letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}