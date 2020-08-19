 function getUrlParams() {
     const urlParams = new URLSearchParams(window.location.search);
     const myParams = urlParams.get('id');
     console.log(myParams);
     let responseAboutCountry = getInfoAboutCountry(myParams);
     displayData(responseAboutCountry);
 }

 async function getInfoAboutCountry(myParams) {
     console.log(myParams)
     let promise = await fetch(`https://disease.sh/v3/covid-19/countries/${myParams}`, {
         method: 'GET'
     });
     let response = await promise.json();
     return response;
 }

 getUrlParams()