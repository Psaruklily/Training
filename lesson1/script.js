 function COVID() {
     let response = getInfoAboutCOVID();
     response.then(data => {
         outputDataCOVID(data);
     })

 }

 COVID()

 function outputDataCOVID(data) {
     let paragraph = document.querySelectorAll('p');
     paragraph[0].innerHTML = data.Global.TotalConfirmed;
     paragraph[1].innerHTML = data.Global.TotalDeaths;
     paragraph[2].innerHTML = data.Global.TotalRecovered;
 }