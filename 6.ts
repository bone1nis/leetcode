/*
6. Zigzag Conversion
Solved
Medium
Topics
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

function convert(s: string, numRows: number): string {
  const arr = [];
  let currentRow = 0;
  let zig = false;

  if (numRows === 1) return s;

  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  for (let i = 0; i < s.length; i++) {
    if (zig) {
      arr[currentRow].push(s[i]);
      currentRow -= 1;
      if (currentRow === -1) {
        zig = false;
        currentRow += 2;
      }
    } else {
      arr[currentRow].push(s[i]);
      currentRow += 1;
      if (currentRow === numRows) {
        zig = true;
        currentRow -= 2;
      }
    }
  }

  return arr.reduce(
    (res, item) => (res += item.reduce((res, item) => (res += item), "")),
    ""
  );
}

// v2

function convert(s: string, numRows: number): string {
  const arr = [];
  let currentRow = 0;
  let zig = false;

  if (numRows === 1) return s;

  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  for (let i = 0; i < s.length; i++) {
    arr[currentRow].push(s[i]);

    if (zig) {
      currentRow -= 1;
      if (currentRow === -1) {
        zig = false;
        currentRow += 2;
      }
    } else {
      currentRow += 1;
      if (currentRow === numRows) {
        zig = true;
        currentRow -= 2;
      }
    }
  }

  return arr.map((row) => row.join("")).join("");
}

// v3

function convert(s, numRows) {
  if (numRows === 1) return s;

  const arr = new Array(numRows).fill("");

  let currentRow = -1;
  let down = true;

  for (let i = 0; i < s.length; i++) {
    currentRow += down ? 1 : -1;
    arr[currentRow] += s[i];

    if (currentRow === 0) {
      down = true;
    } else if (currentRow === numRows - 1) {
      down = false;
    }
  }

  return arr.join("");
}