/*
1. Сумма двух
Попытка
Легкий
Темы
Компании
Намекать
Дан массив целых чисел nums и целое число target, вернуть индексы двух чисел, чтобы их сумма давалаtarget .

Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.

Вы можете возвращать ответ в любом порядке.

 

Пример 1:

Ввод: nums = [2,7,11,15], цель = 9
 Вывод: [0,1]
 Объяснение: поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
Пример 2:

Ввод: числа = [3,2,4], цель = 6
 Вывод: [1,2]
Пример 3:

Ввод: числа = [3,3], цель = 6
 Вывод: [0,1]
 

Ограничения:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Существует только один правильный ответ.
 

Продолжение:  Можете ли вы придумать алгоритм, сложность которого меньше временной?O(n2) 
*/

function twoSum(nums, target) {
    let sortNums = [...nums];
    sortNums.sort((a, b) => a - b);

    let low = 0;
    let high = sortNums.length - 1;
    while (low < high) {
        let sum = sortNums[low] + sortNums[high];

        if (sum > target) {
            high -= 1;
        } else if (sum < target) {
            low += 1;
        } else if (sum === target) {
            if (sortNums[low] === sortNums[high]) {
                let oneNumber = nums.indexOf(sortNums[low]);

                return [oneNumber, nums.indexOf(sortNums[high], oneNumber + 1)];
            }
            return [nums.indexOf(sortNums[low]), nums.indexOf(sortNums[high])];
        }
    }
}

// v2

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}
