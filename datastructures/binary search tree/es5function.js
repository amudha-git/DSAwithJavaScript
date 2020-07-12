"use strict";

var Node = function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var BST = /*#__PURE__*/ (function () {
  function BST() {
    this.root = null;
  }

  var _proto = BST.prototype;

  _proto.insert = function insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (true) {
      if (current.value === value) return undefined;

      if (value < current.value) {
        if (current.left === null) current.left = newNode;
        current = current.left;
      } else {
        if (current.right === null) current.right = newNode;
        current = current.right;
      }

      return current;
    }
  };

  _proto.find = function find(value) {
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    return found;
  };

  _proto.includes = function includes(value) {
    var found = this.find(value);
    return;
  };

  _proto.breadthFirstTraversal = function breadthFirstTraversal() {
    var result = [];
    var queue = [];
    var node;
    var current = this.root;
    queue.push(current);

    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  };

  _proto.depthFirstPreOrder = function depthFirstPreOrder() {
    var result = [];

    function traverse(current) {
      result.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);
    return result;
  };

  _proto.depthFirstInOrder = function depthFirstInOrder() {
    var result = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      result.push(current.value);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);
    return result;
  };

  _proto.depthFirstPostOrder = function depthFirstPostOrder() {
    var result = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      result.push(current.value);
    }

    traverse(this.root);
    return result;
  };

  return BST;
})();
