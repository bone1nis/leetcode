/*
22. Generate Parentheses
Solved
Medium
Topics
Companies
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
*/

function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    const backTracking = (path: string, open: number, close: number) => {
        if (path.length === n * 2) {
            res.push(path);
            return;
        }

        if (open < n) {
            backTracking(path + "(", open + 1, close);
        }

        if (open > close) {
            backTracking(path + ")", open, close + 1);
        }
    }

    backTracking("", 0, 0);

    return res;
};