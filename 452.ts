/*
452. Минимальное количество стрел для лопания воздушных шаров
Решено
Середина
Темы
Компании
На плоской стене, представляющей плоскость XY, приклеены несколько сферических воздушных шаров. Воздушные шары представлены в виде двумерного целочисленного массива, pointsгде обозначает воздушный шар, горизонтальный диаметр которого простирается между и . Вы не знаете точных координат Y воздушных шаров.points[i] = [xstart, xend]xstartxend

Стрелы могут быть выпущены вертикально вверх (в положительном направлении оси y) из разных точек вдоль оси x. Воздушный шар с и лопается стрелой, выпущенной в , если . Нет предела количеству стрел, которые можно выстрелить. Выпущенная стрела продолжает двигаться вверх бесконечно, лопая все шарики на своем пути.xstartxendxxstart <= x <= xend

Учитывая массив points, верните минимальное количество стрел, которое необходимо выпустить, чтобы лопнуть все воздушные шары .

 

Пример 1:

Вход: точки = [[10,16],[2,8],[1,6],[7,12]]
 Выход: 2
 Пояснение: Воздушные шары можно лопнуть двумя стрелами: 
- Выпустить стрелу в точку x = 6, лопнув шары [2,8] и [1,6]. 
- Выпустить стрелу в точку x = 11, лопнув шары [10,16] и [7,12].
Пример 2:

Вход: баллы = [[1,2],[3,4],[5,6],[7,8]]
 Выход: 4
 Пояснение: Нужно выпустить по одной стреле в каждый шар, чтобы всего было 4 стрелы.
Пример 3:

Вход: точки = [[1,2],[2,3],[3,4],[4,5]]
 Выход: 2
 Пояснение: Воздушные шары можно лопнуть двумя стрелами: 
- Выпустить стрелу в точку x = 2, лопнув шары [1,2] и [2,3]. 
- Выпустить стрелу в точку x = 4, лопнув шары [3,4] и [4,5].
 

Ограничения:

1 <= points.length <= 105
points[i].length == 2
-231 <= xstart < xend <= 231 - 1
*/

function findMinArrowShots(points: number[][]): number {
    let sortedPoints = points.toSorted((a, b) => a[0] - b[0]);
    let count = 0;
    let max = Infinity;
    let min = -Infinity;

    for (let i = 0; i < sortedPoints.length; i++) {
        if (i === 0) {
            max = sortedPoints[i][1];
            min = sortedPoints[i][0];
            count++;
        }
        if (sortedPoints[i][1] <= max && sortedPoints[i][1] >= min) {
            max = sortedPoints[i][1];
        } else if (
            !(sortedPoints[i][1] >= max && sortedPoints[i][0] <= max)
        ) {
            max = sortedPoints[i][1];
            min = sortedPoints[i][0];
            count++;
        }
    }

    return count;
};

// v2

function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;

    let sortedPoints = points.slice().sort((a, b) => a[0] - b[0]);
    let count = 1;
    let max = sortedPoints[0][1];

    for (let i = 1; i < sortedPoints.length; i++) {
        if (sortedPoints[i][0] > max) {
            count++;
            max = sortedPoints[i][1];
        } else {
            max = Math.min(max, sortedPoints[i][1]);
        }
    }

    return count;
};

// v3

function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;

    points.sort((a, b) => a[0] - b[0]);

    let count = 1;
    let max = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > max) {
            count++;
            max = points[i][1];
        } else {
            max = Math.min(max, points[i][1]);
        }
    }

    return count;
};