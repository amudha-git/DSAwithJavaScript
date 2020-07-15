class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(val) {
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

// ====================================
// Time Complexity

// Push/Insertion - O(1)
// Pop/Deletion - O(1)
// Accessing/Search - O(n)

// Space Complexity - O(n)
// ====================================
