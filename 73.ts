/*
73. Установка нулей матрицы
Решено
Середина
Темы
Компании
Намекать
Если задана m x nцелочисленная матрица matrix, то, если ее элемент равен 0, присвоить всей ее строке и столбцу значение 0.

Вы должны сделать это на месте .

 

Пример 1:


Вход: матрица = [[1,1,1],[1,0,1],[1,1,1]]
 Выход: [[1,0,1],[0,0,0],[1,0,1]]
Пример 2:


Вход: матрица = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 Выход: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

/**
 Do not return anything, modify matrix in-place instead.
 */

function setZeroes(matrix: number[][]): void {
    let swapRow = new Set();
    let swapColumn = new Set();
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] === 0) {
                swapRow.add(row);
                swapColumn.add(column);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (swapRow.has(row)) {
                matrix[row].forEach((item, index) => (matrix[row][index] = 0));
                break;
            }

            if (swapColumn.has(column)) {
                matrix[row][column] = 0;
            }
        }
    }
}
