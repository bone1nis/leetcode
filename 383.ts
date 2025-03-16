/*

383. Записка о выкупе
Решено
Легкий
Темы
Компании
Даны две строки ransomNoteи magazine, вернуть true, если ransomNoteих можно построить, используя буквы из magazineи , falseв противном случае .

Каждая буква в magazineможет быть использована только один раз ransomNote.

 

Пример 1:

Ввод: ransomNote = "a", magazine = "b"
 Вывод: false
Пример 2:

Ввод: ransomNote = "aa", magazine = "ab"
 Вывод: false
Пример 3:

Ввод: ransomNote = "aa", magazine = "aab"
 Вывод: true
 

Ограничения:

1 <= ransomNote.length, magazine.length <= 105
ransomNoteи magazineсостоят из строчных английских букв.*/


function canConstruct(ransomNote: string, magazine: string): boolean {

    if (ransomNote.length > magazine.length) return false;

    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        if (!magazine.includes(letter)) return false;
        magazine = magazine.replace(letter, "");
    }

    return true;
};

// v2

function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineChars = new Map();

    for (const char of magazine) {
        if (magazineChars.has(char)) {
            magazineChars.set(char, magazineChars.get(char)! + 1);
        } else {
            magazineChars.set(char, 1);
        }
    }

    for (const char of ransomNote) {
        if (magazineChars.get(char)) {
            magazineChars.set(char, magazineChars.get(char)! + 1);
        } else {
            return false;
        }
    }

    return true;
};