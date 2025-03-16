/*
155. Мин. Стек
Решено
Середина
Темы
Компании
Намекать
Разработайте стек, который поддерживает push, pop, top и извлечение минимального элемента за постоянное время.

Реализуйте MinStackкласс:

MinStack()инициализирует объект стека.
void push(int val)помещает элемент valв стек.
void pop()удаляет элемент наверху стека.
int top()получает верхний элемент стека.
int getMin()извлекает минимальный элемент в стеке.
Вам необходимо реализовать решение с учетом O(1)временной сложности для каждой функции.

 

Пример 1:

Входные данные 
["MinStack","push","push","push","getMin","pop","top","getMin"] 
[[],[-2],[0],[-3],[],[],[],[]] Выходные данные 
[null,null,null,null,-3,null,0,-2] Пояснение 
MinStack minStack = new MinStack(); 
minStack.push(-2); 
minStack.push(0); 
minStack.push(-3); 
minStack.getMin(); // возвращаем -3 
minStack.pop(); 
минСтек.топ(); // возвращаем 0 
minStack.getMin(); // возвращаем -2




 

Ограничения:

-231 <= val <= 231 - 1
Методы popи topоперации getMinвсегда будут вызываться на непустых стеках.
Максимальное количество звонков будет сделано на номера , , , и .3 * 104pushpoptopgetMin
*/

class MinStack {
    stack: number[];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return Math.min(...this.stack);
    }
}

// v2

class MinStack {
    private stack;
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push({
            val,
            min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
        return this.stack.length === 0 ? 0 : this.stack[this.stack.length - 1].min;
    }
}