/*
121. Лучшее время для покупки и продажи акций
Попытка
Легкий
Темы
Компании
Вам дан массив prices, где prices[i]— цена определенной акции на день.ith

Вы хотите максимизировать свою прибыль, выбрав один день для покупки одних акций и другой день в будущем для продажи этих акций.

Верните максимальную прибыль, которую вы можете получить от этой транзакции . Если вы не можете получить никакой прибыли, верните 0.

 

Пример 1:

Вход: цены = [7,1,5,3,6,4]
 Выход: 5
 Объяснение: Купить на 2-й день (цена = 1) и продать на 5-й день (цена = 6), прибыль = 6-1 = 5.
Обратите внимание, что покупка на второй день и продажа на первый день не допускаются, поскольку перед продажей необходимо сначала купить.
Пример 2:

Вход: цены = [7,6,4,3,1]
 Выход: 0
 Пояснение: В этом случае транзакции не совершаются, а максимальная прибыль = 0.
 

Ограничения:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = 9999;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit;
};
