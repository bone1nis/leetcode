/*
228. Сводные диапазоны
Решено
Легкий
Темы
Компании
Вам дан отсортированный уникальный целочисленный массив nums.

Диапазон — [a,b] это набор всех целых чисел от aдо b(включительно).

Верните наименьший отсортированный список диапазонов, которые покрывают все числа в массиве ровно . То есть, каждый элемент из numsпокрывается ровно одним из диапазонов, и не существует целого числа x, которое xнаходится в одном из диапазонов, но не в nums.

Каждый диапазон [a,b]в списке должен быть выведен как:

"a->b"еслиa != b
"a"еслиa == b
 

Пример 1:

Ввод: nums = [0,1,2,4,5,7]
 Вывод: ["0->2","4->5","7"]
 Пояснение: Диапазоны:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Пример 2:

Ввод: nums = [0,2,3,4,6,8,9]
 Вывод: ["0","2->4","6","8->9"]
 Пояснение: Диапазоны:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Ограничения:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
Все значения numsуникальны .
numsсортируется в порядке возрастания.
*/

function summaryRanges(nums: number[]): string[] {
    let res = [];
    let intRes = "";
    let intMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            if (intRes) {
                intRes += intMax;
                res.push(intRes);
                intRes = "";
                intMax = 0;
            } else {
                res.push(`${nums[i]}`);
            }
        } else {
            if (!intRes) {
                intRes += `${nums[i]}->`;
                intMax = nums[i + 1];
            } else {
                intMax += 1;
            }
        }
    }

    return res;
};

// v2

function summaryRanges(nums: number[]): string[] {
    const res = [];
    let str = "";

    let start = nums[0];


    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) continue

        str = (start === nums[i - 1])
            ? `${start}`
            : `${start}->${nums[i - 1]}`;

        res.push(str)
        start = nums[i]
    }

    return res;
};