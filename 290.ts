/*
290. Модель слова
Решено
Легкий
Темы
Компании
Даны a patternи строка s, найдите, s следует ли она тому же шаблону.

Здесь follow означает полное совпадение, такое, что существует биекция между буквой в patternи непустым словом в s. В частности:

Каждая буква в patternсоответствует ровно одному уникальному слову в s.
Каждое уникальное слово в sсоответствует ровно одной букве в pattern.
Никакие две буквы не соответствуют одному и тому же слову, и никакие два слова не соответствуют одной и той же букве.
 

Пример 1:

Ввод: шаблон = "abba", s = "собака кошка кошка собака"

Вывод: истина

Объяснение:

Биекцию можно установить следующим образом:

'a'карты в "dog".
'b'карты в "cat".
Пример 2:

Ввод: шаблон = "abba", s = "собака кошка кошка рыба"

Вывод: ложь

Пример 3:

Ввод: шаблон = "aaaa", s = "собака кошка кошка собака"

Вывод: ложь

 

Ограничения:

1 <= pattern.length <= 300
patternсодержит только строчные английские буквы.
1 <= s.length <= 3000
sсодержит только строчные английские буквы и пробелы ' '.
s не содержит начальных или конечных пробелов.
Все слова sразделены одним пробелом .
*/

function wordPattern(pattern: string, s: string): boolean {
    let letterS = s.split(" ");
    let mapPattern = new Map();
    let mapS = new Map();

    if (letterS.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (!mapS.has(letterS[i])) mapS.set(letterS[i], pattern[i]);
        else if (mapS.get(letterS[i]) !== pattern[i]) return false;

        if (!mapPattern.has(pattern[i])) mapPattern.set(pattern[i], letterS[i]);
        else if (mapPattern.get(pattern[i]) !== letterS[i]) return false;
    }

    return true;
};

// v2

function wordPattern(pattern: string, s: string): boolean {
    let letterS = s.split(" ");
    let mapP = new Map();
    let mapS = new Map();

    if (letterS.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const s = letterS[i];

        if (mapS.has(s) && mapS.get(s) !== p) return false;
        if (mapP.has(p) && mapP.get(p) !== s) return false;

        mapS.set(s, p);
        mapP.set(p, s);
    }

    return true;
};
