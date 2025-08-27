const LinkedList = require("../linkedList");

LinkedList.prototype.reverse = function () {
  let prev = null;
  let current = this.head;

  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  this.head = prev;
};

module.exports = LinkedList;
