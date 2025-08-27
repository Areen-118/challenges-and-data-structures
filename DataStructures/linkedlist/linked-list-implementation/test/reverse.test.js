const LinkedList = require("../linkedList");

describe("LinkedList reverse()", () => {
  test("reverses a multi-node list", () => {
    const list = new LinkedList();
    [1, 2, 3].forEach(val => list.add(val));
    list.reverse();
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(1);
  });

  test("reverses a single-node list", () => {
    const list = new LinkedList();
    list.add(42);
    list.reverse();
    expect(list.head.value).toBe(42);
    expect(list.head.next).toBe(null);
  });

  test("reverses an empty list", () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.head).toBe(null);
  });

  test("reverses a list with duplicate values", () => {
    const list = new LinkedList();
    [1, 2, 2, 3].forEach(val => list.add(val));
    list.reverse();
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(2);
    expect(list.head.next.next.next.value).toBe(1);
  });
});
