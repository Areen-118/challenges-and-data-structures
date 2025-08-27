const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  display() {
    let current = this.head;
    if (!current) {
      console.log("list is empty");
      return;
    }

    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Head -->", values.join(" --> "), "--> Null");
  }

  remove(value) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    } else {
      console.log("Value not found in the list");
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (i !== index) {
      console.log("Index out of bounds");
      return;
    }

    prev.next = newNode;
    newNode.next = current;
  }
  reverse() {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current) {
    next = current.next;     // Save next node
    current.next = prev;     // Reverse pointer
    prev = current;          // Move prev forward
    current = next;          // Move current forward
  }

  this.head = prev;          // Update head to new front
}

}

module.exports = LinkedList;
