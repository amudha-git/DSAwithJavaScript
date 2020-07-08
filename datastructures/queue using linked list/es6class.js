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
    let head = this.head;
    let tail = this.tail;
    let length = this.length;
    if (head === null && tail === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
    return length++;
  }

  // Remove from beginning of list
  shift() {
    if (this.length === 0) return undefined;
    let head = this.head;
    let length = this.length;
    let tail = this.tail;

    let oldHead = head;
    head = oldHead.next;
    --this.length;
    if (length === 0) {
      tail = null;
    }
    return oldHead.value;
  }
}

class Queue {
  constructor() {
    this.linkedlist = new Linkedlist();
  }

  enqueue(val) {
    const queue = this.linkedlist;
    return queue.push(val);
  }

  dequeue() {
    const queue = this.linkedlist;
    return queue.shift();
  }

  peek() {
    let head = this.linkedlist.head;
    return head ? head.value : undefined;
  }

  size() {
    let length = this.linkedlist.length;
    return length;
  }
}

// ====================================
// Time Complexity
// ====================================

// enqueue - O(1)
// dequeue - O(1)
