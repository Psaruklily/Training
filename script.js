let table = document.querySelector('table').lastElementChild;
console.log(table)

let navigation = document.querySelector('.navigation');
let prev = navigation.querySelector('.prev');
let next = navigation.querySelector('.next');
let btnNum = navigation.querySelector('ul');

let currentPage = 0;

async function getData() {
    let promise = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`);
    let result = await promise.json();
    return result;
}

buttons()

//Заповнюю комірки даними
async function outputData() {
    let array = await getData();
    let arrWithCompan = array.data;
    console.log(arrWithCompan);
    table.innerHTML = '';
    for (let item of arrWithCompan) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        fillTd(item.name, tr);
        fillTd(item.trips, tr);
        fillTd(item._id, tr);
    }
}

outputData()

//Виводжу кнопки навігації
async function buttons() {
    let data = await getData();
    let pages = data.totalPages;
    for (let i = 1; i < pages; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        if (i == 1) {
            li.classList.add('activeCl');
        }
        btnNum.appendChild(li);
    }
}

function fillTd(text, tr) {
    let td = document.createElement('td');
    td.innerText = text;
    tr.appendChild(td);
}

//функція слухач подій
function listener() {
    btnNum.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target)
        currentPage = target.innerHTML - 1;
        outputData();
        let active = document.querySelector(".activeCl");
        if (active !== null) {
            active.classList.remove('activeCl');
        }
        target.classList.add('activeCl');

        if (target.innerHTML == '1') {
            prev.style.visibility = 'hidden';
        } else {
            prev.style.visibility = 'visible';
        }

        if (target.innerHTML == '408') {
            next.style.visibility = 'hidden';
        } else {
            next.style.visibility = 'visible';
        }
    })

    prev.addEventListener('click', function() {
        currentPage = currentPage - 1;
        outputData();
    })

    next.addEventListener('click', function() {
        currentPage = currentPage + 1;
        outputData();
        let active = document.querySelector(".activeCl");
        console.log('active', active)

        // console.log('dont', dontActive)
        if (active !== null) {
            active.classList.remove('activeCl');

        }
        active.nextSibling.classList.add('active')
    })
}

listener()