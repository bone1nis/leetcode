/*
92. Reverse Linked List II
Attempted
Medium
Topics
Companies
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let current = head;
    let prev: ListNode | null = null;

    while (left > 1) {
        prev = current;
        current = current!.next;
        right--;
        left--;
    }

    const tail: ListNode | null = current;
    const sentinel: ListNode | null = prev;

    while (right > 0) {
        const next = current!.next;
        current!.next = prev;
        prev = current;
        current = next;
        right--;
    }

    if (sentinel) {
        sentinel.next = prev;
    } else {
        head = prev;
    }

    tail!.next = current;
    return head;
};