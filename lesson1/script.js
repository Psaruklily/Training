//Відправлення даних форми на сервер
/* let button = document.querySelector('.button');
button.onclick = requestPost;

function requestPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Lili',
                surname: 'Psaruk',
                city: 'Drohobych'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
}  */

// Відсилання GET запиту
/* function getRequest(url) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getData(this.responseText);
        }
    }

    xhr.open('GET', url);
    xhr.send();

    function getData(data) {
        console.log(data);
    }
}
const firstRequest = getRequest('https://learn.javascript.ru/xmlhttprequest');
console.log(firstRequest); */


//Відсилання форми на сервер
/* let formPerson = new FormData(document.querySelector('.person'));
formPerson.append('fatherName', 'Andriivna');

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
xhr.send(formPerson);
xhr.onload = () => alert(xhr.response); */


//Надсилання запиту на сервер, отримання даних і виведення картинок на сторінку
/* function outputImages() {
    $.ajax('https://repetitora.net/api/JS/Images?page=1&count=4 ', {
        success: function(data) {
            data.forEach(element => {
                let image = document.createElement('img');
                image.src = element.original;
                document.body.appendChild(image);
            });
        }
    });
}
outputImages(); */


//Динамічно підгружати картинки із сервера по кліку
/* let button = document.querySelector('.myButton');
let input = document.querySelector('.inputNumber');
let output = document.querySelector('.output');

button.addEventListener('click', changeImages);

function changeImages() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${input.value}&count=1`, {
        success: function(data) {
            data.forEach(element => {
                let image = document.createElement('img');
                image.src = element.original;
                document.body.appendChild(image);
            });
        }
    });
} */


//Devide the code into several functions
/* let button = document.querySelector('.myButton');
let pageNumber = document.querySelector('.inputNumber');
let output = document.querySelector('.output');

button.addEventListener('click', () => {
    getImages(pageNumber.value, onDataRecieved);
});

function onDataRecieved(data) {
    data.forEach(element => {
        let image = document.createElement('img');
        image.src = element.original;
        document.body.appendChild(image);
    });
} */



//Same code with usage promise instead callback
/* let button = document.querySelector('.myButton');
let pageNumber = document.querySelector('.inputNumber');
let output = document.querySelector('.output');

button.addEventListener('click', () => {
    let promise = getImages(pageNumber.value);
    promise.then(onDataRecieved);
});

function onDataRecieved(data) {
    data.forEach(element => {
        let image = document.createElement('img');
        image.src = element.original;
        document.body.appendChild(image);
    });
} */


//Compare fetch and axios
//1. Axios автоматично перетворює у JSON дані

/* const url = 'https://jsonplaceholder.typicode.com/users'; */
/* axios.get(url)
    .then(data => console.log(data.data)) */


/* fetch(url)
    .then(response => response.json())
    .then(data => console.log(data)); */


//2. Різна поведінка при викидання помилки

/* const url = 'https://jsonplaceholder.typicode.com/users/wrong'; // допустимо помилку в адресі
fetch(url)
    .catch(error => console.log('BAD', error))
    .then(response => console.log('GOOD', response));//Помилка не обробляється у блоку catch
 */

/* const url = 'https://jsonplaceholder.typicode.com/users/wrong';
axios.get(url)
    .catch(error => console.log('BAD', error))
    .then(response => console.log('GOOD', response)); */