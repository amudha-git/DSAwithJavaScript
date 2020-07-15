"use strict";

var Stack = (function () {
  function Stack() {
    this.stack = [];
    this.top = 0;
  }

  var _proto = Stack.prototype;
  _proto.push = function push(val) {
    this.stack[this.top] = val;
    return ++this.top;
  };

  _proto.pop = function pop() {
    if (this.top === 0) throw new Error("Stack is empty");
    this.top--;
    let result = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top);
    return result;
  };

  _proto.size = function size() {
    return this.top;
  };

  _proto.peek = function peek() {
    if (this.top === 0) throw new Error("Stack is empty");
    return this.stack[this.top];
  };

  return Stack;
})();

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
