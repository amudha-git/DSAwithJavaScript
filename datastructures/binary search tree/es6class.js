class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
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
  }

  find(value) {
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }
    return found;
  }

  includes(value) {
    const found = this.find(value);
    return;
  }

  breadthFirstTraversal() {
    let result = [];
    let queue = [];
    let node;
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  depthFirstPreOrder() {
    let result = [];
    function traverse(current) {
      result.push(current.value);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }

    traverse(this.root);
    return result;
  }

  depthFirstInOrder() {
    let result = [];
    function traverse(current) {
      if (current.left) traverse(current.left);
      result.push(current.value);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return result;
  }

  depthFirstPostOrder() {
    let result = [];
    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      result.push(current.value);
    }
    traverse(this.root);
    return result;
  }
}
