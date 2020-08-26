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
 let table = document.querySelector('#covid');

 function outputTable(data) {
     //let partOfCountries = data.slice(0, 5);
     //covidWorld = partOfCountries;
     covidWorld = data;
     covidWorld.forEach((country, index) => {
         let tr = document.createElement('tr');

         table.appendChild(tr);

         createRow(index, tr, country);

     });
 }

 function createRow(index2, tr, country) {
     maketCovid(index2 + 1, tr);
     columnWithLink(country.country, tr, country) //!!!!!!!!!!!!!!!!!!!!!!!!!!
     maketCovid(country.cases, tr)
     maketCovid(country.todayCases, tr)
     maketCovid(country.deaths, tr)
     maketCovid(country.todayDeaths, tr)
     maketCovid(country.recovered, tr)
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


 function maketCovid(text, tr) {
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


 //-------------------------------------------------------------------------------------------------TEST

 let trWithBtnFilter = document.querySelector('.with-button');

 let buttons = document.querySelectorAll('button');

 trWithBtnFilter.onclick = (event) => {
     let placeOfClick = event.target;
     if (placeOfClick.tagName != 'BUTTON') return; //не на кнопці? Тоді не цікавить
     if (placeOfClick == buttons[0] && buttons[0].classList.toggle("false")) {
         filterDataToSmaller(covidWorld, 'cases');
     } else {
         filterDataToLarger(covidWorld, 'cases');
     };

     /*   if (placeOfClick == buttons[1] && buttons[1].classList.toggle("false")) {
           filterDataToSmaller(covidWorld, 'todayCases');
       } else {
           filterDataToLarger(covidWorld, 'todayCases');
       } */

     /*   if (placeOfClick == buttons[1]) filterData(covidWorld, 'todayCases');
       if (placeOfClick == buttons[2]) filterData(covidWorld, 'deaths');
       if (placeOfClick == buttons[3]) filterData(covidWorld, 'todayDeaths');
       if (placeOfClick == buttons[4]) filterData(covidWorld, 'recovered'); */
 }

 function sortFromLargeToSmaller(arr, property) { //for false
     let sortData = arr.sort(function(a, b) {
         return b[property] - a[property];
     });
     return sortData;
 }

 function filterDataToSmaller(arr, property) {
     let sortedData = sortFromLargeToSmaller(arr, property);
     $('table').children('tr').remove();

     sortedData.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);
         createRow(index, tr, country);
     });
 }

 function sortFromSmallerToLarger(arr, property) { //for true
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