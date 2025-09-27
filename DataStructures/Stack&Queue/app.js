const Stack = require('./Stack-and-Queue-Implementation/Stack');
const Queue = require('./Stack-and-Queue-Implementation/Queue');
const MinStack = require('./minStack/minStack');
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
// === MinStack Demo ===
console.log('\n--- MinStack Demo (LIFO) ---');
const minStack = new MinStack();

minStack.push(15);
minStack.push(7);
minStack.push(12);
minStack.push(3);
//print the stack
console.log(minStack.printStack()); // [3, 12, 7, 15]
//the min value
console.log('Min:', minStack.getMin()); // 3
//pop the top value
console.log('Popped:', minStack.pop());   // 3
console.log(minStack.printStack()); // [12, 7, 15]
//the new min value
console.log('Min after pop:', minStack.getMin()); // 7

console.log('Peek:', minStack.peek());        // 12
minStack.push(2);
console.log(minStack.printStack()); // [2, 12, 7, 15]
//the new min value
console.log('Min after pushing 2:', minStack.getMin()); // 2
//check if the stack is empty
console.log('Is Empty:', minStack.isEmpty());