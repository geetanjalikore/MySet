const assert = require('assert');
const { MySet } = require('../src/MySet.js');

describe('union', () => {
  it('Should give union of two sets', () => {
    const set1 = new MySet([30, 20, 40, 10]);
    const set2 = new MySet([10, 20, 50]);
    const expected = new MySet([30, 20, 40, 10, 50]);
    assert.deepStrictEqual(set1.union(set2), expected);
  });
});

describe('intersect', () => {
  it('Shold give intersection of two sets', () => {
    const set1 = new MySet([30, 20, 40, 10]);
    const set2 = new MySet([10, 20, 50]);
    const expected = new MySet([10, 20]);
    assert.deepStrictEqual(set1.intersect(set2), expected);
  });
});

describe('difference', () => {
  it('Should give difference between set1 and set2', () => {
    const set1 = new MySet([30, 20, 40, 10]);
    const set2 = new MySet([10, 20, 50]);
    const expected = new MySet([30, 40]);
    assert.deepStrictEqual(set1.difference(set2), expected);
  });
});

describe('has', () => {
  it('Should validate the element in set', () => {
    const set1 = new MySet([40, 10]);
    assert.deepStrictEqual(set1.has(10), true);
  });
  it('Should validate the element which is not in set', () => {
    const set1 = new MySet([40, 10]);
    assert.deepStrictEqual(set1.has(50), false);
  });
});
