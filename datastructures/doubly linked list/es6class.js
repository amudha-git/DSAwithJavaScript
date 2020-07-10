class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      newNode.previous = oldTail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    return this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.previous;
      this.tail.next = null;
      oldTail.previous = null;
    }
    this.length--;
    return oldTail;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.length++;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current, counter;

    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (index !== counter) {
        current = current.previous;
        counter--;
      }
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;
    (newNode.previous = previousNode), (previousNode.next = newNode);
    (newNode.next = nextNode), (nextNode.previous = newNode);
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    console.log(removedNode);
    let previousNode = removedNode.previous;
    let nextNode = removedNode.next;

    (previousNode.next = nextNode), (nextNode.previous = previousNode);
    (removedNode.previous = null), (removedNode.next = null);
    this.length--;
    return removedNode;
  }
}

// ====================================
// new DoublyLinkedList
// ====================================

var doublylinkedlist = new DoublyLinkedList();

// ====================================
// push
// ====================================

doublylinkedlist.push(1);
doublylinkedlist.push(2);
doublylinkedlist.push(3);
doublylinkedlist.push(4);

// ====================================
// pop
// ====================================

doublylinkedlist.pop();

// ====================================
// unshift
// ====================================

doublylinkedlist.unshift(0);

// ====================================
// push
// ====================================

doublylinkedlist.shift();

// ====================================
// get
// ====================================

doublylinkedlist.get(2);

// ====================================
// set
// ====================================

doublylinkedlist.set(2, Infinity);

// ====================================
// insert
// ====================================

doublylinkedlist.insert(1, 2);

// ====================================
// remove
// ====================================

doublylinkedlist.remove(3);

// ====================================
// Time Complexity
// ====================================

// push - O(1)
// pop - O(1)
// shift - O(1)
// unshift - O(1)
// get - O(n/2) = O(n)
// set - O(n/2) = O(n)
// insert - O(n/2) = O(n)
// remove - O(n/2) = O(n)
