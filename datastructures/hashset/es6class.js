class HashSet {
  constructor() {
    this.set = {};
  }

  add(value) {
    let key = Symbol.for(value);
    this.set[key] = value;
  }

  delete(key) {
    delete this.set[Symbol.for(key)];
  }

  has(key) {
    return this.set[Symbol.for(key)] !== undefined;
  }
}
