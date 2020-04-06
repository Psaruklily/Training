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

/*Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.*/
let vallue = prompt ('Введіть число', '');
if (vallue > 0) {
    alert (1);
} else if (vallue < 0) {
    alert (-1);
} else {
    alert (0);
}
