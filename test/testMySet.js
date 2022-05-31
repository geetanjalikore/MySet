const assert = require('assert');
const { MySet } = require('../src/MySet.js');

describe('size', () => {
  it('Should give size 0 when no element is in set', () => {
    const set1 = new MySet();
    assert.deepStrictEqual(set1.size(), 0);
  });

  it('Should give size 1 when one element is in set', () => {
    const set1 = new MySet();
    set1.add(10);
    assert.deepStrictEqual(set1.size(), 1);
  });
});

describe('add', () => {
  it('Should add an element to set', () => {
    const set1 = new MySet();
    set1.add(10);
    assert.deepStrictEqual(set1.size(), 1);
  });

  it('Should not add duplicate element to set', () => {
    const set1 = new MySet();
    set1.add(20);
    set1.add(10);
    set1.add(20);
    assert.deepStrictEqual(set1.size(), 2);
  });
});

describe('has', () => {
  it('Should validate the element in set', () => {
    const set1 = new MySet();
    set1.add(10);
    assert.deepStrictEqual(set1.has(10), true);
  });

  it('Should validate the element which is not in set', () => {
    const set1 = new MySet();
    assert.deepStrictEqual(set1.has(50), false);
  });
});

describe('union', () => {
  it('Should give union of two sets', () => {
    const set1 = new MySet();
    set1.add(10);

    const set2 = new MySet();
    set2.add(20);

    const expected = new MySet();
    expected.add(10);
    expected.add(20);

    assert.deepStrictEqual(set1.union(set2), expected);
  });
});

describe('intersect', () => {
  it('Shold give intersection of two sets', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(10);
    set2.add(30);

    const expected = new MySet();
    expected.add(10);
    assert.deepStrictEqual(set1.intersect(set2), expected);
  });
});

describe('difference', () => {
  it('Should give difference between set1 and set2', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(10);

    const expected = new MySet();
    expected.add(20);
    assert.deepStrictEqual(set1.difference(set2), expected);
  });
});

describe('toString', () => {
  it('Should give set in literal string', () => {
    const set = new MySet();
    set.add(10);
    assert.deepStrictEqual(set.toString(), '10');
  });
  it('Should give empty string when no element is present', () => {
    const set = new MySet();
    assert.deepStrictEqual(set.toString(), '');
  });
});
