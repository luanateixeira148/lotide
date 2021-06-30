const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {
  it("returns an empty array for arrays that are 1 or 2 indexs long", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle number if array.length is odd", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns two middle indexes if array.length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});