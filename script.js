/*let p = document.createElement ('p');
document.body.insertBefore (p, document.querySelector ('#out'));
p.innerHTML = 'I am Lili';
p.classList.add ('main');
console.log (p);*/

/*let div4 = document.getElementById ('four4');
console.log (div4); //Отримали div у консолі;

div4 = document.getElementById ('four4');
let p = div4.getElementsByTagName ('p');
console.log (p); // Звернулися до p у div4;*/


/*let div = document.querySelector('div');                                                             //Lesson 3
let child = div.childNodes;  
console.log (child);  //Повертає вузли, пробіли і переноси;
console.log (div.firstChild);
console.log (div.lastChild);


let hyper = document.querySelector('a');
console.log (hyper.parentElement); //Шукаємо батька a;

console.log (hyper.parentElement.nextElementSibling); //Переходимо до наступного div;

console.log (hyper.parentElement.previousElementSibling);*/ // Переходимо до попереднього div;    



/*let paragr = document.querySelector ('.paragraph');                                                  //Lesson 4
console.log (paragr);
paragr.style.width = '250px';
paragr.style.paddingBottom = '40px';
console.log (paragr.style);

paragr.classList.add('two', 'three');// Додавання декількож класів до вузла;
paragr.classList.remove('three');// Видалення класу;

let toggle = document.querySelector('.toggle');
console.log (toggle);
toggle.onclick = function() {
    this.classList.toggle('three');
}

//aтрибути data
console.log(paragr.getAttribute('data'));
console.log (document.querySelector('link').getAttribute('href'));

//Вартість бензину;
let gass = document.querySelectorAll('.gass');
console.log (gass);
for (i = 0; i < gass.length; i++) {
    gass[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log (gallons * amount);
    }
}

//Створення елементу у JS;
let myDiv = document.createElement ('div');
myDiv.innerHTML = 'Hello world!';
myDiv.classList.add('two');

document.querySelector('.test').appendChild('myDiv');
console.log (myDiv);*/


//Сделайте все внешние ссылки оранжевыми, изменяя их свойство style                            Lesson 5
//Ссылка является внешней, если:
//Её href содержит ://
//Но не начинается с http://internal.com.
/*let links = document.querySelectorAll('a');
for (let link of links) {
    let href = link.getAttribute('href');
    if (!href) continue;
    if (!href.includes('://')) continue;
    if (href.startsWith('http://internal.com')) continue;
    link.style.color = 'orange';
}*/


//Навігація по елементах
 /*let a = document.body.firstElementChild;
 console.log (a);
console.log (a.nextElementSibling);
let b = document.querySelector('ul').lastElementChild;
console.log (b);*/


let tableAge = document.querySelector('#age-table');
console.log (tableAge);
let tdAge = document.getElementById('age-list');
console.log (tdAge);
console.log (document.querySelector('td'));
let form = document.getElementsByName('search')[0];
console.log (form);
console.log (document.getElementsByTagName('input')[0]);
let input = form.querySelectorAll('input');
console.log (input);
console.log (input[input.length-1]);













