import 'babel-polyfill'; // eslint-disable-line

// BEGIN (write your solution here)
const gen = function* () {
  yield 1;
  yield 2;
  yield 3;
};

export default class Seq {
  constructor(startValue, fn) {
    this.value = startValue;
    this.fn = fn;
    // this.index = 0;
    // this.data = startValue;
  }

  // [Symbol.iterator]() {
  //   return {
  //     next: () => {
  //       if (this.index < this.data.length) {
  //         return {value: this.data[this.index++], done: false};
  //       } else {
  //         this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
  //         return {done: true};
  //       }
  //     }
  //   }
  // };

  [Symbol.iterator]() {

    value = this.value;
    fn = this.fn;
    return function* () {

    }();
  }
  
  take(item) {
    return this;
  }
}


// END
