/*
21. Merge Two Sorted Lists
Attempted
Easy
Topics
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res = new ListNode(0);
    let current = res;

    let sortedArr = [];

    let onePointer = list1;
    let twoPointer = list2;

    while (onePointer || twoPointer) {
        if (onePointer) {
            sortedArr.push(onePointer.val)
        }
        if (twoPointer) {
            sortedArr.push(twoPointer.val)
        }

        if (onePointer) onePointer = onePointer.next;
        if (twoPointer) twoPointer = twoPointer.next;
    }

    sortedArr.sort((a, b) => a - b);

    for (let item of sortedArr) {
        current.next = new ListNode(item);
        current = current.next;
    }

    return res.next;
};

// v2

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res = new ListNode(0);
    let current = res;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 || list2;

    return res.next;
};