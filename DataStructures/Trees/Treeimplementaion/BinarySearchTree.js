const BinaryTree = require("./BinaryTree");
const TNode = require("./Tnode");

class BinarySearchTree extends BinaryTree {
  constructor(rootValue) {
    super(rootValue);
  }

  add(value) {
    try {
      this.root = this._addRecursive(this.root, value);
    } catch (err) {
      console.error("Add Error:", err.message);
    }
  }

  _addRecursive(node, value) {
    if (!node) return new TNode(value);
    if (value < node.value) {
      node.left = this._addRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._addRecursive(node.right, value);
    }
    return node;
  }

  contains(value) {
    try {
      return this._containsRecursive(this.root, value);
    } catch (err) {
      console.error("Contains Error:", err.message);
      return false;
    }
  }

  _containsRecursive(node, value) {
    if (!node) return false;
    if (value === node.value) return true;
    return value < node.value
      ? this._containsRecursive(node.left, value)
      : this._containsRecursive(node.right, value);
  }

  remove(value) {
    try {
      this.root = this._removeRecursive(this.root, value);
    } catch (err) {
      console.error("Remove Error:", err.message);
    }
  }

  _removeRecursive(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeRecursive(node.right, value);
    } else {
      // Node found
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Two children: find in-order successor
      let successor = this._minValueNode(node.right);
      node.value = successor.value;
      node.right = this._removeRecursive(node.right, successor.value);
    }

    return node;
  }

  _minValueNode(node) {
    while (node.left) node = node.left;
    return node;
  }
}

module.exports = BinarySearchTree;
