/*  function getUrlParams() {
     const urlParams = new URLSearchParams(window.location.search);
     const myParams = urlParams.get('id');
     console.log(myParams);
     let responseAboutCountry = getInfoAboutCountry(myParams);
     displayData(responseAboutCountry);
 } */
function numberId() {
    let id = localStorage.getItem('number');
    //console.log(id)
    return id;
}

async function getInfoAboutCountry() {
    let id = numberId();
    let promise = await fetch(`https://disease.sh/v3/covid-19/countries/${id}`, {
        method: 'GET'
    });
    let response = await promise.json();
    return response;
}