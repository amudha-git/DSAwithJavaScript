function insert(index, value) {
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
}

function remove(index) {
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
}
