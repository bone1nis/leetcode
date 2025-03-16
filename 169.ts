/* 
169. Элемент большинства
Попытка
Легкий
Темы
Компании
Для заданного массива numsразмера nвернуть элемент большинства .

Элемент большинства — это элемент, который появляется больше ⌊n / 2⌋раз. Вы можете предположить, что элемент большинства всегда существует в массиве.

 

Пример 1:

Ввод: числа = [3,2,3]
 Вывод: 3
Пример 2:

Вход: числа = [2,2,1,1,1,2,2]
 Выход: 2
 

Ограничения:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Продолжение: Сможете ли вы решить эту задачу в линейном времени и O(1)пространстве?
*/

function majorityElement(nums) {
    const map = new Map();
    const amount = Math.ceil(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            const value = map.get(nums[i]);
            map.set(nums[i], value + 1)
        }
    }

    let max = 0;

    map.forEach((value, key, map) => {
        if (max === 0 || map.get(max) < value) {
            max = key;
        }
    })

    return max
};

// v2 

function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (candidate === num) ? 1 : -1;
    }

    return candidate;
};


// вообще классный алгоритм, очень простой и рабочий, выполняется тоже овер быстро алгоритма большинства голосов Бойера-Мура .