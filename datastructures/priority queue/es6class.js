class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.queue.push(node);
    return this.bubbleUp();
  }

  bubbleUp() {
    let childIndex = this.queue.length - 1;
    let parentIndex, parent, child;
    while (childIndex > 0) {
      parentIndex = Math.floor((childIndex - 1) / 2);
      child = this.queue[childIndex];
      parent = this.queue[parentIndex];
      if (child.priority <= parent.priority) break;
      this.queue[parentIndex] = child;
      this.queue[childIndex] = parent;
      childIndex = parentIndex;
    }
    return childIndex;
  }

  dequeue() {
    let firstNode = this.queue[0];
    let lastNode = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = lastNode;
      this.sinkDown();
    }
    return firstNode;
  }

  sinkDown() {
    let parentIndex = 0;
    let rightChildIndex,
      leftChildIndex,
      swapIndex,
      parent,
      rightChild,
      leftChild,
      queueLength;

    while (true) {
      swapIndex = null;

      leftChildIndex = 2 * parentIndex + 1;
      rightChildIndex = 2 * parentIndex + 2;
      queueLength = this.queue.length;
      // nodes
      parent = this.queue[parentIndex];

      if (leftChildIndex < queueLength) {
        leftChild = this.queue[leftChildIndex];
        if (leftChild.priority > parent.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < queueLength) {
        rightChild = this.queue[rightChildIndex];
        if (
          (swapIndex === null && rightChild.priority > parent.priority) ||
          (swapIndex !== null && rightChild.priority > leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.queue[parentIndex] = this.queue[swapIndex];
      this.queue[swapIndex] = parent;
      parentIndex = swapIndex;
    }
  }
}
