/*
69. Корень(x)
Решено
Легкий
Темы
Компании
Намекать
Дано неотрицательное целое число x, вернуть квадратный корень xокругленного вниз до ближайшего целого числа . Возвращаемое целое число также должно быть неотрицательным .

Не допускается использование встроенных функций или операторов экспоненты.

Например, не используйте pow(x, 0.5)в C++ или x ** 0.5Python.
 

Пример 1:

Ввод: x = 4
 Вывод: 2
 Пояснение: Квадратный корень из 4 равен 2, поэтому мы возвращаем 2.
Пример 2:

Ввод: x = 8
 Вывод: 2
 Пояснение: Квадратный корень из 8 равен 2,82842..., и поскольку мы округляем его до ближайшего целого числа, возвращается 2.
 

Ограничения:

0 <= x <= 231 - 1
*/

function mySqrt(x: number): number {
    let low = 0;
    let high = x;

    while (low <= high) {
        const mid = ((low + high) / 2) - (((low + high) / 2) % 1)

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            high = mid - 1;
        } else if (mid * mid < x) {
            low = mid + 1;
        }
    }


    return high;
};