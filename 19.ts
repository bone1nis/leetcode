/*
19. Remove Nth Node From End of List
Attempted
Medium
Topics
Companies
Hint
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let res = new ListNode(0, head);
    let slow: ListNode | null = res;
    let fast: ListNode | null = res;

    for (let i = 0; i <= n; i++) {
        fast = fast?.next ?? null;
    }

    while (fast) {
        slow = slow!.next;
        fast = fast.next;
    }

    slow!.next = slow!.next!.next;
    return res.next;
};