function getUrlParams(callback) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('id');
    console.log(myParams);
    callback(myParams);
}

async function getInfoAboutCountry(myParams) {
    console.log(myParams)
    let promise = await fetch(`https://disease.sh/v3/covid-19/countries/${myParams}`, {
        method: 'GET'
    });
    let response = await promise.json();
    return response;
}

getUrlParams(getInfoAboutCountry)