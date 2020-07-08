"use strict";

var Queue = /*#__PURE__*/ (function () {
  function Queue() {
    this.queue = [];
    this.length = 0;
  }

  var _proto = Queue.prototype;

  _proto.enqueue = function enqueue(value) {
    this.queue[this.length] = value;
    this.length++;
  };

  _proto.dequeue = function dequeue() {
    if (this.length === 0) return undefined;
    var element = this.queue[0];
    this.length--;
    this.queue = this.queue.splice(1, this.length);
    return element;
  };

  _proto.size = function size() {
    return this.length;
  };

  _proto.peek = function peek() {
    if (this.length === 0) return undefined;
    return this.queue[0];
  };

  return Queue;
})();

// ====================================
// Time Complexity
// ====================================

// enqueue - O(1)
// dequeue - O(~1) but array needs to be reindexed since removing from front.
