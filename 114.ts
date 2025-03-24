/*
114. Flatten Binary Tree to Linked List
Solved
Medium
Topics
Companies
Hint
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
*/


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function flatten(root: TreeNode | null): void {
    if (!root) return;

    if (root.right) {
        flatten(root.right);
    }

    if (root.left) {
        flatten(root.left);

        const tempRight = root.right;
        root.right = root.left;
        root.left = null;

        let lastRight = root;
        while (lastRight?.right) {
            lastRight = lastRight.right;
        }
        lastRight.right = tempRight;
    }
};