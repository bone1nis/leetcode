/*
55. Игра в прыжки
Попытка
Середина
Темы
Компании
Вам дан целочисленный массив . Изначально вы находитесь в первом индексеnums массива , и каждый элемент в массиве представляет вашу максимальную длину прыжка в этой позиции.

Вернитесь true, если вы можете достичь последнего индекса, или falseв противном случае .

 

Пример 1:

Ввод: nums = [2,3,1,1,4]
 Вывод: true
 Пояснение: Переход на 1 шаг от индекса 0 к 1, затем на 3 шага к последнему индексу.
Пример 2:

Ввод: nums = [3,2,1,0,4]
 Вывод: false
 Объяснение: Вы всегда придете к индексу 3, несмотря ни на что. Его максимальная длина прыжка равна 0, что делает невозможным достижение последнего индекса.
 

Ограничения:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

function canJump(nums: number[]): boolean {
    let maxPosition = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maxPosition < i) return false;
        maxPosition = Math.max(maxPosition, nums[i] + i);
    }

    return true;
};
