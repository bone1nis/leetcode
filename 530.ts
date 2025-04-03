/*
530. Minimum Absolute Difference in BST
Solved
Easy
Topics
Companies
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
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
function getMinimumDifference(root: TreeNode | null): number {
    let res: number = Infinity;
    let prev: number | null = null;

    const dfs = (node: TreeNode | null) => {
        if (!node) return;

        dfs(node.left);
        if (prev !== null) {
            res = Math.min(res, node.val - prev);
        }
        prev = node.val;
        dfs(node.right);
    }
    dfs(root);
    return res;
}