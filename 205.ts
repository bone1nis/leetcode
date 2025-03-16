/*
205. Изоморфные строки
Попытка
Легкий
Темы
Компании
Даны две строки sи t, определите, являются ли они изоморфными .

Две строки sи tизоморфны, если символы в sможно заменить так, чтобы получить t.

Все вхождения символа должны быть заменены другим символом с сохранением порядка символов. Никакие два символа не могут соответствовать одному и тому же символу, но символ может соответствовать самому себе.

 

Пример 1:

Ввод: s = "яйцо", t = "добавить"

Вывод: истина

Объяснение:

Строки sи tможно сделать идентичными:

Сопоставление 'e'с 'a'.
Сопоставление 'g'с 'd'.
Пример 2:

Ввод: s = "foo", t = "bar"

Вывод: ложь

Объяснение:

Строки sи tне могут быть идентичны, так как 'o'их необходимо сопоставить с обеими 'a'и 'r'.

Пример 3:

Ввод: s = "бумага", t = "название"

Вывод: истина

 

Ограничения:

1 <= s.length <= 5 * 104
t.length == s.length
sи tсостоят из любого допустимого символа ASCII.
*/

function isIsomorphic(s, t) {
    let map = new Map();
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], t[i]);
        }
    }

    let seen = new Set();

    for (let [key, value] of map) {
        if (seen.has(value)) {
            map.delete(key);
        } else {
            seen.add(value);
        }
    }

    for (let i = 0; i < s.length; i++) {
        res += map.get(s[i]);
    }

    return res === t;
}

// v2

function isIsomorphic(s, t) {
    const mapS = new Map();
    const mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!mapS.has(s[i])) mapS.set(s[i], t[i]);
        else if (mapS.get(s[i]) !== t[i]) return false;

        if (!mapT.has(t[i])) mapT.set(t[i], s[i]);
        else if (mapT.get(t[i]) !== s[i]) return false;
    }

    return true
}