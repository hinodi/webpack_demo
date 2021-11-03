class Counter {
  constructor(counter = 0) {
    this.counter = counter;
  }

  increase() {
    return this.counter++;
  }
}

export default Counter;
