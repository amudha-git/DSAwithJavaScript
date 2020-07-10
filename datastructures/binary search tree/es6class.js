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
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (true) {
      if (current.value === value) return current;
      if (value < current.value) {
        if (current.left === null) return undefined;
        current = current.left;
      } else {
        if (current.right === null) return undefined;
        current = current.right;
      }
    }
  }

  includes(value) {
    let found = this.find(value);
    if (found === undefined) return false;
    return false;
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(3);
bst.insert(16);
bst.insert(9);
