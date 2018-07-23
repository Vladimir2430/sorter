module.exports = class Sorter {
  constructor() {
    this.arr = [];
    this.compare = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let arr1 = [], compareFunction = this.compare;

    for (let i = 0; i < indices.length; i++) {
      arr1.push(this.arr[indices[i]]);
    }

    indices.sort((a, b) => a - b);
    arr1.sort(compareFunction);

    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = arr1[i];
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}
