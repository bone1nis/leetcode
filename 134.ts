/* 
Вдоль кольцевого маршрута расположены nзаправочные станции, где количество бензина на станции составляет .ithgas[i]

У вас есть автомобиль с неограниченным топливным баком, и cost[i]поездка от одной заправки до другой стоит бензина . Вы начинаете поездку с пустым баком на одной из заправок.ith(i + 1)th

Даны два целочисленных массива gasи cost, вернуть индекс начальной заправочной станции, если вы можете объехать весь маршрут один раз по часовой стрелке, в противном случае вернуть .-1 Если решение существует, оно гарантированно уникально .

 

Пример 1:

Вход: газ = [1,2,3,4,5], стоимость = [3,4,5,1,2]
 Выход: 3
 Пояснение:
Начните со станции 3 (индекс 3) и заправьтесь 4 единицами газа. Ваш бак = 0 + 4 = 4
Отправляйтесь на станцию ​​4. Ваш танк = 4 - 1 + 5 = 8
Отправляйтесь на станцию ​​0. Ваш танк = 8 - 2 + 1 = 7
Отправляйтесь на станцию ​​1. Ваш танк = 7 - 3 + 2 = 6
Отправляйтесь на станцию ​​2. Ваш танк = 6 - 4 + 3 = 5
Поездка до станции 3. Стоимость — 5. Вашего бензина как раз хватит, чтобы доехать обратно до станции 3.
Поэтому верните 3 в качестве начального индекса.
Пример 2:

Вход: газ = [2,3,4], стоимость = [3,4,3]
 Выход: -1
 Пояснение:
Вы не можете начать со станции 0 или 1, так как недостаточно бензина для поездки до следующей станции.
Давайте начнем со станции 2 и заправимся 4 единицами бензина. Ваш бак = 0 + 4 = 4
Отправляйтесь на станцию ​​0. Ваш танк = 4 - 3 + 2 = 3
Отправляйтесь на станцию ​​1. Ваш танк = 3 - 3 + 3 = 3
Вы не можете вернуться на станцию ​​2, так как для этого требуется 4 единицы бензина, а у вас их всего 3.
Таким образом, вы не сможете проехать по кругу один раз, независимо от того, где вы начинаете.
 

Ограничения:

n == gas.length == cost.length
1 <= n <= 105
0 <= gas[i], cost[i] <= 104
 */

function canCompleteCircuit(gas, cost) {
  let startIndex;

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] >= 0) {
      let acc = 0;
      let statusOne = true;
      let statusTwo = true;

      for (let a = i; a < gas.length; a++) {
        if (acc + gas[a] - cost[a] >= 0) {
          acc += gas[a] - cost[a];
        } else {
          statusOne = false;
          break;
        }
      }

      if (statusOne === true) {
        for (let a = 0; a < i; a++) {
          if (acc + gas[a] - cost[a] >= 0) {
            acc += gas[a] - cost[a];
          } else {
            statusTwo = false;
            break;
          }
        }

        if (statusTwo === true) {
          startIndex = i;
          break;
        }
      }
    }
  }

  if (startIndex >= 0) {
    return startIndex;
  } else {
    return -1;
  }
}


// v2

function canCompleteCircuit(gas, cost) {
  let acc = 0;
  let currentGas = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    let balance = gas[i] - cost[i];
    currentGas += balance;
    acc += balance;

    if (currentGas < 0) {
      startIndex = i + 1;
      currentGas = 0;
    }
  }

  return acc >= 0 ? startIndex : -1;
};