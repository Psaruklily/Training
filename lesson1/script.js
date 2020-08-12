 function COVID() {
     let response = getInfoAboutCOVID();
     response.then(data => {
             //console.log(data)
             outputDataCOVID(data);
             let partOfCountries = data.Countries.slice(0, 11);
             return partOfCountries;
         })
         .then(data => outputTable(data))
 }

 COVID()

 function outputDataCOVID(data) {
     let paragraph = document.querySelectorAll('p');
     paragraph[0].innerHTML = data.Global.TotalConfirmed;
     paragraph[1].innerHTML = data.Global.TotalDeaths;
     paragraph[2].innerHTML = data.Global.TotalRecovered;
 }



 //------------------TABLE
 let table = document.querySelector('#covid');

 function outputTable(countries) {
     console.log(countries);
     countries.forEach((country, index) => {
         let tr = document.createElement('tr');
         table.appendChild(tr);

         maketCovid(index, tr);
         maketCovid(country.Country, tr)
         maketCovid(country.TotalConfirmed, tr)
         maketCovid(country.NewConfirmed, tr)
         maketCovid(country.TotalDeaths, tr)
         maketCovid(country.NewDeaths, tr)
         maketCovid(country.TotalRecovered, tr)

         /*  td = document.createElement('td');
          td.innerHTML = '1';
          tr.appendChild(td);

          td = document.createElement('td');
          td.innerHTML = country.Country;
          tr.appendChild(td); */

     });
 }

 function maketCovid(text, tr) {
     td = document.createElement('td');
     if (text == 0) {
         td.innerHTML = ' ';
     } else {
         td.innerHTML = text;
     }
     tr.appendChild(td);
 }