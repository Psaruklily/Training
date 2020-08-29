function displayData(callback) {
    let response = getInfoAboutCountry();
    response.then(data => {
        //console.log(data);
        callback(data);
    })
}

function outputDataCOVID(data) {
    console.log(data);
    let paragraph = document.querySelectorAll('.commonInfoAboutCountry');
    paragraph[0].innerHTML = data.cases;
    paragraph[1].innerHTML = data.deaths;
    paragraph[2].innerHTML = data.recovered;
}

function insertFlag_NameCountry(data) {
    let flag = document.querySelector('.flag');
    flag.src = data.countryInfo.flag;
    let nameOfCountry = document.querySelector('.name-of-country');
    nameOfCountry.textContent = data.country;
}

displayData(outputDataCOVID);
displayData(insertFlag_NameCountry);