/*
20. Допустимые скобки
Легкий
Темы
Компании
Намекать
Дана строка, sсодержащая только символы '(', ')', '{', '}', '['и ']', определите, является ли входная строка допустимой.

Входная строка действительна, если:

Открытые скобки должны быть закрыты скобками того же типа.
Открытые скобки должны быть закрыты в правильном порядке.
Каждой закрывающейся скобке соответствует открывающаяся скобка того же типа.
 

Пример 1:

Ввод: s = "()"

Вывод: истина

Пример 2:

Ввод: s = "()[]{}"

Вывод: истина

Пример 3:

Ввод: s = "(]"

Вывод: ложь

Пример 4:

Ввод: s = "([])"

Вывод: истина
*/


function isValid(s) {
    let map = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);

    let stack = [];

    for (let letter of s) {
        if (letter === "(" || letter === "[" || letter === "{") {
            stack.push(letter);
        } else if (letter === map.get(stack[stack.length - 1])) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

// кажется легким, да? а ушел час и пару подходов для решения, они будут ниже. Я не могла найти правильный подход, пока в обсуждениях не увидела коментарий 
/*
Подсказка: представьте, что у вас сначала есть несколько открывающихся скобок, скажем, «([({(.....», что произойдет, когда вы получите первую закрывающуюся скобку?
*/

// и тут я поняла, как надо было решать это через stack, и что вообще такое stack в js, накидала на минут 5-10

function isValid(s) {
    let map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);

    let i = s.length - 1;

    while (i >= 0) {
        if (s[0] === map.get(s[i])) {
            s = s.slice(1, -1);
        } else if (i > 0 && s[i - 1] === map.get(s[i])) {
            s = s.slice(0, i - 1);
        } else {
            return false;
        }
        i -= 2;
    }

    return true;
};

// v2

function isValid(s: string): boolean {
    let brackets = [0, 0, 0];
    for (let letter of s) {
        if (letter === "{") {
            brackets[0] += 1;
        } else if (letter === "}") {
            brackets[0] -= 1;
        } else if (letter === "[") {
            brackets[1] += 1;
        } else if (letter === "]") {
            brackets[1] -= 1;
        } else if (letter === "(") {
            brackets[2] += 1;
        } else if (letter === ")") {
            brackets[2] -= 1;
        }
    }

    return brackets[0] === 0 && brackets[1] === 0 && brackets[2] === 0;
};