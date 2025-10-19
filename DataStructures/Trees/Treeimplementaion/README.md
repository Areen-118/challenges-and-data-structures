
# Tree Implementation

## Problem Domain
Implement a Binary Tree and Binary Search Tree with traversal and manipulation methods.

## Inputs and Expected Outputs
- Input: Node values to insert, search, or remove
- Output: Tree structure, traversal sequences, boolean results for search

## Edge Cases
- Inserting duplicate values
- Removing root node
- Searching in an empty tree

## Algorithm
traversal logic:
- PreOrder: Root → Left → Right
- InOrder: Left → Root → Right
- PostOrder: Left → Right → Root

## Real Code
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


## Big O Time/Space Complexity
| Operation     | Time Complexity | Space Complexity |
|---------------|------------------|------------------|
| Insert        | O(log n) avg / O(n) worst | O(1) |
| Search        | O(log n) avg / O(n) worst | O(1) |
| Traversal     | O(n)              | O(n) (due to recursion stack) |
| Remove        | O(log n) avg / O(n) worst | O(1) |





![Trees console output](/assets/con-out-trees.png)
![Trees console output](/assets/con-out-trees1.png)
![Trees console output](/assets/con-out-trees2.png)
![Trees console output](/assets/con-out-trees3.png)
![Trees console output](/assets/con-out-trees4.png)
![Trees console output](/assets/con-out-trees5.png)
