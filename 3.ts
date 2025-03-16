/*
3. Самая длинная подстрока без повторяющихся символов
Середина
Темы
Компании
Намекать
Дана строка s, найдите длину самой длинной из них. 
подстрока
без повторения символов.

 

Пример 1:

Ввод: s = "abcabcbb"
 Вывод: 3
 Пояснение: Ответ: "abc", длина которого равна 3.
Пример 2:

Ввод: s = "bbbbb"
 Вывод: 1
 Пояснение: Ответ: "b", длина которого равна 1.
Пример 3:

Ввод: s = "pwwkew"
 Вывод: 3
 Пояснение: Ответ: "wke" длиной 3. 
Обратите внимание, что ответ должен быть подстрокой, "pwke" — это подпоследовательность, а не подстрока.
 

Ограничения:

0 <= s.length <= 5 * 104
sсостоит из английских букв, цифр, символов и пробелов.
*/

function lengthOfLongestSubstring(s: string): number {
    let res = 0;
    for (let i = s.length; i > 0; i--) {
        let substring = s.slice(0, i);

        let twoS = s;
        let entry = twoS.indexOf(substring);
        twoS = twoS.slice(entry, substring.length - 1);
        if (twoS.includes(substring)) {
            res = Math.max(res, substring.length);
        }
    }

    return res;
};

// v2

function lengthOfLongestSubstring(s: string): number {
    let unique = new Set();
    let left = 0;
    let maxRes = 0;

    for (let right = 0; right < s.length; right++) {
        while (unique.has(s[right])) {
            unique.delete(s[left]);
            left++;
        }

        unique.add(s[right]);
        maxRes = Math.max(maxRes, right - left + 1);
    }

    return maxRes;
};