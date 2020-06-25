let img = document.querySelector('.image');
let p = document.querySelector('.bite');

async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    //console.log(response);
    let result = await response.json();
    console.log(result);
    img.src = result['url'];
    p.innerHTML = `bite: ${result['fileSizeBytes']}`;

}
getRandomImage();




/* async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    //console.log(response);
    let result = await response.json();
    console.log(result);
    let img = document.createElement("img");
    img.src = 'https://random.dog/29152151-f563-45c6-984a-e0fdba531729.jpg';
    let container = document.getElementById("container");
    container.appendChild(img);
}
getRandomImage(); */