const memory = require("./memory");

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.memory = new memory();
    this.ptr = this.memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    this.memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = this.memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    this.memory.copy(this.ptr, oldPtr, this.length);
    this.memory.free(oldPtr);
    this._capacity = size;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;
