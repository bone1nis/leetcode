/*
67. Add Binary
Solved
Easy
Topics
Companies
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

function addBinary(a: string, b: string): string {
    let res = "";
    let carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        const num1 = parseInt(a[i] ?? "0");
        const num2 = parseInt(b[j] ?? "0");

        const sum = num1 + num2 + carry;

        carry = sum > 1 ? 1 : 0;
        res = (sum % 2 === 1 ? "1" : "0") + res;

        i--;
        j--;
    }

    return carry ? "1" + res : res
}