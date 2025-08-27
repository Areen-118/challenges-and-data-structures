const LinkedList = require("../linkedList");

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe("LinkedList", () => {
  test("add(): should add nodes to the end of the list", () => {
    list.add(10);
    list.add(20);
    list.add(30);

    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next.value).toBe(30);
    expect(list.head.next.next.next).toBeNull();
  });

  test("remove(): should remove a node by value", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    list.remove(2);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(3);
    expect(list.head.next.next).toBeNull();
  });

  test("remove(): should handle removing from an empty list", () => {
    const consoleSpy = jest.spyOn(console, "log");
    list.remove(5);
    expect(consoleSpy).toHaveBeenCalledWith("List is empty");
    consoleSpy.mockRestore();
  });

  test("includes(): should return true if value is found", () => {
    list.add(100);
    list.add(200);

    expect(list.includes(200)).toBe(true);
  });

  test("includes(): should return false if value is not found", () => {
    list.add(10);
    list.add(20);

    expect(list.includes(99)).toBe(false);
  });

  test("insertAt(): should insert at the correct index", () => {
    list.add(1);
    list.add(3);
    list.insertAt(2, 1); // Insert 2 at index 1

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
  });

  test("insertAt(): should insert at head if index is 0", () => {
    list.add(5);
    list.insertAt(3, 0);

    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(5);
  });

  test("insertAt(): should handle index out of bounds", () => {
    list.add(1);
    const consoleSpy = jest.spyOn(console, "log");

    list.insertAt(5, 5);

    expect(consoleSpy).toHaveBeenCalledWith("Index out of bounds");
    consoleSpy.mockRestore();
  });

  test("display(): should print correct format", () => {
    const consoleSpy = jest.spyOn(console, "log");

    list.add(1);
    list.add(2);
    list.add(3);
    list.display();

    expect(consoleSpy).toHaveBeenCalledWith("Head -->", "1 --> 2 --> 3", "--> Null");
    consoleSpy.mockRestore();
  });

  test("display(): should handle empty list", () => {
    const consoleSpy = jest.spyOn(console, "log");

    list.display();

    expect(consoleSpy).toHaveBeenCalledWith("list is empty");
    consoleSpy.mockRestore();
  });
});
