 let covidWorld = [];

 function COVID(callback) {
     let response = getInfoAboutCOVID();
     response.then(data => {
         //console.log(data);
         callback(data);
     });
 }

 COVID(outputDataCOVID);
 //COVID(outputTable);

 function outputDataCOVID(data) {
     let paragraph = document.querySelectorAll('p');
     paragraph[0].innerHTML = data.cases;
     paragraph[1].innerHTML = data.deaths;
     paragraph[2].innerHTML = data.recovered;
 }


 function COVIDCountries(callback) {
     let response = getInfoAboutCountries();
     response.then(data => {
         console.log(data);
         callback(data);
     });
 }
 COVIDCountries(outputTable);



 //------------------TABLE
 let table = document.querySelector('#covid');

 function outputTable(data) {
     let partOfCountries = data.slice(0, 5);
     covidWorld = partOfCountries;
     covidWorld.forEach((country, index) => {
         let tr = document.createElement('tr');

         table.appendChild(tr);

         createRow(index, tr, country);
     });
 }

 function createRow(index2, tr, country) {
     maketCovid(index2 + 1, tr);
     columnWithLink(country.country, tr)
     maketCovid(country.cases, tr)
     maketCovid(country.todayCases, tr)
     maketCovid(country.deaths, tr)
     maketCovid(country.todayDeaths, tr)
     maketCovid(country.recovered, tr)
 }

 function columnWithLink(text, tr) {
     let a = document.createElement('a');
     let link = document.createTextNode(text);
     a.appendChild(link);
     a.href = "#";
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
 let btnFilter = document.querySelector('.filter');
 btnFilter.onclick = function() {
     filterDate();
 }

 function filterDate() {
     let insedent = covidWorld.sort(function(a, b) {
         return a.cases - b.cases;
     });

     $('table').children('tr').remove();

     insedent.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);

         createRow(index, tr, country);
     });
 }