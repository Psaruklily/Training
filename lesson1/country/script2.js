//let currentCountry
/* function displayData(callback, callback1) {
    let response = getInfoAboutCountry();
    response.then(data => {
        //console.log(data);
        callback(data);
        callback1(data);
    })
}

function outputDataCOVID(data) {
    console.log(data);
    let paragraph = document.querySelectorAll('.commonInfoAboutCountry');
    paragraph[0].innerHTML = data.cases;
    paragraph[1].innerHTML = data.deaths;
    paragraph[2].innerHTML = data.recovered;
}

function insertFlagAndNameCountry(data) {
    let flag = document.querySelector('.flag');
    flag.src = data.countryInfo.flag;
    let nameOfCountry = document.querySelector('.name-of-country');
    nameOfCountry.textContent = data.country;
}

displayData(outputDataCOVID, insertFlagAndNameCountry); */

//------------------

function displayData() {
    let response = getInfoAboutCountry();
    response.then(data => {
        outputDataCOVID(data);
        insertFlagAndNameCountry(data);
    })
}

function outputDataCOVID(currentCountry) {
    let paragraph = document.querySelectorAll('.commonInfoAboutCountry');
    paragraph[0].innerHTML = currentCountry.cases;
    paragraph[1].innerHTML = currentCountry.deaths;
    paragraph[2].innerHTML = currentCountry.recovered;
}

function insertFlagAndNameCountry(currentCountry) {
    let flag = document.querySelector('.flag');
    flag.src = currentCountry.countryInfo.flag;
    let nameOfCountry = document.querySelector('.name-of-country');
    nameOfCountry.textContent = currentCountry.country;
}

displayData();