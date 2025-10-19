const BinaryTree = require("./Treeimplementaion/BinaryTree");

const bTree = new BinaryTree(10);

bTree.insert(5);
bTree.insert(18);
bTree.insert(3);
bTree.insert(7);
bTree.insert(15);

console.log("PreOrder ( Root - Left - Right )");
bTree.preOrder(bTree.root);
bTree.print();

console.log("\nInOrder ( Left - Root - Right )");
bTree.inOrder(bTree.root);
bTree.print();
console.log("\nPostOrder ( Left - Right - Root )");
bTree.postOrder(bTree.root);
bTree.print();


const BinarySearchTree = require("./Treeimplementaion/BinarySearchTree");

const bst = new BinarySearchTree(10);

bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(18);

console.log("Tree Structure:");
bst.print();

console.log("\nPreOrder:");
bst.preOrder(bst.root);

console.log("\nInOrder:");
bst.inOrder(bst.root);

console.log("\nPostOrder:");
bst.postOrder(bst.root);

console.log("\nContains 7?", bst.contains(7)); // true
console.log("Contains 20?", bst.contains(20)); // false

console.log("\nRemoving 15...");
bst.remove(15);
bst.print();

const SecondMaxValue = require("./SecondMaxValue/SecondMaxValue");

const tree = new SecondMaxValue(10);
tree.insert(5);
tree.insert(18);
tree.insert(3);
tree.insert(7);
tree.insert(15);

console.log(tree.print());
console.log("Second Max Value:", tree.getSecondMax()); // Output: 15
