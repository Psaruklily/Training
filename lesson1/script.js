let button = document.querySelector('.button');
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
}