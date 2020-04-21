/*let p = document.createElement ('p');
document.body.insertBefore (p, document.querySelector ('#out'));
p.innerHTML = 'I am Lili';
p.classList.add ('main');
console.log (p);*/

let div4 = document.getElementById ('four4');
console.log (div4); //Отримали div у консолі;

div4 = document.getElementById ('four4');
let p = div4.getElementsByTagName ('p');
console.log (p); // Звернулися до p у div4;