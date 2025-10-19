const SecondMaxValue = require("../SecondMaxValue/SecondMaxValue");

describe("SecondMaxValue BinaryTree", () => {
  test("should return second max value from full tree", () => {
    const tree = new SecondMaxValue(10);
    tree.insert(5);
    tree.insert(18);
    tree.insert(3);
    tree.insert(7);
    tree.insert(15);

    expect(tree.getSecondMax()).toBe(15);
  });

  test("should throw error for empty tree", () => {
    const tree = new SecondMaxValue();
    tree.root = null;

    expect(() => tree.getSecondMax()).toThrow("Tree is empty");
  });

  test("should throw error for single node tree", () => {
    const tree = new SecondMaxValue(42);

    expect(() => tree.getSecondMax()).toThrow("No second maximum value found");
  });

  test("should handle negative values", () => {
    const tree = new SecondMaxValue(-10);
    tree.insert(-20);
    tree.insert(-5);

    expect(tree.getSecondMax()).toBe(-10);
  });

  test("should ignore duplicate max values", () => {
    const tree = new SecondMaxValue(25);
    tree.insert(25);
    tree.insert(20);
    tree.insert(15);

    expect(tree.getSecondMax()).toBe(20);
  });
});
