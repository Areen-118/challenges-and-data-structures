const TNode = require("./Tnode");

class BinaryTree {
  constructor(root) {
    this.root = new TNode(root);
  }

  insert(value) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

 insert2(value) {
    this.insertNodeHelper(this.root, value);
  }

  // create the helper method for recursion

  insertNodeHelper(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TNode(value);
      } else {
        this.insertNodeHelper(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TNode(value);
      } else {
        this.insertNodeHelper(node.right, value);
      }
    }
  }

  // ( Root - Left - Right )
  preOrder(node) {
    if (!node) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  // Print tree structure
  print(node = this.root, space = 0, indent = 4) {
    if (!node) return;
    space += indent;
    this.print(node.right, space);
    console.log(" ".repeat(space - indent) + node.value);
    this.print(node.left, space);
  }
}

module.exports = BinaryTree;
