/* 
35. Поиск Вставить Позицию
Легкий
Дано отсортированное множество различных целых чисел и целевое значение, вернуть индекс, если цель найдена. Если нет, вернуть индекс, где бы он был, если бы он был вставлен по порядку.

Вам необходимо написать алгоритм, обладающий  O(log n)сложностью во время выполнения.

 

Пример 1:

Ввод: числа = [1,3,5,6], цель = 5
 Вывод: 2
Пример 2:

Ввод: числа = [1,3,5,6], цель = 2
 Вывод: 1
Пример 3:

Ввод: числа = [1,3,5,6], цель = 7
 Вывод: 4
 

Ограничения:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
numsсодержит различные значения, отсортированные в порядке возрастания .
-104 <= target <= 104
 */

const searchInsert = (nums: number[], target: number): number => {
    let low = 0;
    let high = nums.length - 1;

    if (target <= nums[low]) {
        return 0;
    } else if (target > nums[high]) {
        return high + 1;
    } else if (target === nums[high]) {
        return high;
    }

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let current = nums[mid]

        if (current === target) {
            return mid
        } else if (current > target) {
            high = mid - 1
        } else if (current < target) {
            low = mid + 1
        }
    }

    let index = 0;

    while (true) {
        if (nums[index] < target && nums[index + 1] > target) {
            return index + 1;
        }

        index += 1
    }
};

// v2

const searchInsertt = (nums: number[], target: number): number => {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let current = nums[mid]

        if (current === target) {
            return mid
        } else if (current > target) {
            high = mid - 1
        } else if (current < target) {
            low = mid + 1
        }
    }

    return low;
};