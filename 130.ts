/*
130. Surrounded Regions
Attempted
Medium
Topics
Companies
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]

 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/

// function solve(board: string[][]): void {
//     for (let y = 0; y < board.length; y++) {
//         for (let x = 0; x < board[y].length; x++) {
//             if (board[y][x] === "O") {
//                 explore(board, y, x);
//             }
//         }
//     }
// };

// function explore(board: string[][], y, x): void {
//      if (board[y]?.[x] !== "O") return;

//      if (y !== board.length - 1 && y !== 0 && x !== 0 && x !== board[0].length - 1) {
//         board[y][x] = "X";
//      }

//      explore(board, y, x + 1);
//      explore(board, y, x - 1);
//      explore(board, y + 1, x);
//      explore(board, y - 1, x);
// }
// не прошло по времени, само решение верное

function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (x: number, y: number): void => {
        if (y < 0 || y >= rows || x < 0 || x >= cols || board[y][x] !== "O") return;
        board[y][x] = "#";

        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }

    for (let y = 0; y < rows; y++) {
        dfs(0, y);
        dfs(cols - 1, y);
    }

    for (let x = 0; x < cols; x++) {
        dfs(x, 0);
        dfs(x, rows - 1);
    }

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (board[y][x] === "O") board[y][x] = "X";
            else if (board[y][x] === "#") board[y][x] = "O";
        }
    }
}