import 'babel-polyfill'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Seq {
  constructor(startValue, fn, numberOfItems = 20) {
    this.current = startValue;
    this.numberOfItems = numberOfItems;
    this.fn = fn;
  }

  * [Symbol.iterator]() {
    let i = this.current;
    const end = this.current + this.numberOfItems;
    for (i; i < end; i += 1) {
      yield i;
      this.fn(i);
    }
  }

  take(item) {
    this.numberOfItems = item;
    return this;
  }
}
// END
