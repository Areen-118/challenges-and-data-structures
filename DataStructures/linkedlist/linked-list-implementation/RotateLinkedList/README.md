

# Rotate Linked List

## Problem Domain

Write a function that rotates a linked list by `k` steps.

* If `k > 0`, rotate the list to the **left**.
* If `k < 0`, rotate the list to the **right**.

The new list should maintain the original node order, shifted by `k` positions.

## Inputs and Expected Outputs

* **Input:** \[1 → 2 → 3 → 4 → 5 → 6], `k = 2`

* **Output:** \[3 → 4 → 5 → 6 → 1 → 2]

* **Input:** \[1 → 2 → 3 → 4], `k = -1`

* **Output:** \[4 → 1 → 2 → 3]

* **Input:** \[1 → 2 → 3], `k = 0`

* **Output:** \[1 → 2 → 3]

---

## Edge Cases

* Empty list.
* `k = 0` (list remains unchanged).
* `k` greater than the list length (use `k % length`).
* Negative `k` (rotate right by `|k|` steps).
* Single-node list.


## Visual

![rotateLinkedList-visual](/assets/rotateLinkedList-visual.png)


## Algorithm

1. If the list is empty or `k = 0`, return immediately.
2. Count the length of the list and find the current tail.
3. Connect the tail to the head to make the list circular.
4. Normalize `k`:

   * `k = k % length`
   * If `k < 0`, convert right rotation to equivalent left rotation: `k = length + k`.
5. Find the new tail after `k` steps from the head.
6. Set the new head to `newTail.next`.
7. Break the circular link: `newTail.next = null`.
8. Update the tail reference to the original tail.


## Real Code

![rotateLinkedList-realcode](/assets/rotateLinkedList-realcode.png)



### 🖥️ Console Output
![Rotate Linked List console output ](/assets/consoleoutput-rotate.png)


## Big O

* **Time Complexity:** O(n)

  * Traverse the list once to find the tail and length, then rotate in one pass.

* **Space Complexity:** O(1)

  * No extra data structures are used; the rotation is done in-place.

