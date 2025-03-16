/*
150. Оценить обратную польскую запись
Решено
Середина
Темы
Компании
Вам дан массив строк tokens, представляющий собой арифметическое выражение в обратной польской записи .

Оценить выражение. Возвратить целое число, представляющее значение выражения .

Обратите внимание, что:

Допустимые операторы: '+', '-', '*', и '/'.
Каждый операнд может быть целым числом или другим выражением.
Деление двух целых чисел всегда приводит к округлению в сторону нуля .
Деления на ноль не будет.
Входные данные представляют собой допустимое арифметическое выражение в обратной польской записи.
Ответ и все промежуточные вычисления можно представить в виде 32-битного целого числа.
 

Пример 1:

Вход: токены = ["2","1","+","3","*"]
 Выход: 9
 Пояснение: ((2 + 1) * 3) = 9
Пример 2:

Вход: токены = ["4","13","5","/","+"]
 Выход: 6
 Объяснение: (4 + (13 / 5)) = 6
Пример 3:

Вход: токены = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 Выход: 22
 Пояснение: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6/-132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Ограничения:

1 <= tokens.length <= 104
tokens[i]является либо оператором: "+", "-", "*", или "/", либо целым числом в диапазоне [-200, 200].
*/

function evalRPN(tokens: string[]): number {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let current = tokens[i];
        if (current === "+" || current === "-" || current === "*" || current === "/") {
            let one = stack.pop();
            let two = stack.pop();

            if (current === "+") {
                stack.push(Number(two) + Number(one));
            } else if (current === "-") {
                stack.push(Number(two) - Number(one));
            } else if (current === "*") {
                stack.push(Number(two) * Number(one));
            } else {
                let res = Number(two) / Number(one);

                stack.push(res > 0 ? Math.floor(res) : Math.ceil(res));
            }
        }
        else {
            stack.push(Number(current));
        }
    }

    return stack[0];
};

// v2

function evalRPN(tokens: string[]): number {
    const stack = [];


    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let numOne = Number(stack.pop());
            let numTwo = Number(stack.pop());

            if (token === "+") {
                stack.push(numTwo + numOne);
            } else if (token === "-") {
                stack.push(numTwo - numOne);
            } else if (token === "*") {
                stack.push(numTwo * numOne);
            } else {
                let res = numTwo / numOne;

                stack.push(res > 0 ? Math.floor(res) : Math.ceil(res));
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};