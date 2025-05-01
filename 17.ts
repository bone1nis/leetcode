/*
17. Letter Combinations of a Phone Number
Solved
Medium
Topics
Companies
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/


// v1

const map = new Map<string, string[]>([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
]);

function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const res: string[] = [];

    const oneDigit = digits[0];
    const twoDigit = digits[1];
    const threeDigit = digits[2];
    const fourDigit = digits[3];

    map.get(oneDigit)!.forEach(item => {
        if (twoDigit) {
            map.get(twoDigit)!.forEach(twoItem => {
                if (threeDigit) {
                    map.get(threeDigit)!.forEach(threeItem => {
                        if (fourDigit) {
                            map.get(fourDigit)!.forEach(fourItem => {
                                res.push(item + twoItem + threeItem + fourItem);
                            })
                        } else {
                            res.push(item + twoItem + threeItem);
                        }
                    })
                } else {
                    res.push(item + twoItem);
                }
            })
        } else {
            res.push(item);
        }
    })

    return res;
};

// v2

const phoneMap: Record<string, string> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const res: string[] = [];

    function backTrack(combination: string, letters: string) {
        if (letters.length === 0) {
            res.push(combination);
        } else {
            for (const letter of phoneMap[letters[0]]) {
                backTrack(combination + letter, letters.slice(1));
            }
        }
    }

    backTrack("", digits);
    return res;
};