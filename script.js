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
let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);









