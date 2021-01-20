/* let container = document.querySelector('#div');
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    let result = await response.json();
    console.log(result);
    let image = document.createElement('img');
    image.src = result['url'];
    container.appendChild(image);
}

getRandomImage(); */

/* for (let i = 0; i < 40; i++) {
    getRandomImage();
}*/


//--------------------------------------------------------------------------------------------------------------------
//Та ж сама функція з використанням замикання
/* function getRandomImage() {
    let container = document.querySelector('#div');
    return async function() {
        let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
        let result = await response.json();
        console.log(result);
        let image = document.createElement('img');
        image.src = result['url'];
        container.appendChild(image);
    }
}

const randomImage = getRandomImage();

for (let i = 0; i < 40; i++) {
    randomImage();
} */

//--------------------------------------------------------------------

/* let container = document.querySelector('#div');
let result;
let arrayUrl = [];
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM')
        .then(function(response) {
            result = response.json();
            //console.log(result);
            return result;
        })
        .then(function(result) {
            let image = document.createElement('img');
            image.src = result['url'];
            // console.log(result['url']);
            container.appendChild(image);
            return result['url'];
        })
        .then(function(result) {
            //console.log(result);
            if (!result.includes('mp4')) {
                arrayUrl.push(result);
                //console.log(arrayUrl);
                console.log(result + '   no mp4');
            }

        })
}

for (let i = 0; i < 10; i++) {
    getRandomImage();
} */


/* function url(string) {
    if (string.includes('mp4')) {
        return 'true';
    } else {
        return 'false';
    }
} */
//console.log(url('https://random.dog/fa68ed75-f7e0-44eb-a39b-408b984d2f90.jpg'));

//-----------------------------------------------------------------------------------------

/* function getRandomImage() {
    let container = document.querySelector('#div');
    return async function() {
        let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
        let result = await response.json();
        console.log(result);
        return result;
    }
}
const randomImage = getRandomImage()();


function auditUrl(fn) {
    //console.log(`this is a string ${string}`);
    if (string.includes('mp4')) {
        return 'true';
    } else {
        return 'false';
    }
}
//auditUrl();
auditUrl(getRandomImage); */

//----------------------------------------------------------------------------

/* let container = document.querySelector('#div');
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    let result = await response.json();
    let urlImage = result['url'];
    console.log(urlImage);
    return Promise.resolve(urlImage);
}
 */
//getRandomImage();


/* function url() {
    const stringUrl = getRandomImage();
    console.log(getRandomImage);
    //console.log(typeof stringUrl);
    //console.log(stringUrl);
    if (stringUrl.indexOf('jpg') > -1) {

        return 'true';
    } else {
        return 'false';
    }
} */


/* async function url() {
    await getRandomImage()
        .then(stringUrl => {
            return stringUrl;
        })
}

function url2() {
    const stringUrl = url();
    console.log(typeof stringUrl);
    console.log(stringUrl);
    if (stringUrl.indexOf('jpg') > -1) {

        return 'true';
    } else {
        return 'false';
    }
}
const auditUrl = url2()
console.log(auditUrl); */



/////////////////////////Callback

/* const getUrl = function(url, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    };
    request.open('GET', url);
    request.send();
}

function mycallback(data) {
    console.log(data);
    newData = JSON.parse(data);
    console.log(newData['url']);
    return newData['url'];
}

getUrl('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM', mycallback); */





// PROMISE
/* 
async function getRandomUrl() {
    const url = 'https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM';
    let promise = await fetch(url);
    let urlImage = await promise.json();
    //console.log(stringUrl);
    console.log(urlImage['url']);
    return urlImage['url'];
}

getRandomUrl()
    .then(string => {
        if (!string.includes('jpg')) {
            getRandomUrl();
        }
        return string;
    }) */


//-------------------------------------------------------------------------
//      FINISHED!!!!!
// container = document.querySelector('#div');
// async function getRandomUrl(callback) {
//     const url = 'https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM';
//     let promise = await fetch(url);
//     let urlImage = await promise.json();
//     let stringUrl = urlImage['url'];
//     let image = document.createElement('img');
//     image.src = stringUrl;
//     container.appendChild(image);
//     callback(stringUrl, image);
// }

// function auditUrl(stringUrl, image) {
//     console.log(stringUrl);
//     if (stringUrl.includes('jpg')) {
//         image.style.display = 'block';
//     } else {
//         image.style.display = 'none';
//         getRandomUrl(auditUrl);

//     }
// }

// for (let i = 0; i < 40; i++) {
//     getRandomUrl(auditUrl);
// }

//====================================================================================  ПІДГРУЗКА КАРТИНОК ПРИ СКРОЛІ start

// let container = document.querySelector('.container');

// fetch('https://randomuser.me/api/?inc=gender,name,picture,location&results=5')
//     .then(response => response.json())
//     .then(result => {
//         return result.results;
//     })
//     .then(arrUsers => {

//         for (let user of arrUsers) {
//             let image = document.createElement('img');
//             image.src = '';
//             image.dataset.url = user.picture.large;
//             container.appendChild(image) // Резервую місце для кожної каритнки
//         }

//         let images = document.querySelectorAll('.container>*');

//         let options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1
//         }

//         function handlerImg(myImg, observer) {
//             console.log('Data: ', myImg) //Отримуємо масив об'єктів (спостережувальні картинки із їх властивостями, де зазначено певні зміни)
//             myImg.forEach(currentImg => {
//                 console.log(currentImg.intersectionRatio);
//                 if (currentImg.intersectionRatio > 0) {
//                     loadImage(currentImg.target)
//                 }
//             })
//         }

//         function loadImage(image) {
//             image.src = image.dataset.url;
//         }

//         let observer = new IntersectionObserver(handlerImg, options);

//         images.forEach(image => {
//             observer.observe(image);
//         })
//     })

//====================================================================================  ПІДГРУЗКА КАРТИНОК ПРИ СКРОЛІ end

//===================================================================================ПАГІНАЦІЯ ПРИ СКРОЛІ СТОРІНКИ start

// 1. Отримати дані від backendy
// 2. Запушити отримані дані у новий пустий масив
// 3. Вивести дані першої сторінки одразу після завантаження сайту
// 4. Коли я доскролюю до останнього елементу масиву, робити новий запит 

let isRequest = false;
let containerForImage = document.querySelector('.container-for-image');
let indexPage = 0;

async function getData() {
    isRequest = true;
    let promise = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${indexPage}&size=10`);
    let result = await promise.json();

    indexPage++;
    isRequest = false;
    return result;
}

async function outputData() {
    let data = await getData()
    let array = data.data;
    console.log(array)

    for (let item of array) {
        let image = document.createElement('img');
        image.src = item.airline.logo;
        image.classList.add('for-image');
        containerForImage.appendChild(image);
    }
}

outputData()

window.addEventListener('scroll', function() {
    let window_height = window.innerHeight;
    let contentHeight = containerForImage.offsetHeight;
    let yOffset = window.pageYOffset;
    // console.log('window_height', window_height);
    // console.log('contentHeight', contentHeight);
    // console.log('yOffset', yOffset);
    // console.log('=============================')

    if (yOffset + window_height + 100 >= contentHeight && !isRequest) {
        console.log('end')
        outputData()
    }
})

//===================================================================================ПАГІНАЦІЯ ПРИ СКРОЛІ СТОРІНКИ end