//let img = document.querySelector('.image');

let container = document.querySelector('#div');
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    //console.log(response);
    let result = await response.json();
    console.log(result);
    let image = document.createElement('img');
    image.src = result['url'];
    container.appendChild(image);
}
//getRandomImage();
for (let i = 0; i < 40; i++) {
    getRandomImage();
}



/* async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    //console.log(response);
    let result = await response.json();
    console.log(result);
    let img = document.createElement("img");
    img.src = result['url'];
    let container = document.getElementById("container");
    container.appendChild(img);
} */
//getRandomImage(); 

/* console.log(container);

function getRandomImage() {
    let image = document.createElement('img');
    image.src = 'https://random.dog/945e599c-3a1e-44d5-a23e-d6acc2ca47a5.jpg';

    console.log(container);
    container.appendChild(image);

}
for (let i = 0; i < 2; i++) {
    getRandomImage();
} */
//getRandomImage();