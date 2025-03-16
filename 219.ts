/*
219. Содержит дубликат II
Попытка
Легкий
Темы
Компании
Дан массив целых чисел numsи целое число k, вернуть значение, если в массиве true есть два различных индекса i и , такие что и .jnums[i] == nums[j]abs(i - j) <= k

 

Пример 1:

Ввод: nums = [1,2,3,1], k = 3
 Вывод: true
Пример 2:

Ввод: nums = [1,0,1,1], k = 1
 Вывод: true
Пример 3:

Ввод: nums = [1,2,3,1,2,3], k = 2
 Вывод: false
 

Ограничения:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/


function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        let index = nums.indexOf(nums[i], i + 1);
        if (index !== -1 && index - i <= k) {
            return true;
        }
    }

    return false;
};

// v2

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
};