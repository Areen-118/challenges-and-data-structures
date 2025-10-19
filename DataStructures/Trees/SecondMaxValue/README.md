
# Binary Tree - Second Maximum Value

## 📌 Problem Domain
Using your binary tree implementation, write a method that finds the **second maximum value** in a binary tree.  
The second maximum is defined as the largest value that is **less than** the maximum value in the tree.



##  Inputs and Expected Outputs

###  Example:
```js
const tree = new SecondMaxValue(10);
tree.insert(5);
tree.insert(18);
tree.insert(3);
tree.insert(7);
tree.insert(15);

tree.getSecondMax(); // ➜ 15
```

##  Edge Cases
- Tree is empty
- Tree contains only one node
- Tree contains duplicate values (duplicates are ignored)
- Tree contains negative values



##  Visual Representation

```
       10
      /  \
     5    18
    / \   /
   3   7 15
```

- Maximum value: `18`
- Second maximum value: `15`

---

##  Algorithm

1. Traverse the tree recursively to find the maximum value.
2. Traverse again to find the largest value that is less than the maximum.
3. Use depth-first search (DFS) for traversal.
4. Handle edge cases such as empty trees and trees with only one unique value.

---

## Big O Complexity

| Operation         | Time Complexity | Space Complexity |
|------------------|------------------|------------------|
| `findMax()`      | O(n)             | O(n)             |
| `findSecondMax()`| O(n)             | O(n)             |
| `getSecondMax()` | O(n)             | O(n)             |

> Where `n` is the number of nodes in the tree.



##  Console Output Screenshot

![Console Output ](/assets/Console%20Output%200.png)
![Console Output ](/assets/Console%20Output%201.png)
