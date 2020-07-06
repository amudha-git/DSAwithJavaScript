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

  // Remove from end of list
  pop(value) {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    let elementToPop = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return elementToPop;
  }

  // Insert into beginning of list
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    ++this.length;
    return this.head;
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
    return oldHead;
  }

  // Get node at particular Index
  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let counter = 0;
    let node = this.head;
    while (index !== counter) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // Update a node at particular index
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  // Insert into a particular Index
  insert(index, value) {
    if (index > this.length || index < 0) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let previousNode = this.get(index - 1);
    if (previousNode) {
      let nextNode = previousNode.next;
      let newNode = new Node(value);
      previousNode.next = newNode;
      newNode.next = nextNode;
      ++this.length;
      return true;
    }
    return false;
  }

  // Remove from a particular Index
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    if (previousNode) {
      let removed = previousNode.next;
      let nextNode = removed.next;
      previousNode.next = nextNode;
      removed.next = null;
      --this.length;
      return removed;
    }
  }
}

// ====================================
// new LinkedList
// ====================================

var linkedlist = new Linkedlist();

// ====================================
// push
// ====================================

linkedlist.push(1);
linkedlist.push(2);
linkedlist.push(3);
linkedlist.push(4);

// ====================================
// pop
// ====================================

linkedlist.pop();

// ====================================
// unshift
// ====================================

linkedlist.unshift(0);

// ====================================
// push
// ====================================

linkedlist.shift();

// ====================================
// get
// ====================================

linkedlist.get(2);

// ====================================
// set
// ====================================

linkedlist.set(2, Infinity);

// ====================================
// insert
// ====================================

linkedlist.insert(1, 2);

// ====================================
// remove
// ====================================

linkedlist.remove(3);

// ====================================
// Time Complexity
// ====================================

// push - O(n)
// pop - O(n)
// shift - O(1)
// unshift - O(1)
// get - O(n)
// set - O(n)
// insert - O(n)
// remove - O(n)
