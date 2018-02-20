class Sorter {
  constructor() {
    this.arr=[];
    this.compare;
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
    var arr1=[];
    var compareFunction='';
    if (this.compare) {compareFunction = this.compare;
    } else {compareFunction = function(a,b) {return a-b};}

    for (let i=0; i<indices.length; i++) {
      arr1.push(this.arr[indices[i]]);
    }

    indices.sort(function(a,b) {return a-b});
    arr1.sort(compareFunction);

    for (let i=0; i<indices.length; i++) {
      this.arr[indices[i]] = arr1[i];
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;
