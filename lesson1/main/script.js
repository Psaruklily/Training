 let covidWorld = [];

 function displayData(callback) {
     let response = getInfoAboutCOVID();
     response.then(data => {
         callback(data);
     });
 }

 displayData(outputDataCOVID);

 function outputDataCOVID(data) {
     let paragraph = document.querySelectorAll('p');
     paragraph[0].innerHTML = data.cases;
     paragraph[1].innerHTML = data.deaths;
     paragraph[2].innerHTML = data.recovered;
 }

 function COVIDCountries(callback) {
     let response = getInfoAboutCountries();
     response.then(data => {
         callback(data);
     });
 }
 COVIDCountries(outputTable);

 //------------------TABLE
 //-------------------------------------SPINNER
 let spinner = document.querySelector('.spinner-border');
 window.addEventListener('load', () => {
     setTimeout(() => {
         spinner.remove();
     }, 6000);
 })

 let table = document.querySelector('#covid');

 function outputTable(data) {
     covidWorld = data;
     covidWorld.forEach((country, index) => {
         let tr = document.createElement('tr');

         table.appendChild(tr);

         createRow(index, tr, country);
         //filterDataToSmaller(covidWorld, 'cases');
     });
 }

 function createRow(index, tr, country) {
     createTdWithData(index + 1, tr, country);
     columnWithLink(country.country, tr, country)
     createTdWithData(country.cases, tr, country)
     maketCovid(country.todayCases, tr, country)
     createTdWithData(country.deaths, tr, country)
     maketCovid(country.todayDeaths, tr, country)
     createTdWithData(country.recovered, tr, country)
     createTdWithData(country.active, tr, country)
     createTdWithData(country.critical, tr, country)
     createTdWithData(country.casesPerOneMillion, tr, country)
     createTdWithData(country.deathsPerOneMillion, tr, country)
     createTdWithData(country.tests, tr, country)
     createTdWithData(country.testsPerOneMillion, tr, country)
     columnWithLink(country.population, tr, country)
 }

 function columnWithLink(text, tr, country) {
     let a = document.createElement('a');
     let link = document.createTextNode(text);
     a.appendChild(link);
     a.href = '../country/countries.html';
     a.onclick = () => {
         localStorage.setItem('number', country.countryInfo._id);
     }

     let td = document.createElement('td');
     td.appendChild(a);
     tr.appendChild(td);
 }


 function maketCovid(text, tr, country) {
     // console.log(country)
     let td = document.createElement('td');
     if (text == 0) {
         td.innerHTML = ' ';
     } else if (text == country.todayCases) {
         td.classList.add('creamy');
         td.innerHTML = text;
     } else if (text == country.todayDeaths) {
         td.classList.add('red-cell');
         td.innerHTML = text;
     } else {
         td.innerHTML = text;
     }
     tr.appendChild(td);
 }

 function createTdWithData(text, tr) {
     // console.log(country)
     let td = document.createElement('td');
     if (text == 0) {
         td.innerHTML = ' ';
     } else {
         td.innerHTML = text;
     }
     tr.appendChild(td);
 }

 //------------------------------------------------------FILTER BUTTON

 /* let trWithBtnFilter = document.querySelector('.with-button');

 let buttons = document.querySelectorAll('button');

 trWithBtnFilter.onclick = (event) => {
     let placeOfClick = event.target;
     if (placeOfClick.tagName != 'BUTTON') return; //не на кнопці? Тоді не цікавить
     if (placeOfClick == buttons[0]) filterData(covidWorld, 'cases');
     if (placeOfClick == buttons[1]) filterData(covidWorld, 'todayCases');
     if (placeOfClick == buttons[2]) filterData(covidWorld, 'deaths');
     if (placeOfClick == buttons[3]) filterData(covidWorld, 'todayDeaths');
     if (placeOfClick == buttons[4]) filterData(covidWorld, 'recovered');
 }

 function sort(arr, property) {
     let sortData = arr.sort(function(a, b) {
         return b[property] - a[property];
     });
     return sortData;
 }

 function filterData(arr, property) {
     let sortedData = sort(arr, property);
     $('table').children('tr').remove();

     sortedData.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);
         createRow(index, tr, country);
     });
 } */


 //------------------------------------------------------------------------------FILTER DATA WITH TOGGLE

 let tableHeader = document.querySelector('.tableHeader');
 let thHeader = document.querySelectorAll('.headerTh');
 console.log(thHeader)

 tableHeader.onclick = (event) => {
     let placeOfClick = event.target.closest('th');
     if (placeOfClick == thHeader[2] && thHeader[2].classList.toggle("false")) {
         changeArrows(placeOfClick)
         filterDataToSmaller(covidWorld, 'cases');
     } else if (placeOfClick == thHeader[2]) {
         changeArrows(placeOfClick)
         filterDataToLarger(covidWorld, 'cases');
     };

     if (placeOfClick == thHeader[3] && thHeader[3].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'todayCases');
     } else if (placeOfClick == thHeader[3]) {
         filterDataToLarger(covidWorld, 'todayCases');
     }

     if (placeOfClick == thHeader[4] && thHeader[4].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'deaths');
     } else if (placeOfClick == thHeader[4]) {
         filterDataToLarger(covidWorld, 'deaths');
     }

     if (placeOfClick == thHeader[5] && thHeader[5].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'todayDeaths');
     } else if (placeOfClick == thHeader[5]) {
         filterDataToLarger(covidWorld, 'todayDeaths');
     }

     if (placeOfClick == thHeader[6] && thHeader[6].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'recovered');
     } else if (placeOfClick == thHeader[6]) {
         filterDataToLarger(covidWorld, 'recovered');
     }

     if (placeOfClick == thHeader[7] && thHeader[7].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'active');
     } else if (placeOfClick == thHeader[7]) {
         filterDataToLarger(covidWorld, 'active');
     }

     if (placeOfClick == thHeader[8] && thHeader[8].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'critical');
     } else if (placeOfClick == thHeader[8]) {
         filterDataToLarger(covidWorld, 'critical');
     }

     if (placeOfClick == thHeader[9] && thHeader[9].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'casesPerOneMillion');
     } else if (placeOfClick == thHeader[9]) {
         filterDataToLarger(covidWorld, 'casesPerOneMillion');
     }

     if (placeOfClick == thHeader[10] && thHeader[10].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'deathsPerOneMillion');
     } else if (placeOfClick == thHeader[10]) {
         filterDataToLarger(covidWorld, 'deathsPerOneMillion');
     }

     if (placeOfClick == thHeader[11] && thHeader[11].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'tests');
     } else if (placeOfClick == thHeader[11]) {
         filterDataToLarger(covidWorld, 'tests');
     }

     if (placeOfClick == thHeader[12] && thHeader[12].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'testsPerOneMillion');
     } else if (placeOfClick == thHeader[12]) {
         filterDataToLarger(covidWorld, 'testsPerOneMillion');
     }

     if (placeOfClick == thHeader[13] && thHeader[13].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'population');
     } else if (placeOfClick == thHeader[13]) {
         filterDataToLarger(covidWorld, 'population');
     }
 }

 function sortFromLargeToSmaller(arr, property) { //---------------------------------for false
     let sortData = arr.sort(function(a, b) {
         return b[property] - a[property];
     });
     return sortData;
 }

 function filterDataToSmaller(arr, property) {
     let sortedData = sortFromLargeToSmaller(arr, property);
     $('table').children('tr').remove();

     //---------


     sortedData.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);
         createRow(index, tr, country);
     });
 }

 function sortFromSmallerToLarger(arr, property) { //---------------------------------for true
     let sortData = arr.sort(function(a, b) {
         return a[property] - b[property];
     });
     return sortData;
 }

 function filterDataToLarger(arr, property) {
     let sortedData = sortFromSmallerToLarger(arr, property);
     $('table').children('tr').remove();

     sortedData.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);
         createRow(index, tr, country);
     });
 }

 //--------------------------------------------------------------------ARROWS
 function changeArrows(placeOfClick) {
     if (placeOfClick.classList.contains('default-arrows')) {
         placeOfClick.classList.remove('default-arrows')
         placeOfClick.classList.add('sortToSmaller1')
     } else if (placeOfClick.classList.contains('sortToSmaller1')) {
         placeOfClick.classList.toggle('sortToLarger1')
     }
 }

 //------------------------------------------------------------------INPUT SEARCH
 /*  let searchCountry = document.querySelector('.searchCountry');
  let buttonSubmit = document.querySelector('.submitCountry');

  let countriesStartsWithCurrentLetter = [];
  buttonSubmit.onclick = () => {
      $('table').children('tr').remove();
      covidWorld.forEach(country => {
          let a = country.country.startsWith(searchCountry.value);
          if (a == true) {
              countriesStartsWithCurrentLetter.push(country);
          }
      });
      //console.log(countriesStartsWithCurrentLetter);
      countriesStartsWithCurrentLetter.forEach((country, index) => {
          let tr = document.createElement('tr');
          table.appendChild(tr);
          createRow(index, tr, country);
      });
  } */

 //----------------------------------------------------------------------SENSITIVE SEARCH

 let searchCountry = document.querySelector('.searchCountry')
 let arr = [];
 searchCountry.onkeyup = function() {
     arr = [];
     $('table').children('tr').remove();
     let val = this.value.toLowerCase().trim();
     if (val != '') {
         covidWorld.forEach(function(country) {
             if (country.country.toLowerCase().indexOf(val) > -1) {
                 arr.push(country);
             }
         })
     } else {
         arr = covidWorld;
     }
     arr.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);
         createRow(index, tr, country);
     });
 }