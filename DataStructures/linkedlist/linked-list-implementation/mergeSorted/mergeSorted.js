"use strict";

const LinkedList = require("../linkedList");

function mergeSorted(list1, list2) {
  let dummy = { value: 0, next: null };
  let tail = dummy;

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    if (current1.value <= current2.value) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  const mergedList = new LinkedList();
  mergedList.head = dummy.next;

  return mergedList;
}

module.exports = mergeSorted;
