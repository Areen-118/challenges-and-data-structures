const StackWithDeleteMiddle = require('../DeleteMiddleElement/DeleteMiddleElement'); // Adjust the path if needed

describe('StackWithDeleteMiddle.deleteMiddle', () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithDeleteMiddle();
  });

  test('deletes the middle element for odd-sized stack', () => {
    // stack top -> bottom: 5, 8, 3, 14, 7  (middle is 3)
    stack.push(7);
    stack.push(14);
    stack.push(3);
    stack.push(8);
    stack.push(5);

    stack.deleteMiddle();

    // expected top -> bottom after deletion: 5, 8, 14, 7
    expect(stack.printStack()).toEqual([5, 8, 14, 7]);
  });

  test('deletes the lower middle element for even-sized stack', () => {
    // stack top -> bottom: 4, 3, 2, 1  (n=4, lower middle index = n/2 - 1 = 1 -> value 3)
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.deleteMiddle();

    // expected top -> bottom after deletion: 4, 2, 1
    expect(stack.printStack()).toEqual([4, 2, 1]);
  });
                            
  test('deleteMiddle on empty stack does nothing (or returns an indicator)', () => {
    
    const result = stack.deleteMiddle();
    expect(result).toBe("stack is empty");
    expect(stack.printStack()).toEqual([]);
  });

  test('deleteMiddle on single-element stack removes that element', () => {
    stack.push(42);
    stack.deleteMiddle();
    expect(stack.printStack()).toEqual([]);
    expect(stack.isEmpty()).toBe(true);
  });
});
