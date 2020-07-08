/*Добавьте JavaScript к кнопке button, чтобы при нажатии элемент p скривался*/
/* let button = document.querySelector('button');
let text = document.querySelector('p');
button.onclick = function() {
    text.style.display = 'none';
} */



/*Создайте кнопку, которая будет скрывать себя по нажатию.*/
/* document.querySelector('button').onclick = function() {
    this.hidden = true;
} */



//Пусть мяч перемещается при клике на поле, туда, куда был клик
/* let field = document.querySelector('.field');
let ball = document.querySelector('.ball');

field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect(); //отримуємо місце розташування зеленого поля
    console.log(fieldCoords);

    let ballCoords = { //вичисляємо координати м'яча
        left: event.clientX - fieldCoords.left - ball.clientWidth / 2,
        top: event.clientY - fieldCoords.top - ball.clientHeight / 2
    }
    console.log(ballCoords);

    if (ballCoords.left < 0) { //перевіряємо чи м'яч не виходить за ліву межу поля
        ballCoords.left = 0;
    }

    if (ballCoords.top < 0) { //перевіряємо чи м'яч не виходить за верхню межу поля
        ballCoords.top = 0;
    }

    if (ballCoords.left + ball.clientWidth > field.clientWidth) { //перевіряємо чи м'яч не виходить за праву межу поля
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientWidth) { //перевіряємо чи м'яч не виходить за нижню межу поля
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
} */

//Закрити div за допомогою кнопки закриття(через HTML)
/* const animals = document.querySelectorAll('.animal');

function closeDiv() {
    for (let animal of animals) {
        animal.onclick = function(event) {
            if (event.target.tagName == 'SPAN') {
                animal.style.display = 'none';
            }
        }
    }
}
closeDiv(); */


//При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
/* const animals = document.querySelectorAll('.animal');

function closeDiv() {
    for (let animal of animals) {
        animal.insertAdjacentHTML("afterbegin", '<button class="remove-button">x</button>');
        animal.firstChild.style.fontSize = '20px';
        animal.firstChild.style.float = 'right';
        animal.firstChild.onclick = () => animal.remove();
    }
}
closeDiv(); */


//Створення каруселі із зображень
document.getElementById('slider-left').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
    let polosa = document.getElementById('polosa');
    left = left - 128;
    if (left < -640) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}