const   Stack = require('../Stack-and-Queue-Implementation/Stack'); // adjust path as needed

class StackWithDeleteMiddle extends Stack {
  constructor() {
    super();
  }
deleteMiddle() {
    
  if (this.isEmpty()) return "stack is empty";
  if (this.size === 1) {
    this.pop();
    return;
  }
  let n = typeof this.size === 'number' ? this.size : 0;
  if (n === 0) {
    let cur = this.top;
    while (cur) { n++; cur = cur.next; }
  }

  const middleIndex = (n % 2 === 0) ? (n / 2 - 1) : Math.floor(n / 2);


  const aux = [];
  for (let i = 0; i < middleIndex; i++) {
    aux.push(this.pop());
  }

  const removed = this.pop();

  while (aux.length) {
    this.push(aux.pop());
  }

  return removed; 
}


}

module.exports = StackWithDeleteMiddle;
