/*
57. Вставить интервал
Попытка
Середина
Темы
Компании
Намекать
Вам дан массив неперекрывающихся интервалов intervals, где представляют начало и конец интервала и отсортирован в порядке возрастания по . Вам также дан интервал , который представляет начало и конец другого интервала.intervals[i] = [starti, endi]ithintervalsstartinewInterval = [start, end]

Вставьте newIntervalв intervalsтак, чтобы он intervalsбыл отсортирован в порядке возрастания и не имел перекрывающихся интервалов (при необходимости объедините перекрывающиеся интервалы).startiintervals

Возврат intervalsпосле вставки .

Обратите внимание , что вам не нужно изменять intervalsна месте. Вы можете создать новый массив и вернуть его.

 

Пример 1:

Вход: интервалы = [[1,3],[6,9]], новыйИнтервал = [2,5]
 Выход: [[1,5],[6,9]]
Пример 2:

Вход: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 Выход: [[1,2],[3,10],[12,16]]
 Объяснение: потому что новый интервал [4,8] перекрывается с [3,5],[6,7],[8,10].
 

Ограничения:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervalsсортируется по возрастанию .starti
newInterval.length == 2
0 <= start <= end <= 105
*/

function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (!intervals.length) return [newInterval];

    let newIntervals = [...intervals];
    let isInserted = false;

    let i = 0;
    while (i < newIntervals.length) {

        if (!isInserted &&
            !(newInterval[1] < newIntervals[i][0] || newInterval[0] > newIntervals[i][1])) {
            let min = Math.min(newIntervals[i][0], newInterval[0]);
            let max = Math.max(newIntervals[i][1], newInterval[1]);

            newIntervals.splice(i, 1, [min, max]);
            isInserted = true;
        }
        else if (!isInserted && newInterval[1] < newIntervals[i][0]) {
            newIntervals.splice(i, 0, newInterval);
            isInserted = true;
            break;
        }

        else if (!isInserted && i === newIntervals.length - 1) {
            newIntervals.push(newInterval);
            isInserted = true;
        }

        if (newIntervals[i][1] >= newIntervals[i + 1]?.[0]) {
            let min = Math.min(newIntervals[i][0], newIntervals[i + 1][0]);
            let max = Math.max(newIntervals[i][1], newIntervals[i + 1][1]);

            newIntervals.splice(i, 2, [min, max]);
        } else {
            ++i;
        }
    }

    return newIntervals;
};

// v2

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let i = 0;
    let res = [];

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        ++i;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        ++i;
    }

    res.push(newInterval);

    while (i < intervals.length) {
        res.push(intervals[i]);
        ++i;
    }

    return res;
}
