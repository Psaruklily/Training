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







/* fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=a87d04d470e32219e279023b8563b01e')      Get the weather forecast(2)
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
}); */




/* let address = 'https://jsonplaceholder.typicode.com/users';                             Obtaining data about user(3)
function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send();

    })
}
sendRequest( 'GET', address)
.then (function(data){
    console.log(data);
    document.querySelector('.name').innerHTML = `${data[0]['name']};`;
    document.querySelector('.city').innerHTML = `${data[0]['address']['city']};`;
    document.querySelector('.username').innerHTML = `${data[0]['username']};`;
    document.querySelector('.phone').innerHTML = `${data[0]['phone']};`;
})
.catch (err => console.log(err));
 */






/* fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(responsive) {
        return responsive.json();
    })
    .then(data => {
        console.log(data);


        let outputData = [];

        for (let i = 0; i < data.length; i++) {
            let arr = data[i];

            outputData.push([arr.name, arr.phone]);
            console.log(outputData);
        }
    }) */



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(responsive) {
//         return responsive.json();
//     })
//     .then(data => {
//         console.log(data);

//         let a = data.map(function(currentValue) {
//             /* let arr = [];
//             arr.push(currentValue.name);
//             arr.push(currentValue.phone);
//             arr.push(currentValue.username); */


//             let user = {
//                 name: currentValue.name,
//                 phone: currentValue.phone,
//                 username: currentValue.username
//             }
//             return user;
//         });
//         console.log(a);

//     })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(responsive) {
        return responsive.json();
    })
    .then(data => {
        /*  console.log(data); */

        let array = []; // Reducing the properties of the object
        for (let i = 0; i < data.length; i++) {

            let user = {
                    name: data[i].name,
                    phone: data[i].phone,
                    username: data[i].username
                }
                /* console.log(user); */
            array.push(user);
        }
        /* console.log(arrey); */
        return array;


    })
    .then(array => {
        array.sort(function(a, b) { //Sort names alphabetically
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        console.log(array);
    })