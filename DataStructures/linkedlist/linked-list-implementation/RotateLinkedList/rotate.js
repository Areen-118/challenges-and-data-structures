const LinkedList = require("../linkedList");

class RotateLinkedList extends LinkedList {
  rotate(k) {
    if (!this.head || k === 0) return;

    
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }

    tail.next = this.head;

    k = k % length;
    if (k < 0) k = length + k; 

    if (k === 0) {
      tail.next = null; 
      return;
    }

    let newTail = this.head;
    for (let i = 0; i < k - 1; i++) {
      newTail = newTail.next;
    }

    this.head = newTail.next;
    newTail.next = null;

    this.tail = tail;
  }
}
module.exports = RotateLinkedList;
