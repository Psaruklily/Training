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
let formPerson = new FormData(document.querySelector('.person'));
formPerson.append('fatherName', 'Andriivna');

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
xhr.send(formPerson);
xhr.onload = () => alert(xhr.response);