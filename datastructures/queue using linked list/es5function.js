"use strict";

var Node = function Node(value) {
  this.value = value;
  this.next = null;
};

var Linkedlist = /*#__PURE__*/ (function () {
  function Linkedlist() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } // Insert into end of list

  var _proto = Linkedlist.prototype;

  _proto.push = function push(value) {
    var node = new Node(value);
    var head = this.head;
    var tail = this.tail;
    var length = this.length;

    if (head === null && tail === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    return length++;
  }; // Remove from beginning of list

  _proto.shift = function shift() {
    if (this.length === 0) return undefined;
    var head = this.head;
    var length = this.length;
    var tail = this.tail;
    var oldHead = head;
    head = oldHead.next;
    --this.length;

    if (length === 0) {
      tail = null;
    }

    return oldHead.value;
  };

  return Linkedlist;
})();

var Queue = /*#__PURE__*/ (function () {
  function Queue() {
    this.linkedlist = new Linkedlist();
  }

  var _proto2 = Queue.prototype;

  _proto2.enqueue = function enqueue(val) {
    var queue = this.linkedlist;
    return queue.push(val);
  };

  _proto2.dequeue = function dequeue() {
    var queue = this.linkedlist;
    return queue.shift();
  };

  _proto2.peek = function peek() {
    var head = this.linkedlist.head;
    return head ? head.value : undefined;
  };

  _proto2.size = function size() {
    var length = this.linkedlist.length;
    return length;
  };

  return Queue;
})();

// ====================================
// Time Complexity
// ====================================
// enqueue - O(1)
// dequeue - O(1)
