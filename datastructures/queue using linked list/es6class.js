class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert into end of list
  push(value) {
    let node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.length;
    return this.length - 1;
  }

  // Remove from beginning of list
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    --this.length;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead.value;
  }
}

class Queue {
  constructor() {
    this.queue = new Linkedlist();
  }

  enqueue(val) {
    return this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue.head ? this.queue.head.value : undefined;
  }

  size() {
    return this.queue.length;
  }
}
