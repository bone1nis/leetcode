/*
211. Design Add and Search Words Data Structure
Solved
Medium
Topics
Companies
Hint
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 104 calls will be made to addWord and search.
*/


class TrieNode {
    public children: { [key: string]: TrieNode };
    public isTermination: boolean;

    constructor() {
        this.children = {};
        this.isTermination = false;
    }
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let current = this.root;

        for (const k of word) {
            if (!current.children[k]) current.children[k] = new TrieNode();
            current = current.children[k];
        }

        current.isTermination = true;
    }

    search(word: string): boolean {
        return this.searchHelper(word, 0, this.root);
    }

    private searchHelper(word: string, index: number, node: TrieNode) {
        if (word.length === index) {
            return node.isTermination;
        }

        const char = word[index];

        if (char === ".") {
            for (const k in node.children) {
                if (this.searchHelper(word, index + 1, node.children[k])) return true;
            }
            return false;
        } else {
            const children = node.children[char];
            if (!children) return false;
            return this.searchHelper(word, index + 1, children);
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */