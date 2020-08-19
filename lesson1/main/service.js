async function getInfoAboutCOVID() {
    let promise = await fetch('https://disease.sh/v3/covid-19/all', {
        method: 'GET'
    });
    let response = await promise.json();
    return response;
}



async function getInfoAboutCountries() {
    let promise = await fetch('https://disease.sh/v3/covid-19/countries', {
        method: 'GET'
    });
    let response = await promise.json();
    console.log(response);
    return response;
}