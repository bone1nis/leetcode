/*
128. Самая длинная последовательная последовательность
Попытка
Середина
Темы
Компании
Для данного несортированного массива целых чисел numsвернуть длину самой длинной последовательности последовательных элементов.

Вам необходимо написать алгоритм, который будет работать во  O(n) времени.

 

Пример 1:

Ввод: nums = [100,4,200,1,3,2]
 Вывод: 4
 Пояснение: Самая длинная последовательность последовательных элементов — [1, 2, 3, 4]. Следовательно, ее длина равна 4.
Пример 2:

Ввод: числа = [0,3,7,2,5,8,4,6,0,1]
 Вывод: 9
Пример 3:

Ввод: числа = [1,0,1,2]
 Вывод: 3
 

Ограничения:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    let map = new Map();

    let currentItem = 0;
    let res = 0;
    let newNums = [...new Set(nums.sort((a, b) => a - b))];
    if (newNums.length === 1) return 1;

    for (let i = 0; i < nums.length; i++) {

        if (newNums[i + 1] === newNums[i] + 1) {
            if (res === 0) {
                res += 1;
            }
            res += 1;
        } else {
            map.set(currentItem, res);
            currentItem += 1;
            res = 0;
        }

    }

    return Math.max(...map.values(), 1);
};

// v2

function longestConsecutive(nums: number[]): number {
    const newNums = new Set(nums);
    let best = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!newNums.has(nums[i] - 1)) {
            let y = nums[i] + 1;

            while (newNums.has(y)) {
                y += 1;
            }

            best = Math.max(best, y - nums[i]);
        }
    }

    return best;
};

// v3

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let max = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let y = num;
            let length = 0;

            while (set.has(y)) {
                set.delete(y);
                y += 1;
                length += 1;
            }

            max = Math.max(max, length);
        }
    }

    return max;
}