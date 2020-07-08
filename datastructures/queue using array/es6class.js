class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  enqueue(value) {
    this.queue[this.length] = value;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let element = this.queue[0];
    this.length--;
    this.queue = this.queue.splice(1, this.length);
    return element;
  }

  size() {
    return this.length;
  }

  peek() {
    if (this.length === 0) return undefined;
    return this.queue[0];
  }
}

// ====================================
// Time Complexity
// ====================================

// enqueue - O(1)
// dequeue - O(~1) but array needs to be reindexed since removing from front.
