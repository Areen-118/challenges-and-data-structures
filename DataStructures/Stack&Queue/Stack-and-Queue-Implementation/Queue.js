const Node = require("../node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) return "Queue is empty";
    const removed = this.front.value;
    this.front = this.front.next;
    return removed;
  }

  peek() {
    return this.front ? this.front.value : "Queue is empty";
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
