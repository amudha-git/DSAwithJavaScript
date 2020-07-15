class Stack {
  constructor(capacity = 10) {
    this.stack = [];
    this.capacity = capacity;
    this.top = 0;
  }

  push(val) {
    if (this.top === this.capacity) throw new Error("Stack is full");
    this.stack[this.top] = val;
    return ++this.top;
  }

  pop() {
    if (this.top === 0) throw new Error("Stack is empty");
    this.top--;
    let result = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top);
    return result;
  }

  size() {
    return this.top;
  }

  peek() {
    return this.top === 0 ? new Error("Stack is empty") : this.top;
  }
}
