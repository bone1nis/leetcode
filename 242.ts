/*
242. Valid Anagram
Solved
Easy
Topics
Companies
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let arr = s.split("");

    for (let letter of t) {
        let letterInArr = arr.indexOf(letter);
        if (letterInArr !== -1) {
            arr.splice(letterInArr, 1);
        } else {
            return false;
        }
    }

    return true;
};

// v2 

function isAnagram(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
};

// v3

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    for (const value of map.values()) {
        if (value !== 0) return false;
    }

    return true;
};