const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key1 of Object.keys(object1)) {
      for (let key2 of Object.keys(object2)) {
        if (key1 === key2) {
          if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
            if (!eqArrays(object1[key1], object2[key2])) {
              return false;
            }  
          } else {
            if (object1[key1] !== object2[key2]) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;