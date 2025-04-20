/*
79. Word Search
Solved
Medium
Topics
Companies
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/


function exist(board: string[][], word: string): boolean {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (findLetter(board, r, c, word, 0)) return true;
        }
    }

    return false;
};

function findLetter(board: string[][], r: number, c: number, word: string, index: number): boolean {
    if (r < 0 || c < 0 || r > board.length - 1 || c > board[0].length - 1 || board[r][c] !== word[index]) return false;

    if (word.length - 1 === index) return true;

    let temp = board[r][c];
    board[r][c] = "#";

    const res = findLetter(board, r + 1, c, word, index + 1) ||
        findLetter(board, r - 1, c, word, index + 1) ||
        findLetter(board, r, c + 1, word, index + 1) ||
        findLetter(board, r, c - 1, word, index + 1);

    board[r][c] = temp;

    return res;
}