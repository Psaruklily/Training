const messageForm = document.querySelector('form');
const messageInput = document.querySelector('[name = "message"]');
const resetBtn = document.querySelector('.btn-dark');
const ul = document.querySelector('.list ul');
const updateBtn = document.querySelector('.update-btn');
const cleanUp = document.querySelector('.сlean-up');
// 1. Якщо у localStorage уже записані дані, тоді присвоїти цій змінній їх, якщо ні - пустий масив;
let itemsArray = localStorage.getItem('items') ?
    JSON.parse(localStorage.getItem('items')) : []

// 2. Занесла масив у localStorage
localStorage.setItem('items', JSON.stringify(itemsArray));

const liMaker = text => {
    let li = document.createElement('li');
    let mainDiv = document.createElement('div');
    let task = document.createElement('div');
    let divForButn = document.createElement('div');
    let divForChecbox = document.createElement('div'); //==
    let p = document.createElement('p');
    p.textContent = text;
    p.classList.add('task-text') //===
    mainDiv.classList.add('main-div-li')
    let checkbox = document.createElement('input') //==
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')

    task.classList.add('task') //===
    task.appendChild(checkbox)
    task.appendChild(p);
    mainDiv.appendChild(task);

    let updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update'
    updateBtn.classList.add('update');

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('delete');

    divForButn.appendChild(updateBtn)
    divForButn.appendChild(cancelBtn)

    mainDiv.appendChild(divForButn)

    li.appendChild(mainDiv)
    ul.appendChild(li);
    let hr = document.createElement('hr') ///==
    ul.appendChild(hr)

    if (itemsArray.length > 0) {
        resetBtn.classList.remove('hide');
    }

    let update = mainDiv.lastElementChild.firstElementChild;
    let cancel = mainDiv.lastElementChild.lastElementChild;

    mainDiv.addEventListener('click', function(event) {
        if (event.target === cancel) {
            itemsArray = itemsArray.filter(task => task !== text)
            localStorage.setItem('items', JSON.stringify(itemsArray));
            this.parentNode.parentNode.removeChild(this.parentNode);
            if (itemsArray.length === 0) {
                resetBtn.classList.add('hide');
            }
        } else if (event.target === update) {
            messageInput.value = text;
            let index = itemsArray.findIndex(el => el === messageInput.value);
            updateLocalStorage(index, p)
        }
    })
}

// 3. Коли користувач ввів новий item у input, перезаписати значення 'items' у localStorage
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (messageInput.value === '') return false;
    itemsArray.push(messageInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(messageInput.value);
    console.log('create item')
    messageInput.value = '';
})

// Одразу після завантаження сторінки виводжу items
itemsArray.forEach(item => {
    liMaker(item);
    console.log('output on page out')
});

resetBtn.addEventListener('click', function() {
    itemsArray = [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
        resetBtn.classList.add('hide');
    }
})

function updateLocalStorage(indexItem) {

    updateBtn.addEventListener('click', function() {
        itemsArray[indexItem] = messageInput.value;
        localStorage.setItem('items', JSON.stringify(itemsArray));

        ul.innerHTML = '';

        itemsArray.forEach(item => {
            liMaker(item);
        });
    })
}

cleanUp.addEventListener('click', () => {
    messageInput.value = null;
})