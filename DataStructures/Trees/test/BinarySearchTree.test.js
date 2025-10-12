const BinarySearchTree = require("../Treeimplementaion/BinarySearchTree");

describe("BinarySearchTree Operations", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
  });

  test("Add nodes correctly", () => {
    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    bst.inOrder();

    console.log = originalLog;
    expect(result).toEqual([3, 5, 7, 10, 15]);
  });

  test("Contains existing node", () => {
    expect(bst.contains(7)).toBe(true);
  });

  test("Does not contain non-existing node", () => {
    expect(bst.contains(20)).toBe(false);
  });

  test("Remove node and maintain structure", () => {
    bst.remove(5);

    const result = [];
    const originalLog = console.log;
    console.log = (val) => result.push(val);

    bst.inOrder();

    console.log = originalLog;
    expect(result).toEqual([3, 7, 10, 15]);
  });
});
