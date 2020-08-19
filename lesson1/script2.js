function displayData(response) {
    //let response = getInfoAboutCountry();
    response.then(data => {
        console.log(data);
        outputDataCOVID(data)
    })
}

//country(outputDataCOVID);


function outputDataCOVID(data) {
    let paragraph = document.querySelectorAll('p');
    paragraph[0].innerHTML = data.cases;
    paragraph[1].innerHTML = data.deaths;
    paragraph[2].innerHTML = data.recovered;
}

//---------------------------------------------------------------