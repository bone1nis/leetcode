/* 
380. Вставить Удалить GetRandom O(1)
Решено
Середина
Темы
Компании
Реализуйте RandomizedSetкласс:

RandomizedSet()Инициализирует RandomizedSetобъект.
bool insert(int val)Вставляет элемент valв набор, если его нет. Возвращает, trueесли элемента не было, falseв противном случае.
bool remove(int val)Удаляет элемент valиз набора, если он присутствует. Возвращает true, если элемент присутствовал, falseв противном случае.
int getRandom()Возвращает случайный элемент из текущего набора элементов (гарантируется, что при вызове этого метода существует хотя бы один элемент). Каждый элемент должен иметь одинаковую вероятность быть возвращенным.
Необходимо реализовать функции класса таким образом, чтобы каждая функция работала со  средней O(1)  временной сложностью.

 

Пример 1:

Вход
["RandomizedSet", "вставить", "удалить", "вставить", "getRandom", "удалить", "вставить", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Выход
[ноль, правда, ложь, правда, 2, правда, ложь, 2]

Объяснение
СлучайныйНабор случайныйНабор = новый СлучайныйНабор();
randomizedSet.insert(1); // Вставляет 1 в набор. Возвращает true, так как 1 был успешно вставлен.
randomizedSet.remove(2); // Возвращает false, так как 2 не существует в наборе.
randomizedSet.insert(2); // Вставляет 2 в набор, возвращает true. Теперь набор содержит [1,2].
randomizedSet.getRandom(); // getRandom() должен возвращать либо 1, либо 2 случайным образом.
randomizedSet.remove(1); // Удаляет 1 из набора, возвращает true. Теперь набор содержит [2].
randomizedSet.insert(2); // 2 уже было в наборе, поэтому возвращаем false.
randomizedSet.getRandom(); // Поскольку 2 — единственное число в наборе, getRandom() всегда будет возвращать 2.
 

Ограничения:

-231 <= val <= 231 - 1
Максимальное количество звонков будет сделано на номера , , и .2 * 105insertremovegetRandom
*/

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
*/

class RandomizedSet {
    randomizedSet: number[];

    constructor() {
        this.randomizedSet = [];
    }

    insert(val: number): boolean {
        if (!this.randomizedSet.includes(val)) {
            this.randomizedSet.push(val)
            return true;
        }

        return false;
    }

    remove(val: number): boolean {
        if (this.randomizedSet.includes(val)) {
            this.randomizedSet = this.randomizedSet.filter(item => item !== val)
            return true;
        }

        return false;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.randomizedSet.length);

        return this.randomizedSet[randomIndex];
    }
}

// v2

class RandomizedSet {
    list: number[];
    map: Map<number, number>;

    constructor() {
        this.list = [];
        this.map = new Map();
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;

        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        const index = this.map.get(val);
        const lastElem = this.list[this.list.length - 1];

        this.list[index] = lastElem;
        this.map.set(lastElem, index);

        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);

        return this.list[randomIndex];
    }
}