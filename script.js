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

//Деструктуризація масиву
/*let a = [9, 2, 4, 8, 33, 'hello'];
let [b, c] = a;
console.log(b, c);*/

// Міняємо колір параграфів (працюємо як із масивом)
/*let p = document.getElementsByTagName ('p');
console.log(p);
//p [2].style.color = 'red';
for (i=0; i < p.length; i++) {
    p [i].style.color = 'yellow';
}*/

//Створення події
/*let p = document.getElementsByClassName ('event');
console.log(p);
for (j = 0; j < p.length; j++){
    p[j].onclick = function() {
        alert ('Work!');
    }
}*/

//Визначення середньої температури
/*let tempC = [-4, -3, -1, 2, 2, 3, 4, 5, 6, 6, 4, 2];
let Csum = 0; // Середня температура
for (i = 0; i < tempC.length; i++) {
    Csum += tempC[i];
}
let CA = Csum / tempC.length;// середнє арифметичне
console.log(CA);
console.log( Math.min.apply(null, tempC));//min temp.
console.log( Math.max.apply(null, tempC));//max temp.*/

/*let user = {
    name: "Lili",
    age: 30
};
console.log (user.name);
console.log (user.age);
user.isAdmin = true;// Додавання властивості
console.log (user.isAdmin);
delete user.name;
console.log (user);*/

/*let name = prompt ("Введіть ім'я", 'Lili');
let age = prompt ("Введіть вік", 18);
function makeUser (name, age) {
    return {
        name: name,
        age: age
    };
}
let user = makeUser(name, age);
alert (user.name);
alert (user.age);*/

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
console.log (user);
delete user.name;
console.log (user);*/

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
/*function isEmpty (schedule) {
    for (let key in schedule) {
        return false;
    }
    return true
}
let schedule = {};
//alert( isEmpty(schedule) );
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );*/

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);*/

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
/*function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu)
  console.log (menu);*/

//Array method "every" 
/*let arr = [3, 4, 5, -9];
 let a = arr.every (function (b) {
  //console.log (b);
    return b < 5;
});
console.log (a);*/

// Array method reduce / reduceRight
/*let arr = [20, 4, 5, 9];
let a = arr.reduce (function (accum, currentValue) {
    //console.log ('accum: ' + accum);
   // console.log ('currentValue: ' + currentValue);
    return accum + currentValue;
});
console.log (a);*/

//Creating calculator
/*function pluss() {
      let num1, num2, result;
      num1 = document.getElementById ('number1').value;
      num1 =parseInt(num1);
      num2 = document.getElementById ('number2').value;
      num2 =parseInt(num2);
      result = num1 + num2;
      document.getElementById('out').innerHTML = result;
  }*/
//Method this
/* function hello() {
     console.log ('Hello', this);
 }

 const person = {
     name: "Lili",
     age: 23,
     sayHello: hello,
     sayHelloWindow: hello.bind(window),
     logInfo: function () {
         console.group (`${this.name} info:`)
         console.log (`Name is ${this.name}`);
         console.log (`Age is ${this.age}`);
         console.groupEnd();
     }
 }

 const anotherPerson = {
     name: "Nastya",
     age: 9
 }*/
//Потрібно вивести anotherPerson через функцію, яка є у об'єкта person*/
//person.logInfo.bind(anotherPerson)();

//Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати, то программа должна выводить слово FizzBuzz. 
/*for (i=1; i<=100; i++) {
    
    if (i % 15 == 0) {
        console.log ('FizzBazz');
    } if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Bazz');
    } else {
        console.log (i);
    }
}*/

// Введіть суму двох чисел і виведіть їх суму
/*let num1 = +prompt ('Введіть перше число');
let num2 = +prompt ('Введіть друге число');
let sum = num1 + num2;
alert (sum);*/

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
/*function readNumber () {
    let num;
    do {
        num = +prompt ('Введіть число', '');
        if (isFinite(num)) {
            alert (num);
        } else if (num === null || num === '') break;
    } while (!isFinite(num));
    }
readNumber();*/

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.
/* function Calculator () {
    this.read = function () {
        this.a = +prompt ('Введіть перше число', '');
        this.b = +prompt ('Введіть друге число', '');
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}
let calculator = new Calculator();
calculator.read();
console.log (calculator.sum());
console.log (calculator.mul()); */

//Напишите функцию-конструктор Accumulator(startingValue).
//Объект, который она создаёт, должен уметь следующее:
//Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//Метод read() использует prompt для получения числа и прибавляет его к свойству value.
//Свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
/* function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt ('Введіть перше число', '');
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log (accumulator.value); */




//Виведення на сторінку двовимірного масиву                              lesson 1
/*let ourFamily = [
    ['Psaruk', 'Lilya', 'Andriivna'],
    ['Psaruk', 'Oleksii', 'Andriovuch'],
    ['Psaruk', 'Anastasiya', 'Andriivna']
];

let out = '';
for (let i = 0; i < ourFamily.length; i++) {
    for (let k = 0; k < ourFamily[i].length; k++) {
        out += ourFamily[i][k] + ' ';
    }
    out += '<br>';
}
document.getElementById('out').innerHTML = out;*/




//Функція повинна повертати слово без кожної другої букви
// function skipLetter(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i = i + 2) {
//         result = result + str[i];
//     }
//     return result;
// }
// console.log(skipLetter('Lilya'));

// function skipLetter(str) {
//     let i = 0;
//     let out = '';
//     while (i < str.length) {
//         out += str[i];
//         i = i + 2;
//     }
//     return out;
// }
// console.log(skipLetter('Lilya'));
// console.log(skipLetter('Konkatunacia'));




//Замінити у слові літери на цифри і підрахувати їх суму

function numberInsteadLetter(str) {
    let array = str.split('');
    //console.log(array);
    let out = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] !== 'a' && array[i] !== 'e' && array[i] !== 'i' && array[i] !== 'o' && array[i] !== 'u' && array[i] !== 'y') &&
            (array[i] !== 'A' && array[i] !== 'E' && array[i] !== 'I' && array[i] !== 'O' && array[i] !== 'U' && array[i] !== 'Y')) {
            out.push(1);
        } else {
            out.push(0);
        }
    }
    let result = out.reduce((sum, current) => sum + current, 0);
    console.log(result);
    let string = out.join('');
    return string;
}
console.log(numberInsteadLetter('Anastasiya'));