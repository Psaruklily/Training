let number = document.querySelector('.output');
//console.log(number)
let button = document.querySelector('.btn');
button.onclick = () => {
    localStorage.setItem('number', number.value);
}

//=---------------------------------------------------------------Change the bg of btn after ckick(event.rarget)
let tr = document.querySelector('.with-button');
console.log(tr)

let activeBtn = document.querySelector('.one-btn');
console.log(activeBtn)

tr.onclick = (event) => {
    let placeOfClick = event.target;
    //console.log('click on ' + placeOfClick.tagName)
    if (placeOfClick.tagName != 'BUTTON') return; // не на кнопці? Тоді не цікавить
    colorRed(placeOfClick);
}

function colorRed(button) {
    if (activeBtn) {
        activeBtn.classList.remove('one-btn');
    }
    activeBtn = button;
    activeBtn.classList.add('one-btn');
}