class MySet {
  constructor(set) {
    this.elements = new Set(set);
  }

  union(otherSet) {
    return new MySet([...this.elements, ...otherSet.elements]);
  }

  intersect(otherSet) {
    const intersects = [...otherSet.elements].filter((element) => {
      return this.elements.has(element);
    });

    return new MySet(intersects);
  }

  difference(otherSet) {
    const difference = [...this.elements].filter((element) => {
      return !otherSet.elements.has(element);
    });

    return new MySet(difference);
  }
  toString() {
    return `${[...this.elements]}`
  }

  has(e) {
    return this.elements.has(e);
  }

};

const set = new MySet([30, 20, 40, 10]);
const set2 = new MySet([10, 20, 50]);

console.log('Union :', set.union(set2) + '');
console.log('Intersect :', set.intersect(set2) + '');
console.log('Difference :', set.difference(set2) + '');
