/*
74. Search a 2D Matrix
Solved
Medium
Topics
Companies
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

// v1

function searchMatrix(matrix: number[][], target: number): boolean {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === target) return true;
        }
    }

    return false;
};


// v2

function searchMatrix(matrix: number[][], target: number): boolean {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        const first = matrix[middle][0];
        const last = matrix[middle][matrix[middle].length - 1];

        if (target === first || target === last) return true;
        if (target > first && target < last) return binarySearch(matrix[middle], target);
        if (target < first) right = middle - 1;
        else left = middle + 1;
    }

    return false;
};

function binarySearch(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return true;
        if (nums[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return false;
}