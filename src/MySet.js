class MySet {
  constructor() {
    this.set = [];
  }

  has(element) {
    return this.set.includes(element);
  }

  add(element) {
    if (!this.has(element)) {
      this.set.push(element);
    }
  }

  size() {
    return this.set.length;
  }

  union(otherSet) {
    const set = [...this.set, ...otherSet.set];
    const unionSet = new MySet();
    set.forEach((item) => unionSet.add(item));
    return unionSet;
  }

  intersect(otherSet) {
    const intersects = otherSet.set.filter(element => this.has(element));
    const intersectSet = new MySet();
    intersects.forEach(item => intersectSet.add(item));
    return intersectSet;
  }

  difference(otherSet) {
    const difference = this.set.filter((element) => !otherSet.has(element));
    const differenceSet = new MySet();
    difference.forEach((item) => differenceSet.add(item));
    return differenceSet;
  }

  toString() {
    return `${[...this.set]}`;
  }
}

exports.MySet = MySet;
