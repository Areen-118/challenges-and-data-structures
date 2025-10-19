
const BinaryTree = require("../Treeimplementaion/BinaryTree");
class SecondMaxValue extends BinaryTree {
  findMax(node = this.root) {
    if (!node) return -Infinity;
    return Math.max(node.value, this.findMax(node.left), this.findMax(node.right));
  }

  findSecondMax(node = this.root, maxValue = this.findMax()) {
    if (!node) return -Infinity;
    let second = -Infinity;
    if (node.value < maxValue) second = node.value;
    const leftSecond = this.findSecondMax(node.left, maxValue);
    const rightSecond = this.findSecondMax(node.right, maxValue);
    return Math.max(second, leftSecond, rightSecond);
  }

  getSecondMax() {
    if (!this.root) throw new Error("Tree is empty");
    const maxValue = this.findMax();
    const secondMax = this.findSecondMax(this.root, maxValue);
    if (secondMax === -Infinity) throw new Error("No second maximum value found");
    return secondMax;
  }
}

module.exports = SecondMaxValue;
