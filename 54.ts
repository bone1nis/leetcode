/*
54. Спиральная матрица
Попытка
Середина
Темы
Компании
Намекать
Для данного m x n matrix, вернуть все элементы matrix в спиральном порядке .

 

Пример 1:


Вход: матрица = [[1,2,3],[4,5,6],[7,8,9]]
 Выход: [1,2,3,6,9,8,7,4,5]
Пример 2:


Вход: матрица = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 Выход: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Ограничения:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

function spiralOrder(matrix) {
    let result = [];
    let currentIndex = 0;
    let down = false;
    let up = false;
    if (matrix.length !== 2) {
        while (true) {
            if (matrix.length !== 0) {
                let currentMatrix = matrix[currentIndex];

                if (down === true) {
                    result.push(currentMatrix[currentMatrix.length - 1]);
                    matrix[currentIndex].splice(currentMatrix.length - 1, 1);
                    currentIndex += 1;

                    if (currentIndex === matrix.length - 1) {
                        down = false;
                    }
                } else if (up === true) {
                    result.push(currentMatrix[0]);
                    matrix[currentIndex].splice(0, 1);
                    currentIndex -= 1;

                    if (currentIndex === 0) {
                        up = false;
                    }
                } else if (currentIndex === 0) {
                    currentMatrix.forEach((item) => result.push(item));
                    matrix.splice(currentIndex, 1);
                    if (matrix.length - 1 !== 0) {
                        down = true;
                    } else {
                        currentIndex = 0;
                    }
                } else if (currentIndex === matrix.length - 1) {
                    currentMatrix.reverse().forEach((item) => result.push(item));
                    matrix.splice(currentIndex, 1);
                    if (matrix.length - 1 !== 0) {
                        up = true;
                    } else {
                        currentIndex = 0;
                    }
                }
            } else {
                break;
            }
        }
    } else {
        result.push(...matrix[0]);
        result.push(...matrix[1].reverse());
    }

    return result;
}

// v2


function spiralOrder(matrix) {
    const result = [];
    while (matrix.length > 0 && matrix[0][0] !== undefined) {
        result.push(...matrix.shift());
        matrix.forEach(row => result.push(row.pop()));
        matrix.reverse().map(row => row.reverse());
    }

    return result;
}
