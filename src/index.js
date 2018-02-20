class Sorter {
  constructor() {
    this.arr=[];
  }

  add(element) {
    return this.arr.push(element);
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
    return this.arr.sort(indices);
  }

  setComparator(compareFunction) {
    return this.arr.sort(compareFunction);
  }
}

module.exports = Sorter;
