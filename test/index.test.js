const sum = require('../index');
const assert = require('assert');

describe('function sum test suits', () => {
  it('should sum two numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should throw TypeError if parameters are not numbers', () => {
    assert.throws(() => sum('1', []), TypeError);
  });
});
