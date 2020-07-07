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

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    ++this.length;
    return this.length - 1;
  }; // Remove from beginning of list

  _proto.shift = function shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    --this.length;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead.value;
  };

  return Linkedlist;
})();

var Queue = /*#__PURE__*/ (function () {
  function Queue() {
    this.queue = new Linkedlist();
  }

  var _proto2 = Queue.prototype;

  _proto2.enqueue = function enqueue(val) {
    return this.queue.push(val);
  };

  _proto2.dequeue = function dequeue() {
    return this.queue.shift();
  };

  _proto2.peek = function peek() {
    return this.queue.head ? this.queue.head.value : undefined;
  };

  _proto2.size = function size() {
    return this.queue.length;
  };

  return Queue;
})();
