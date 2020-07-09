"use strict";

var Node = function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

var DoublyLinkedList = /*#__PURE__*/ (function () {
  function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  var _proto = DoublyLinkedList.prototype;

  _proto.push = function push(value) {
    var newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var oldTail = this.tail;
      newNode.previous = oldTail;
      oldTail.next = newNode;
      this.tail = newNode;
    }

    return this.length++;
  };

  _proto.pop = function pop() {
    if (this.length === 0) {
      return undefined;
    }

    var oldTail = this.tail;

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
  };

  _proto.unshift = function unshift(value) {
    var newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    return this.length++;
  };

  _proto.shift = function shift() {
    if (this.length === 0) {
      return undefined;
    }

    var oldHead = this.head;

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
  };

  _proto.get = function get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var current, counter;

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
  };

  _proto.set = function set(index, value) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  };

  _proto.insert = function insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    var newNode = new Node(value);
    var previousNode = this.get(index - 1);
    nextNode = previousNode.next;
    (newNode.previous = previousNode), (previousNode.next = newNode);
    (newNode.next = nextNode), (nextNode.previous = newNode);
    this.length++;
    return newNode;
  };

  _proto.remove = function remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    console.log(removedNode);
    var previousNode = removedNode.previous;
    var nextNode = removedNode.next;
    (previousNode.next = nextNode), (nextNode.previous = previousNode);
    (removedNode.previous = null), (removedNode.next = null);
    this.length--;
    return removedNode;
  };

  return DoublyLinkedList;
})();
