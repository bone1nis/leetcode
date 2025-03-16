/*
209. Минимальный размер суммы подмассива
Середина
Темы
Компании
Дан массив положительных целых чисел numsи положительное целое число target, вернуть минимальную длину массива.
подмассив
сумма которых больше или равна target . Если такого подмассива нет, верните 0вместо этого.

 

Пример 1:

Вход: target = 7, nums = [2,3,1,2,4,3]
 Выход: 2
 Пояснение: Подмассив [4,3] имеет минимальную длину при ограничении задачи.
Пример 2:

Ввод: цель = 4, числа = [1,4,4]
 Вывод: 1
Пример 3:

Ввод: цель = 11, числа = [1,1,1,1,1,1,1,1]
 Вывод: 0
 

Ограничения:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Продолжение: Если вы нашли O(n)решение, попробуйте закодировать другое решение, временная сложность которого составляет O(n log(n)).
*/



function minSubArrayLen(target, nums) {
    let window = 1;

    let res = 0;
    let maxRes = 0;

    let i = 0;
    let length = 0;
    while (true) {
        res += nums[i];
        maxRes = Math.max(maxRes, res);

        i += 1;
        length += 1;

        if (window < length) {
            res = 0;
            length = 0;
        }

        if (i >= nums.length) {
            window += 1;
        }
        if (maxRes >= target) {
            return length;
        }
        if (window > nums.length) {
            return 0;
        }
    }
}

// v2


function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}