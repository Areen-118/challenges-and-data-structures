# Merge Sorted Linked Lists

## Problem Domain
Write a function that merges two sorted linked lists into one sorted linked list.  
The new list should contain all nodes from both input lists in ascending order.

## Inputs and Expected Outputs
- **Input:** [1 → 3 → 5], [2 → 4 → 6]  
- **Output:** [1 → 2 → 3 → 4 → 5 → 6]

---

## Edge Cases
- One list is empty while the other is not.
- Both lists are empty.
- Lists contain duplicate values.
- Lists of different lengths.


## Visual
![mergeSorted-visual](/assets/mergeSorted-visual.png)


## Algorithm
1. Create a dummy node to simplify pointer handling.
2. Compare the current nodes of both lists.
3. Attach the smaller node to the merged list.
4. Move the pointer forward in the list from which the node was taken.
5. Repeat until one list reaches the end.
6. Append any remaining nodes from the other list.

## Real Code
![mergeSorted-realcode](/assets/mergeSorted-realcode.png)

### 🖥️ Console Output
![mergeSorted consoleoutput](/assets/mergeSorted-console2.png)

![mergeSorted consoleoutput](/assets/mergeSorted-consoleoutput.png)

## Big O
- **Time Complexity:** O(n + m)  
  Where `n` and `m` are the lengths of the two input linked lists.

- **Space Complexity:** O(1)  
  Since we only use a few pointers and reuse the existing nodes without extra data structures.
