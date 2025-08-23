const LinkedList = require("./linkedList");

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
