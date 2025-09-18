const Stack = require('../Stack'); // Adjust the path if needed

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('pushes a node onto the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('pops a node from the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test('checks if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
