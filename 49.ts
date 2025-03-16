/*
49. Групповые анаграммы
Решено
Середина
Темы
Компании
Дан массив строк strs, сгруппируйте
анаграммы
вместе. Вы можете вернуть ответ в любом порядке .

 

Пример 1:

Ввод: strs = ["eat","tea","tan","ate","nat","bat"]

Вывод: [["bat"],["nat","tan"],["ate","eat","tea"]]

Объяснение:

В strs нет строки, которую можно было бы переставить, чтобы получить "bat".
Строки "nat"и "tan"являются анаграммами, поскольку их можно переставлять, образуя друг друга.
Строки "ate", "eat", и "tea"являются анаграммами, поскольку их можно переставлять, образуя друг друга.
Пример 2:

Ввод: strs = [""]

Выход: [[""]]

Пример 3:

Ввод: strs = ["a"]

Вывод: [["a"]]

 

Ограничения:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i]состоит из строчных английских букв.
*/


function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();
    let res = [];
    for (let i = 0; i < strs.length; i++) {
        let newStr = strs[i];
        newStr = newStr.split("").sort().join("");
        if (map.has(newStr)) {
            map.set(newStr, [...map.get(newStr), strs[i]]);
        } else {
            map.set(newStr, [strs[i]]);
        }
    }

    for (let val of map.values()) {
        res.push(val);
    }

    return res;
};

// v2


function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let newStr = strs[i];
        newStr = newStr.split("").sort().join("");
        if (map.has(newStr)) {
            map.set(newStr, [...map.get(newStr), strs[i]]);
        } else {
            map.set(newStr, [strs[i]]);
        }
    }

    return Array.from(map.values());
};

// v3

function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");
        let group = map.get(sortedStr) || [];
        group.push(str);
        map.set(sortedStr, group);
    }

    return Array.from(map.values());
};

// v4

function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();

    for (let str of strs) {
        let count = Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        let key = count.join("#");

        if(!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};
