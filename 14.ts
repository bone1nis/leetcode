/*
14. Самый длинный общий префикс
Решено
Легкий
Темы
Компании
Напишите функцию для поиска самой длинной общей строки префикса среди массива строк.

Если общего префикса нет, вернуть пустую строку "".

 

Пример 1:

Ввод: strs = ["цветок","поток","полет"]
 Вывод: "fl"
Пример 2:

Ввод: strs = ["dog","racecar","car"]
 Вывод: ""
 Пояснение: Среди входных строк нет общего префикса.
 

Ограничения:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i]состоит только из строчных английских букв, если он непустой.
*/

function longestCommonPrefix(strs) {
    let result = strs[0];

    for (let i = 0; i < strs.length; i++) {

        if (!strs[i].startsWith(result)) {

            let indexLetter = result.length - 1;
            while (!strs[i].startsWith(result)) {

                result = result.slice(0, indexLetter);
                --indexLetter;

                if (indexLetter < 0) {
                    break;
                }

            }
        }
    }

    return result;
}

// v2

function longestCommonPrefix(strs) {
    let result = strs[0];

    for (let i = 1; i < strs.length; i++) {

        while (!strs[i].startsWith(result)) {
            result = result.slice(0, -1);
        }

        if (result === "") {
            return result;
        }
    }

    return result;
}

// сколько лишнего написала