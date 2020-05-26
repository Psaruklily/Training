/* async function getResponse() {                                                       Fetch. Get images(1)
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await response.json();
    content = content.splice(0, 10);
    console.log(content);
    console.log(typeof content);

    let list = document.querySelector('.posts');
    

    let key;
    for (key in content) {
    list.innerHTML += `
    <li class="post">
    <h4>${content[key].title}</h4>
    <img src="${content[key].url}" width="300px" alt="#">
</li>
    `
    }
}

getResponse(); */







fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=a87d04d470e32219e279023b8563b01e')
.then (function(responsive) {
    return responsive.json()
})
.then (function(data){
    console.log(data);
    document.querySelector('.city-name').textContent=data.name;
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.description').textContent=data.weather[0]['description'];
    //https://openweathermap.org/img/wn/10d@2x.png
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch (function (){
    //catch any errors
});

