
const RotateLinkedList = require("../RotateLinkedList/rotate");
function listToArray(list) {
  return list.toArray();
}

test("k = 2 rotates left correctly", () => {
  const list = new RotateLinkedList();
  [1,2,3,4,5,6].forEach(n => list.add(n));
  list.rotate(2);
  expect(listToArray(list)).toEqual([3,4,5,6,1,2]);
});

test("k = 0 keeps list unchanged", () => {
  const list = new RotateLinkedList();
  [1,2,3].forEach(n => list.add(n));
  list.rotate(0);
  expect(listToArray(list)).toEqual([1,2,3]);
});

test("k greater than length uses k % length", () => {
  const list = new RotateLinkedList();
  [1,2,3,4,5,6].forEach(n => list.add(n));
  list.rotate(7); // 7 % 6 = 1
  expect(listToArray(list)).toEqual([2,3,4,5,6,1]);
});

test("negative k rotates right by |k|", () => {
  const list = new RotateLinkedList();
  [1,2,3,4].forEach(n => list.add(n));
  list.rotate(-1); // right 1 == left 3
  expect(listToArray(list)).toEqual([4,1,2,3]);
});
