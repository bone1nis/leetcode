/*
61. Rotate List
Solved
Medium
Topics
Companies
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let res = new ListNode(0, head);
    let current = res.next;

    let countNode = 0;

    while (current) {
        countNode++;
        current = current.next;
    }

    let countRotation = k % countNode;

    for (let i = 0; i < countRotation; i++) {
        current = res;

        let last;
        let penult;

        while (current) {
            if (!current?.next?.next && !penult) {
                penult = current;
            }
            if (!current?.next) {
                last = current;
            }

            current = current.next;
        }

        penult.next = null;
        last.next = res.next;
        res.next = last;
    }

    return res.next;
};


// v2

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    
    let current = head;
    let length = 1;

    while (current.next) {
        length++;
        current = current.next;
    }

    current.next = head;

    for (let i = 0; i < length - (k % length); i++) {
        current = current.next as ListNode;
    }

    head = current.next;
    current.next = null;

    return head;
};