/*
106. Construct Binary Tree from Inorder and Postorder Traversal
Solved
Medium
Topics
Companies
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

Example 1:


Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: inorder = [-1], postorder = [-1]
Output: [-1]
 

Constraints:

1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree.
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!postorder.length) return null;

    const root = postorder.pop();
    const rootIndex = inorder.findIndex(item => item === root);

    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);

    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length);

    const tree = new TreeNode(root);
    tree.left = buildTree(leftInorder, leftPostorder);
    tree.right = buildTree(rightInorder, rightPostorder);

    return tree;
};

// v2


function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const inorderMap: Map<number, number> = new Map();
    inorder.forEach((item, i) => inorderMap.set(item, i));

    let postorderIndex = postorder.length - 1;

    function build(start: number, end: number) {
        if (start > end) return null;

        const val = postorder[postorderIndex--];
        const inorderIndex = inorderMap.get(val);

        const tree = new TreeNode(val);
        tree.right = build(inorderIndex + 1, end);
        tree.left = build(start, inorderIndex - 1);
        return tree;
    }

    return build(0, postorderIndex);
}