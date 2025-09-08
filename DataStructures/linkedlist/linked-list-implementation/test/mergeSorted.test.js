"use strict";

const LinkedList = require("../linkedList");
const mergeSorted = require("../mergeSorted/mergeSorted");

describe("Merge Sorted Linked Lists", () => {
  it("should merge two sorted linked lists", () => {
    let list1 = new LinkedList();
    list1.add(1);
    list1.add(3);
    list1.add(5);

    let list2 = new LinkedList();
    list2.add(2);
    list2.add(4);
    list2.add(6);

    let merged = mergeSorted(list1, list2);

    expect(merged.toString()).toBe("{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL");
  });

  it("should handle one empty list", () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list2.add(1);
    list2.add(2);

    let merged = mergeSorted(list1, list2);

    expect(merged.toString()).toBe("{1} -> {2} -> NULL");
  });

  it("should handle two empty lists", () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    let merged = mergeSorted(list1, list2);

    expect(merged.toString()).toBe("NULL");
  });
  it("should merge lists with duplicate values", () => {
  let list1 = new LinkedList();
  list1.add(2);
  list1.add(3);
  list1.add(20);

  let list2 = new LinkedList();
  list2.add(5);
  list2.add(10);
  list2.add(15);

  let merged = mergeSorted(list2, list1);
  expect(merged.toString()).toBe("{2} -> {3} -> {5} -> {10} -> {15} -> {20} -> NULL");
});

});
