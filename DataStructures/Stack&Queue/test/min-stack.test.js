const MinStack = require("../minStack/minStack"); // Adjust the path if needed

describe('MinStack', () => {
  let minStack; 
  beforeEach(() => {
    minStack = new MinStack();
  });

  test('pushes elements onto the stack and updates minStack', () => {
    minStack.push(5);
    expect(minStack.getMin()).toBe(5);
    minStack.push(3);
    expect(minStack.getMin()).toBe(3);
    minStack.push(7);
    expect(minStack.getMin()).toBe(3);
    minStack.push(2);
    expect(minStack.getMin()).toBe(2);
  });

  test('pops elements from the stack and updates minStack', () => {
    minStack.push(5);
    minStack.push(3);
    minStack.push(7);
    minStack.push(2);
    expect(minStack.getMin()).toBe(2);
    minStack.pop();
    expect(minStack.getMin()).toBe(3);
    minStack.pop();
    expect(minStack.getMin()).toBe(3);
  });

  test('checks if the stack is empty', () => {
    expect(minStack.isEmpty()).toBe(true);
    minStack.push(5);
    expect(minStack.isEmpty()).toBe(false);
    minStack.pop();
    expect(minStack.isEmpty()).toBe(true);
  });
  test('peeks at the top element of the stack', () => {
    minStack.push(5);
    expect(minStack.peek()).toBe(5);
    minStack.push(3);
    expect(minStack.peek()).toBe(3);
    minStack.pop();
    expect(minStack.peek()).toBe(5);
   

  });
  test('prints the stack correctly', () => {
  minStack.push(10);
  minStack.push(20);
  minStack.push(5);
  expect(minStack.printStack()).toEqual([5, 20, 10]);
});

test('getMin returns undefined on empty stack', () => {
  expect(minStack.getMin()).toBeUndefined();
});
test('pop returns message when stack is empty', () => {
  expect(minStack.pop()).toBe("cannot pop because the stack is empty");
});

test('mixed operations maintain correct min and top', () => {
  minStack.push(8);
  minStack.push(4);
  minStack.push(6);
  expect(minStack.getMin()).toBe(4);
  minStack.pop(); // removes 6
  expect(minStack.peek()).toBe(4);
  expect(minStack.getMin()).toBe(4);
  minStack.pop(); // removes 4
  expect(minStack.getMin()).toBe(8);
});
});