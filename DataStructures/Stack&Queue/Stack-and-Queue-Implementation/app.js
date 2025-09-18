const Stack = require('./Stack');
const Queue = require('./Queue');
// === Stack Demo ===
console.log('--- Stack Demo (LIFO) ---');
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Popped:', stack.pop());       // 30
console.log('Peek:', stack.peek());        // 20
console.log('Is Empty:', stack.isEmpty()); // false

stack.pop(); // Removes 20
stack.pop(); // Removes 10
console.log('Is Empty after clearing:', stack.isEmpty()); // true

// === Queue Demo ===
console.log('\n--- Queue Demo (FIFO) ---');
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Dequeued:', queue.dequeue()); // 10
console.log('Peek:', queue.peek());        // 20
console.log('Is Empty:', queue.isEmpty()); // false

queue.dequeue(); // Removes 20
queue.dequeue(); // Removes 30
console.log('Is Empty after clearing:', queue.isEmpty()); // true