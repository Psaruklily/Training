const messageForm = document.querySelector('form');
const messageInput = document.querySelector('[name = "message"]');
const resetBtn = document.querySelector('.btn-dark');
const ul = document.querySelector('.list ul');
// 1. Якщо у localStorage уже записані дані, тоді присвоїти цій змінній їх, якщо ні - пустий масив;
let itemsArray = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) : []

// 2. Занесла масив у localStorage
localStorage.setItem('items', JSON.stringify(itemsArray));

// Oтримую масив для робити з ним у JS
const data = JSON.parse(localStorage.getItem('items'));
//console.log(data);


const liMaker = text => {
    let li = document.createElement('li');
    let mainDiv = document.createElement('div');
    let task = document.createElement('div');
    let divForButn = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = text;
    task.appendChild(p);
    mainDiv.appendChild(task);
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('delete');

    let updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update'
    updateBtn.classList.add('update');

    divForButn.appendChild(cancelBtn)
    divForButn.appendChild(updateBtn)
    mainDiv.appendChild(divForButn)

    li.appendChild(mainDiv)
    ul.appendChild(li);

    if (itemsArray.length > 0) {
        resetBtn.classList.remove('hide');
    }
    console.log(mainDiv)

    let cancel = mainDiv.lastElementChild.firstElementChild;
    let update = mainDiv.lastElementChild.lastElementChild;

    mainDiv.addEventListener('click', function(event) {
        if (event.target === cancel) {
            console.log(text)
            console.log(itemsArray)
            itemsArray = itemsArray.filter(task => task !== text)
            console.log('clicked', itemsArray)
            localStorage.setItem('items', JSON.stringify(itemsArray));
            this.parentNode.parentNode.removeChild(this.parentNode);
            if (itemsArray.length === 0) {
                resetBtn.classList.add('hide');
            }
        } else if (event.target === update) {
            console.log('update')
        }
        //console.log(this)
        // console.log(text)
        // console.log(itemsArray)
        // itemsArray = itemsArray.filter(task => task !== text)
        // console.log('clicked', itemsArray)
        // localStorage.setItem('items', JSON.stringify(itemsArray));
        // this.parentNode.parentNode.removeChild(this.parentNode);
        // if (itemsArray.length === 0) {
        //     resetBtn.classList.add('hide');
        // }
    })
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




// Одразу після завантаження сторінки виводжу items
data.forEach(item => {
    liMaker(item);

});

resetBtn.addEventListener('click', function() {
    itemsArray = [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
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