const messageForm = document.querySelector('form');
const messageInput = document.querySelector('[name = "message"]');
const formFeedback = document.querySelector('#feedback');
const saveButton = document.querySelector('[type="submit"]');
//let arr = [];


messageForm.addEventListener('submit', event => {
    event.preventDefault();
    let message = messageInput.value;


    let arr = JSON.parse(localStorage.getItem('myMessage'))






    arr.push(message);
    localStorage.setItem('myMessage', JSON.stringify(arr));

    formFeedback.textContent = 'Saved!';


})