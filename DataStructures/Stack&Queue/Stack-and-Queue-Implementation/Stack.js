const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // step 1: create a new node with the given value
    const newNode = new Node(value);

    // check if the node is exsist

    // step2: point the node to the current top
    newNode.next = this.top;

    //step 3: update the top to be the new node
    this.top = newNode;
  }

  pop() {
    // check if te stack is empty
    if (!this.top) return "cannot pop because the stack is empty";

    // remove the top element ( value )
    const removed = this.top.value;

    // update the rop to be the next node
    this.top = this.top.next;

    // return the nemoved value
    return removed;
  }

  peek() {
    
    if (this.top) {
      return this.top.value;
    } else {
      return "Stack is Empty";
    }
  }

  isEmpty() {
   

    return this.top === null;
  }
}

module.exports = Stack;
