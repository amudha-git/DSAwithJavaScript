// ====================================
// ES6 Class Way
// ====================================

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
    if (this.top === 0) return undefined;
    this.top--;
    let result = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top);
    return result;
  }

  size() {
    return this.top;
  }

  peek() {
    return this.top === 0 ? undefined : this.top;
  }
}

// ====================================
// Example using stack
// ====================================

function reverseAString(string) {
  let stack = new Stack();
  let reversedString = "";

  for (let char of string) {
    stack.push(char);
  }

  let size = stack.size();
  for (let i = 0; i < size; i++) {
    reversedString += stack.pop();
  }
  return reversedString;
}

// ====================================
// Time Complexity

// Push/Insertion - O(1)
// Pop/Deletion - O(1)
// Accessing/Search - O(n)

// Space Complexity - O(n)
// ====================================
