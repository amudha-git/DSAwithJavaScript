"use strict";

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    var descriptor.enumerable = descriptor.enumerable || false;
    var descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
   if (staticProps) _defineProperties(Constructor, staticProps);
   return Constructor;
 }

var MaxBinaryHeap = /*#__PURE__*/function () {
  function MaxBinaryHeap() {
    this.values = [];
    this.length = 0;
  }

  var _proto = MaxBinaryHeap.prototype;

  _proto.insert = function insert(value) {
    this.values[this.length++] = value;
    console.log(this.length);
    this.bubbleUp();
  };

  _proto.bubbleUp = function bubbleUp() {
    var childIndex = this.length - 1;
    var child = this.values[childIndex];

    while (childIndex > 0) {
      var parentIndex = Math.floor((childIndex - 1) / 2);
      var parent = this.values[parentIndex];
      if (child <= parent) break;
      this.values[childIndex] = parent;
      this.values[parentIndex] = child;
      childIndex = parentIndex;
    }

    return childIndex;
  };

  _createClass(MaxBinaryHeap, [{
    key: "length",
    get: function get() {
      return this._length;
    },
    set: function set(value) {
      this._length = value;
    }
  }]);

  return MaxBinaryHeap;
}();
