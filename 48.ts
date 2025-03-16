/*

48. Повернуть изображение
Решено
Середина
Темы
Компании
Вам дано n x n2D- matrixпредставление изображения, поверните изображение на 90 градусов (по часовой стрелке).

Вам нужно повернуть изображение на месте , что означает, что вам нужно напрямую изменить входную 2D-матрицу. НЕ выделяйте другую 2D-матрицу и не делайте поворот.

 

Пример 1:


Вход: матрица = [[1,2,3],[4,5,6],[7,8,9]]
 Выход: [[7,4,1],[8,5,2],[9,6,3]]
Пример 2:


Вход: матрица = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 Выход: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Ограничения:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

function rotate(matrix) {
    let lastMatrix = [];
    matrix.forEach((currentMatrix) => {
        lastMatrix.push([...currentMatrix]);
    });

    let currentIndex = 0;

    for (let i = lastMatrix.length - 1; i >= 0; i--) {
        let currentMatrix = lastMatrix[i];

        currentMatrix.forEach((item, index) => {
            matrix[index].splice(currentIndex, 1, item);
        });
        currentIndex += 1;
    }
}

// v2

function rotate(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    matrix.forEach(arr => arr.reverse());
}
