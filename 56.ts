/*
56. Интервалы слияния
Попытка
Середина
Темы
Компании
Дан массив , intervals где , объединить все перекрывающиеся интервалы и вернуть массив неперекрывающихся интервалов, которые покрывают все интервалы во входных данных .intervals[i] = [starti, endi]

 

Пример 1:

Вход: интервалы = [[1,3],[2,6],[8,10],[15,18]]
 Выход: [[1,6],[8,10],[15,18]]
 Пояснение: Поскольку интервалы [1,3] и [2,6] перекрываются, объединим их в [1,6].
Пример 2:

Вход: интервалы = [[1,4],[4,5]]
 Выход: [[1,5]]
 Пояснение: Интервалы [1,4] и [4,5] считаются перекрывающимися.
 

Ограничения:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

function merge(intervals: number[][]): number[][] {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    let i = 0;
    while (i < sortedIntervals.length) {
        if (sortedIntervals[i][1] >= sortedIntervals[i + 1]?.[0]) {
            let min = Math.min(
                sortedIntervals[i][0],
                sortedIntervals[i + 1][0]
            );
            let max = Math.max(
                sortedIntervals[i][1],
                sortedIntervals[i + 1][1]
            );
            sortedIntervals.splice(i, 2, [min, max]);
        } else {
            i++;
        }
    }

    return sortedIntervals;
};