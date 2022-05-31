class MySet {
  constructor(set) {
    this.set = new Set(set);
  }

  union(otherSet) {
    return new MySet([...this.set, ...otherSet.set]);
  }

  intersect(otherSet) {
    const intersects = [...otherSet.set].filter((element) => {
      return this.set.has(element);
    });

    return new MySet(intersects);
  }

  difference(otherSet) {
    const difference = [...this.set].filter((element) => {
      return !otherSet.set.has(element);
    });

    return new MySet(difference);
  }

  toString() {
    return `${[...this.set]}`;
  }

  has(element) {
    return [...this.set].includes(element);
  }
}

exports.MySet = MySet;
