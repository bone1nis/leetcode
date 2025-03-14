/*
86. Partition List
Attempted
Medium
Topics
Companies
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
 

Constraints:

The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    let smallHead = new ListNode(0);
    let bigHead = new ListNode(0);

    let currentSmallHead = smallHead;
    let currentBigHead = bigHead;

    while (head) {
        if (head.val >= x) {
            currentBigHead.next = head;
            currentBigHead = currentBigHead.next;
        } else {
            currentSmallHead.next = head;
            currentSmallHead = currentSmallHead.next;
        }

        head = head.next;
    }

    currentBigHead.next = null;
    currentSmallHead.next = bigHead.next;

    return smallHead.next;
};