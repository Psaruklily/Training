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

let name = prompt ('Введіть login', '');
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
}









