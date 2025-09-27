const Node = require("../node");
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

 push(value) {
  const newNode = new Node(value);
  newNode.next = this.top;
  this.top = newNode;

  // Update minStack
  if (
    this.minStack.length === 0 ||
    value <= this.getMin()
  ) {
    this.minStack.push(value);
  }
}


pop() {
  if (!this.top) return "cannot pop because the stack is empty";

  const removed = this.top.value;
  this.top = this.top.next;

  if (removed === this.getMin()) {
    this.minStack.pop();
  }

  return removed;
}



peek() {
  return this.top ? this.top.value : "Stack is Empty";
}


  isEmpty() {
  return !this.top;
}


  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

printStack() {
  let current = this.top;
  const result = [];

  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

}

module.exports = MinStack;
