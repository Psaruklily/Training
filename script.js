const messageForm = document.querySelector('form');
const messageInput = document.querySelector('[name = "message"]');
const resetBtn = document.querySelector('.btn-dark');
const ul = document.querySelector('.list ul');
// 1. Якщо у localStorage уже записані дані, тоді присвоїти цій змінній їх, якщо ні - пустий масив;
let itemsArray = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) : []

// 2. Занесла масив у localStorage
localStorage.setItem('items', JSON.stringify(itemsArray));



const liMaker = text => {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    if (itemsArray.length > 0) {
        resetBtn.classList.remove('hide');
    }
}

// 3. Коли користувач ввів новий item у input, перезаписати значення 'items' у localStorage
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (messageInput.value === '') return false;
    itemsArray.push(messageInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(messageInput.value);
    messageInput.value = '';
})

// Oтримую масив для робити з ним у JS
const data = JSON.parse(localStorage.getItem('items'));




// Одразу після завантаження сторінки виводжу items
data.forEach(item => {
    liMaker(item);
});

resetBtn.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
        resetBtn.classList.add('hide');
    }
})













//===================


// function setItemLocalStorage() {
//     messageForm.addEventListener('submit', event => {
//         event.preventDefault();
//         //let message = messageInput.value;
//         arr.push('learn HTML')
//         localStorage.setItem('todoList', JSON.stringify(arr))

//     })
// }

// setItemLocalStorage()



//==================================

// function setItemLocalStorage() {
//     messageForm.addEventListener('submit', event => {
//         event.preventDefault();
//         let message = messageInput.value;
//         let arr = JSON.parse(localStorage.getItem('todoList'));
//         if (message === '') {
//             return false;
//         }
//         arr.push(message);
//         localStorage.setItem('todoList', JSON.stringify(arr));

//         console.log(arr)
//         message = '';

//     })
// }

// setItemLocalStorage()

// const liMaker = text => {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li)
// }