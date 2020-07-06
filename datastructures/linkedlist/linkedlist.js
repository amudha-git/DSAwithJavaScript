"use strict";

var Node = function Node(value) {
  this.value = value;
  this.next = null;
};

var Linkedlist = (function () {
  function Linkedlist() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _proto = Linkedlist.prototype;

  _proto.push = function push(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.length;
    return this.length - 1;
  };

  _proto.pop = function pop(value) {
    if (this.length === 0) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    var elementToPop = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return elementToPop;
  };

  _proto.unshift = function unshift(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      var oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    ++this.length;
    return this.head;
  };

  _proto.shift = function shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    --this.length;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  };

  _proto.get = function get(index) {
    if (index >= this.length || index < 0) return undefined;
    var counter = 0;
    var node = this.head;
    while (index !== counter) {
      node = node.next;
      counter++;
    }
    return node;
  };

  _proto.set = function set(index, value) {
    var node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  };

  _proto.insert = function insert(index, value) {
    if (index > this.length || index < 0) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    var previousNode = this.get(index - 1);
    if (previousNode) {
      var nextNode = previousNode.next;
      var newNode = new Node(value);
      previousNode.next = newNode;
      newNode.next = nextNode;
      ++this.length;
      return true;
    }
    return false;
  };

  _proto.remove = function remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    if (previousNode) {
      var removed = previousNode.next;
      var nextNode = removed.next;
      previousNode.next = nextNode;
      removed.next = null;
      --this.length;
      return removed;
    }
  };

  return Linkedlist;
})();

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
