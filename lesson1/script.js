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




//Create todoList
/* let getTasksButton = document.querySelector('.get-task'); */


//createTask('learn CSS');

//deleteTask('889f485b-e228-47fd-bb3c-e09ba3d07d61');

//updateTask('527b8f67-79ce-432c-b4a8-e27999ddc0e7', 'Git')

/* getTasksButton.addEventListener('click', () => {
    let promise = getTasks();
    promise.then(onTasksRecieved);
});

function onTasksRecieved(tasks) {
    const result = document.querySelector('#task-result');
    result.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        li.dataset.id = task.id;
        result.appendChild(li);
    });
} */

//LESSON 2---------------------------------------------------------------------------------------------------------
//Створення назви нової книги на сервері (axios)                          POST
/* let button = document.querySelector('.button');
let bookName = document.querySelector('.book-name');
const output = document.querySelector('.output');
button.onclick = () => {
    let createBook = axios({
        method: 'post',
        url: 'http://fakerestapi.azurewebsites.net/api/Books',
        data: {
            book: bookName.value
        }
    });
    createBook.then(response => {
            console.log(response.data);
            return response.data;
        })
        .then(data => output.innerHTML = data.PublishDate)
} */




//---------------------- спрощення 'Створення назви нової книги на сервері (axios)'
/* let button = document.querySelector('.button');
let bookName = document.querySelector('.book-name');
const output = document.querySelector('.output');

button.addEventListener('click', () => {
    const promise = createBook(bookName.value);
    promise.then(outputTime);
});

function outputTime(data) {
    output.innerHTML = data.PublishDate;
} */



//Створення назви нової книги на сервері (fetch)                       
let bookName = document.querySelector('.book-name');
let button = document.querySelector('.button');

async function postData(data = {}) {
    const response = await fetch('http://fakerestapi.azurewebsites.net/api/Books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //Тип даних тіла повинен відповідати заголовку "Тип вмісту"
    });
    return await response.json();
}

button.onclick = function() {
    postData({ book: bookName.value })
        .then((data) => {
            console.log(data);
        });
}




//Внесення даних у таблицю, отриманих із сервера
//--------------------------------------------------------------------------GET
const table = document.querySelector('#books');

function createTable() {
    let promise = getBook();
    promise.then(data => {
            let partOfArray = data.splice(0, 4);
            return partOfArray;
        })
        .then(books => {
            for (let book of books) {
                let tr = document.createElement('tr');
                table.appendChild(tr);


                createCell(book.ID, tr);
                createCell(book.Title, tr);
                createCell(new Date(book.PublishDate).toISOString().replace(/T/, ' ').replace(/\..+/, ''), tr);
                /* 
                                td = document.createElement('td');
                                td.innerHTML = book.ID;
                                tr.appendChild(td);

                                td = document.createElement('td');
                                td.innerHTML = book.Title;
                                tr.appendChild(td);

                                td = document.createElement('td');
                                td.innerHTML = book.PublishDate;
                                tr.appendChild(td);
                            } */
            };
        })
}

function createCell(text, tr) {
    let td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}

createTable();