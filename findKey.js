const findKey = function(obj, callback) {
  for (let item in obj) {
    // console.log("item:", item)
    if (callback(obj[item])) {
      return item;
    }
  }
};

module.exports = findKey;