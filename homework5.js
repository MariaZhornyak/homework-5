//Палиндром
'use strict';
let str = 'ifkfi';
let value = true;
let newStr = str.length - 1;
for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[newStr - i]) {
        value = false;
    } else {
        value = true;
    }
}
alert(value);

//Анаграмма
'use strict';

//Поиск гласных
'use strict';
let str = 'gbanbume';
let newStr = str.split('');
function searchOfVowels(newStr) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (newStr[i] == 'a' || newStr[i] == 'o' || newStr[i] == 'u' || newStr[i] == 'i' || newStr[i] == 'e') {
            result.push(newStr[i]);
        }
    } return result.length; 
}
console.log(searchOfVowels(newStr));

//Фибоначчи
const fib = n => {
    const a = (1 + 5 ** 0.5) / 2;
    return Math.round(a ** n / 5 ** 0.5);
  }
  console.log(fib(9));

//Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
'use strict';
let str = 'aaa bbb ccc';
console.log(str.substr(4, 3));
console.log(str.substring(4, 7));
console.log(str.slice(4, 7));

//Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
'use strict';
let date = '2025-12-31';
let date1 = date.split('-');
let date2 = date1.reverse().join('/');
console.log(date2);

//Дана строка 'js'. Сделайте из нее строку 'JS'.
//Дана строка 'JS'. Сделайте из нее строку 'js'.
'use strict';
let str = 'js';
console.log(str.toLocaleUpperCase());
let str1 = 'JS';
console.log(str.toLocaleLowerCase());

//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
'use strict';
let str = 'я учу javascript!';
console.log(str.length);

//Дана строка 'я учу javascript!'. 
//Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
'use strict';
let str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substr(6, 10));
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
console.log(str.slice(2, 5));
console.log(str.slice(6, 16));

//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
'use strict';
let str = 'я учу javascript!';
console.log(str.indexOf('учу'));

//Дана переменная str, в которой хранится какой-либо текст. 
//Реализуйте обрезание длинного текста по следующему принципу: 
//если количество символов этого текста больше заданного в переменной n,
//то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
//В противном случае в переменную result запишем содержимое переменной str.
'use strict';
let str = prompt('enter a string');;
let n = prompt('enter a string length');
for (let i = 0; i < str.length; i++) {
    if (str.length <= n) {
        console.log(str);
    } else if (str.length > n) {
        console.log(str.slice(0, n) + '...');
    }
}

//Дана строка 'я учу javascript!'.
//С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
'use strict';
let str = 'я учу javascript!';
let newStr = str.split(' ');
console.log(newStr);

//Дана строка 'я учу javascript!'. 
//С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
'use strict';
let str = 'я учу javascript!';
let newStr = str.split('');
console.log(newStr);

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
'use strict';
let date = '2025-12-31';
let newDate = date.split('-').reverse().join('.');
console.log(newDate);


//Дан массив ['я', 'учу', 'javascript', '!'].
//С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
'use strict';
let arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+'));
    
//Преобразуйте первую букву строки в верхний регистр.
'use strict';
let str = 'я учу javascript!';
let newStr = str.charAt(0).toUpperCase() + str.substr(1)
console.log(newStr);

//Преобразуйте первую букву каждого слова строки в верхний регистр.
'use strict';
let str = 'jgh bbc uufjk bncg';
let str1 = '';
let newStr = str.split(' ');
for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toLocaleUpperCase() + newStr[i].slice(1); 
    str1 = newStr.join(' ');
}
console.log(str1);

//Преобразуйте строку 'var_test_text' в 'varTestText'. 
//Скрипт, конечно же, должен работать с любыми аналогичными строками.
'use strict';
let str = 'var_test_text';
let newStr = str.split('_');
let str1 = '';
for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    str1 = newStr.join('');
}
console.log(str1);

//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
'use strict';
let str = 'я учу javascript!';
function stringToArray(str) {
    let newStr = str.split(' ');
    return newStr;
}
console.log(stringToArray(str));

//Напишите функцию delete_characters(str, length), которая возвращает подстроку, 
//состоящую из указанного количества символов.
'use strict';
let str = 'jhj hgjgj mnmb ffdvc';
function delete_characters(str, length) {
    let newStr = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (newStr[i].length == length) {
            return newStr[i];
        } else if (newStr[i].length !== length) {
            return false;
        }
    }
} 
console.log(delete_characters(str, 11));

//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента
//и вставляет тире (-) между словами.
//При этом все символы строки необходимо перевести в верхний регистр.
'use strict';
let str = prompt('enter some words');
function insert_dash(str) {
    let newStr = str.split(' ').join('-').toUpperCase();
    return newStr;
}
console.log(insert_dash(str));

//Напишите функцию, которая принимает строку в качестве аргумента
//и преобразует регистр первого символа строки из нижнего регистра в верхний
'use strict';
let str = 'jgh bbc uufjk bncg';
function firstLetterToUpperCase(str) {
    let newStr = str.split(' ');
    for (let i = 0; i < newStr.length; i++) {
            var str1 = newStr[0][0].toUpperCase() + str.substr(1);
    } return str1;
}
console.log(firstLetterToUpperCase(str));

//Напишите функцию capitalize(str), которая возвращает строку,
//в которой каждое слово начинается с заглавной буквы.
'use strict';
let str = prompt('enter some words');
function capitalize(str) {
    let newStr = str.split(' ');
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    } return newStr.join(' ');
}
console.log(capitalize(str));  

//Напишите функцию change_register(str), которая принимает в качестве аргумента строку
//и заменяет регистр каждого символа на противоположный.
//Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
'use strict';
let str = 'HeLlo WoRld';
let newStr = '';
function change_register(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else if (str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        }
    } return newStr;
}
console.log(change_register(str));

//Напишите функцию remove_char(str), которая возвращает строку, 
//очищенную от всех не буквенно-цифровых символов.
'use strict';
let str = 'jbvh, 90657.knhf564^%**&';
function remove_char(str) {
    var res = "";
    res = str.replace(/[^\w\s]|_/g, "")
           .replace(/\s+/g, " ");
    return res;      
 }
 console.log(remove_char(str));

//Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение
//с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
'use strict';
//padStart
let str = 'hello world';
function zeros(num, len) {

}

//Напишите функцию insensitive_search(str1, str2), 
//которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
'use strict';
let str1 = 'hello darkness my old friend';
let str2 = 'Old';
function insensitive_search(str1, str2) {
    return str1.toLowerCase().includes(str2.toLowerCase());
}
console.log(insensitive_search(str1, str2));


//Напишите функцию initSnake(str),
//которая преобразует стиль написания составных слов строки из CamelCase в snake_case, 
//при котором несколько слов разделяются символом подчеркивания (_),
//причём каждое слово пишется с маленькой буквы.
'use strict';
let str = 'HelloDarknessMyOldFriend';
function initSnake(str) {
    let newStr = str[0].toLowerCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newStr += str[i];
        } else {
            newStr += '_' + str[i].toLowerCase();
        }
    } return newStr;
}
console.log(initSnake(str));

//Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
let str = 'hello world';
function repeatStr(str, n) {
    let newStr = str.repeat(n);
    return newStr;
}
console.log(repeatStr(str, 4));


//Напишите функцию path(pathname),
//которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
//var pathname = "/home/user/dir/file.txt";
var pathname = "/home/user/dir/file.txt";
function path(pathname){
    let name = pathname.split('/').pop();
    return name;
}
console.log(path(pathname));


//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr
//в указханную позицию pos строки str. 
//По умолчанию подстрока вставляется в начало строки.
'use strict';
let str = 'hello my new world';
function insert(str, substr, pos) {
    let newStr = str.split(' ');
    if (pos !== undefined) {
    newStr.splice(pos, 0, substr);
    } else if (pos == undefined) {
        newStr.unshift(substr);
    }
    newStr.join(' ');
    return newStr;
}
console.log(insert(str, 'love'));



//Напишите функцию limitStr(str, n, symb), которая обрезает строку,
//если она длиннее указанного количества символов n. 
//Усеченная строка должна заканчиваться троеточием «...»
//(если не задан параметр symb) или заданным символом symb.
'use strict';
let str = prompt('enter some string');
function limitStr(str, n, symb) {
    for (let i = 0; i < str.length; i++) {
        if (str.length <= n) {
            return str;
        } else if (str.length > n && symb !== undefined) {
            return str.slice(0, n) + symb;
        } else {
            return str.slice(0, n) + '...';
        }
    }
}
console.log(limitStr(str, 5, ' end'));

//Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
'use strict';
let str = 'hello darkness my old friend';
let n = 3;
function cutString(str, n) {
    let result =  [];
    for (let i = 0; i < str.length; i += n) {
        result.push(str.substr(i, n));
    } return result;
}
console.log(cutString(str, n));

//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
'use strict';
let stringsearch = "о", str = "Астрономия это наука о небесных объектах";
function count(str, stringsearch) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == stringsearch) {
            res.push(stringsearch);
        }
    } return res.length;
}
console.log(count(str, stringsearch));

//Напишите функцию cutTegs(str), которая возвращает строку str, очищенную от всех HTML-тегов.
'use strict';
let str = '<div>My name is Masha</div>';
function cutTegs(str) {
    let regex = /( |<([^>]+)>)/ig,
        result = str.replace(regex, '');
    return result;
}
console.log(cutTegs(str));

//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
//let str = " Max is a good boy ";
'use strict';
let str = " Max is a good boy        ";
function strip(str) {
    str.trim();
    return str;
}
console.log(strip(str));

//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
'use strict';
let str = 'hello my lovely world';
function cutString(str, n) {
    let newStr = str.split(' ').slice(0, n).join(' ');
    return newStr;
}
console.log(cutString(str, 3));

//Напишите функцию unique_letters(str), которая возвращает строку, 
//оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.
let str = 'jbfghhvmmjkdyu';
function unique_letters(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) == -1) {
            newStr += str[i];
        }
    } return newStr;
}
console.log(unique_letters(str));

//Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов, т.е. 
//каждое слово должно повторяться не более одного раза.
let str = 'enter please something please enter what you want what';
function removeDuplicate(str) {
    let newStr = str.split(' ');
    let strWithoutDuplicates = [];
    for (let i = 0; i < newStr.length; i++) {
        if (strWithoutDuplicates.indexOf(newStr[i]) == -1) {
        strWithoutDuplicates.push(newStr[i]);
        }
    } return strWithoutDuplicates.join(' ');
}
console.log(removeDuplicate(str));


//Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
let str = prompt('enter some string');
let word = prompt('enter substring');
function findWord(word, str) {
    newStr = str.split(' ');
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === word) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(findWord(word, str));

//Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки
//в указанной позиции. Если в верхнем регистре выводится – true, если в нижнем – false.
'use strict';
let str = 'jhb Lhg jhvhjkLLNgvgyf';
function isUpperCase(str, character) {
    if (character == character.toUpperCase()) {
        return true;
    } else if (character == character.toLowerCase()) {
        return false;
    }
}
console.log(isUpperCase(str, 'L'));

//Напишите функцию, которая принимает на вход строку, а возвращает эту строку «задом наперед»
'use strict';
let str = prompt('enter some string');
function viceVersa (str) {
    let newStr = str.split('').reverse().join('');
    return newStr;
}
console.log(viceVersa(str));
