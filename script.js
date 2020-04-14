//alert ('Я javaScript');

/*let name = 'Lilya';
let admin = name;
alert (admin);*/

/*let userName = prompt ('What is your name?');
alert (`Your name is ${userName}`);*/

/*4. Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let officialName = prompt ('What is the official name JavaScript?', '');
if (officialName == 'ECMAScript') {
    alert ('True');
} else {
    alert ('You do not know? “ECMAScript”!');
}*/

/*5. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
let vallue = prompt ('Введіть число', '');
if (vallue > 0) {
    alert (1);
} else if (vallue < 0) {
    alert (-1);
} else {
    alert (0);
}*/

//*6. Перепишите if с использованием условного оператора '?'
/*let result;
let a = parseInt(prompt ('Ведіть а', ''), 10);
let b = parseInt(prompt ('Введіть b', ''), 10);
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
alert (result);*/

//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
/*let age;
let x = parseInt(prompt ('Ведіть вік', ''), 10);
if (x >= 14 && x <= 90) {
    age = 'True';
} else {
    age = 'False';
}
alert (age);*/

//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
/*let age;
let x = parseInt(prompt ('Ведіть вік', ''), 10);
if (x < 14 || x > 90) {
    age = 'Правильно, вказаний вік перебуває поза межами проміжку 14 - 90.';
} else {
    age = 'Неправильно, віказаний вік перебуває в проміжку 14 - 90.';
}
alert (age);*/

/*let age;
age = 18;
if (!(age >= 14 && age <= 90)) {
    age = 'True';
} else {
    age = 'False';
}
alert (age);*/

/*let name = prompt ('Введіть login', '');
if (name == 'Адмін') {
    let password = prompt ('Введіть пароль', '');
    if (password == 'Я_головний') {
    alert ('Добрий день!');
} else if (password == '' || password == null) {
    alert ('Відміна');
} else {
    alert ('Пароль невірний');
}
} else if (name == '' || name == null) {
    alert ('Відміна');
} else {
    alert ('Я вас не знаю');
}*/

//При помощи цикла for выведите чётные числа от 2 до 10.
/*for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    alert (i);
}*/

/*let i = 0;
while (i < 3) {
    alert (`number ${i}!`);
    i++;
}*/

//Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
/*let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);*/

/*switch (browser) {
    case 'Edge':
        alert ("You've got the Edge");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert ('Okay, we support these browsers too!');
        break;
    default :
    alert ('We hope that this page looks ok!');
    break;
}
if (browser =='Edge') {
    alert ("You've got the Edge");
} else if (browser == 'Chrom'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    alert ('Okey, we support these browsers too');
} else {
    alert ('We hope that this page looks ok!')
}*/

/*let styles = ['Джаз', 'Блюз',];
styles.push ('Рок-н-ролл');
//alert (styles);
styles [1] = 'Класика';
//alert (styles);
//alert (styles.shift());
//alert (styles);
styles.unshift ('Реп', 'Реггі');
alert (styles);*/

/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.*/
/*function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt ('Введіть число', 0);
        //Зупиняємо код якщо
        if(value === "" || null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert (sumInput());*/

//Виведення масиву на сторінку браузера
/*let arr = ['HTML', 'CSS', 'JavaScript'];
let out = document.getElementById('out');
let str = ' ';
for (let i = 0; i < arr.length; i++) {
    str += arr[i] + '<br>';
}
out.innerHTML = str;
console.log(out.innerHTML);*/

//Метод роботи із string - "Split"
/*let b = "Hello, my, mame, is, Lili";
let d = b.split (','); // metod "trim" - дозволяє позбавитися від пробілів у масиві
console.log(d);*/

//Метод join (перетворює масив у рядок)
/*let b = ["Hello", "my", "mame", "is", "Lili"];
let a = b.join('-');
console.log(a);
console.log(typeof a);*/

//Metod "Slice" - створює новий масив і переносить туди скопійовані певні елементи із основного масиву.
/*let arr_1 = ["Hello", "my", "mame", "is", "Lili"];
let arr_2 = arr_1.slice(1,3);
console.log(arr_2);*/

let a = [9, 2, 4, 8, 33, 'hello'];
let [b, c] = a;
console.log(b, c);













