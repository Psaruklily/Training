 let covidWorld = [];

 function COVID(callback) {
     let response = getInfoAboutCOVID();
     response.then(data => {
         callback(data);
     });
 }

 COVID(outputDataCOVID);
 COVID(outputTable);

 function outputDataCOVID(data) {
     let paragraph = document.querySelectorAll('p');
     paragraph[0].innerHTML = data.Global.TotalConfirmed;
     paragraph[1].innerHTML = data.Global.TotalDeaths;
     paragraph[2].innerHTML = data.Global.TotalRecovered;
 }

 //------------------TABLE
 let table = document.querySelector('#covid');

 function outputTable(data) {
     let partOfCountries = data.Countries.slice(0, 5);
     covidWorld = partOfCountries;
     covidWorld.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);

         createRow(index, tr, country);
     });
 }

 function createRow(index2, tr, country) {
     maketCovid(index2 + 1, tr);
     maketCovid(country.Country, tr)
     maketCovid(country.TotalConfirmed, tr)
     maketCovid(country.NewConfirmed, tr)
     maketCovid(country.TotalDeaths, tr)
     maketCovid(country.NewDeaths, tr)
     maketCovid(country.TotalRecovered, tr)
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
 let btnFilter = document.querySelector('.filter');
 btnFilter.onclick = function() {
     filterDate();
 }

 function filterDate() {
     let insedent = covidWorld.sort(function(a, b) {
         return a.TotalConfirmed - b.TotalConfirmed;
     });

     $('table').children('tr').remove();

     insedent.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);

         createRow(index, tr, country);
     });

 }