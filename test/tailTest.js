const assert = require('chai').assert;
const tail   = require('../tail');

describe("#head", () => {

  it("returns everything except the head of array", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns an empty array if input is array with only one element", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns an empty array if input is empty array", () => {
    assert.deepEqual(tail([]), []);
  });

});

