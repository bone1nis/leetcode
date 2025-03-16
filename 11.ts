/*
11. Контейнер с наибольшим количеством воды
Попытка
Середина
Темы
Компании
Намекать
Вам дан целочисленный массив heightдлины n. Нарисованы nвертикальные линии, две конечные точки которых — и .ith(i, 0)(i, height[i])

Найдите две линии, которые вместе с осью x образуют емкость, такую, чтобы емкость содержала наибольшее количество воды.

Укажите максимальный объем воды, который может храниться в контейнере .

Обратите внимание , что наклонять емкость нельзя.

 

Пример 1:


Вход: высота = [1,8,6,2,5,4,8,3,7]
 Выход: 49
 Пояснение: Вышеуказанные вертикальные линии представлены массивом [1,8,6,2,5,4,8,3,7]. В этом случае максимальная площадь воды (синяя секция), которую может содержать контейнер, составляет 49.
Пример 2:

Вход: высота = [1,1]
 Выход: 1
 

Ограничения:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

function maxArea(height: number[]): number {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j > 0; j--) {
      const size = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, size);
    }
  }

  return max;
}

// v2

function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (true) {
    const size = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(max, size);
    --j;
    if (j === 0) {
      ++i;
      j = height.length - 1;
    }

    if (i === height.length - 1) {
      return max;
    }
  }
}

// v3 

function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return max;
}

// изначально думала в эту сторону, но не понимала как сделать это, какое должно быть условие для перемещения указателя, а оно вон как
