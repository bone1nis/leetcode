/*
82. Remove Duplicates from Sorted List II
Attempted
Medium
Topics
Companies
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/



class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let res = new ListNode(0, head);
    let map = new Map();

    let current = res.next;

    while (current) {
        if (map.has(current.val)) {
            map.set(current.val, map.get(current.val) + 1);
        } else {
            map.set(current.val, 1);
        }

        current = current.next;
    }

    let prev = res;
    current = res.next;

    while (current) {
        if (map.get(current.val) > 1) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return res.next;
};


// v2

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;
    let res = new ListNode(0, head);
    let prev = res;
    let current = res.next;

    while (current) {
        while (current?.next && prev?.next && current.next.val === prev.next.val) {
            current = current.next;
        }

        if (prev.next === current) {
            prev = prev.next;
        } else {
            prev.next = current.next;
        }

        current = current.next;
    }

    return res.next;
};