const Queue = require('../Stack-and-Queue-Implementation/Queue'); // Adjust the path if needed

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueues a node into the queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  test('dequeues a node from the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  test('checks if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
