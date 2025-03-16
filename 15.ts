/*
15. 3Сумма
Решено
Середина
Темы
Компании
Намекать
Дан целочисленный массив nums, вернуть все триплеты, [nums[i], nums[j], nums[k]]такие что i != j, i != k, и j != k, и nums[i] + nums[j] + nums[k] == 0.

Обратите внимание, что набор решений не должен содержать повторяющихся триплетов.

 

Пример 1:

Ввод: nums = [-1,0,1,2,-1,-4]
 Вывод: [[-1,-1,2],[-1,0,1]]
 Пояснение: 
числа[0] + числа[1] + числа[2] = (-1) + 0 + 1 = 0.
числа[1] + числа[2] + числа[4] = 0 + 1 + (-1) = 0.
числа[0] + числа[3] + числа[4] = (-1) + 2 + (-1) = 0.
Различаются триплеты [-1,0,1] и [-1,-1,2].
Обратите внимание, что порядок вывода и порядок триплетов не имеют значения.
Пример 2:

Ввод: nums = [0,1,1]
 Вывод: []
 Пояснение: Единственная возможная тройка не дает в сумме 0.
Пример 3:

Ввод: nums = [0,0,0]
 Вывод: [[0,0,0]]
 Пояснение: Единственная возможная тройка дает в сумме 0.
 

Ограничения:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

function threeSum(nums: number[]): number[][] {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left += 1;
                while (left < right && nums[right] === nums[right - 1]) right -= 1;

                left += 1;
                right -= 1;
            } else if (sum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }

    return result;
};
