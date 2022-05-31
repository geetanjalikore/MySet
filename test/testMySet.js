const assert = require('assert');
const { MySet } = require('../src/mySet.js');

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
    set1.add(20);
    set1.add(20);
    assert.deepStrictEqual(set1.size(), 1);
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

  it('Should give union by removing duplicate elements', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(10);
    set2.add(30);

    const expected = new MySet();
    expected.add(10);
    expected.add(20);
    expected.add(30);

    assert.deepStrictEqual(set1.union(set2), expected);
  });
});

describe('intersect', () => {
  it('Should give intersection of two sets', () => {
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

  it('Should give intersection as empty when no common elements found', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(40);
    set2.add(30);

    const expected = new MySet();
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

  it('Should give difference empty if all items of set1 are in set2', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(10);
    set2.add(20);

    const expected = new MySet();
    assert.deepStrictEqual(set1.difference(set2), expected);
  });

  it('Should give all elements if all items of set1 are absent set2', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);

    const set2 = new MySet();
    set2.add(30);

    const expected = new MySet();
    expected.add(10);
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

  it('Should give comma separated values in string for multiple items', () => {
    const set = new MySet();
    set.add(10);
    set.add('hello');
    set.add([30, 20]);
    assert.deepStrictEqual(set.toString(), '10,hello,30,20');
  });
});

describe('clear', () => {
  it('Should clear all the elements of set', () => {
    const set1 = new MySet();
    set1.add(10);
    set1.add(20);
    set1.clear();
    assert.deepStrictEqual(set1.size(), 0);
  });
});
