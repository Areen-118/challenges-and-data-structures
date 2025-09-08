const LinkedList = require("./linkedList");
const mergeSorted = require("./mergeSorted/mergeSorted");
const list = new LinkedList();

console.log("=== Add Elements ===");
list.add(5);
list.add(7);
list.add(12);
list.add(14);
list.display(); // Head --> 5 --> 7 --> 12 --> 14 --> Null

console.log("\n=== Remove 7 ===");
list.remove(7);
list.display(); // Head --> 5 --> 12 --> 14 --> Null

console.log("\n=== Includes 12? ===");
console.log(list.includes(12)); // true

console.log("\n=== Includes 7? ===");
console.log(list.includes(7)); // false

console.log("\n=== Insert 10 at index 2 ===");
list.insertAt(10, 2);
list.display(); // Head --> 5 --> 12 --> 10 --> 14 --> Null

console.log("\n=== Insert at index 0 (prepend 3) ===");
list.insertAt(3, 0);
list.display(); // Head --> 3 --> 5 --> 12 --> 10 --> 14 --> Null

console.log("\n=== Edge Case: Insert at invalid index ===");
list.insertAt(99, 100); // Index out of bounds

console.log("\n=== Edge Case: Remove from empty list ===");
const emptyList = new LinkedList();
emptyList.remove(1); // List is empty

console.log("\n=== Reverse Edge Case: Empty List ===");
const emptyList1 = new LinkedList();
emptyList1.reverse();
emptyList1.display(); // Expected: "list is empty"

console.log("\n=== Reverse Edge Case: Single Node ===");
const singleNodeList = new LinkedList();
singleNodeList.add(42);
singleNodeList.reverse();
singleNodeList.display(); // Expected: Head --> 42 --> Null

console.log("\n=== Reverse Edge Case: List with Duplicates ===");
const duplicateList = new LinkedList();
duplicateList.add(1);
duplicateList.add(2);
duplicateList.add(2);
duplicateList.add(3);
duplicateList.reverse();
duplicateList.display(); // Expected: Head --> 3 --> 2 --> 2 --> 1 --> Null



console.log("\n=== Merge Two Sorted Lists ===");

const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

console.log("List 1:");
list1.display();

console.log("List 2:");
list2.display();

const merged = mergeSorted(list1, list2);

console.log("Merged List:");
merged.display(); 
// Expected: Head --> 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> Null

