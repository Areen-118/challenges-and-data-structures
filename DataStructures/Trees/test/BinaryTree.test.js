const BinaryTree = require("../Treeimplementaion/BinaryTree");

describe("BinaryTree Traversals", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
  });

  test("Pre-order traversal", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.preOrder(tree.root);

    console.log = originalLog;
    expect(result).toEqual([10, 5, 3, 7, 15]);
  });

  test("In-order traversal", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.inOrder(tree.root);

    console.log = originalLog;
    expect(result).toEqual([3, 5, 7, 10, 15]);
  });

  test("Post-order traversal", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    tree.postOrder(tree.root);

    console.log = originalLog;
    expect(result).toEqual([3, 7, 5, 15, 10]);
  });
});
