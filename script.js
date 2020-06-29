//let img = document.querySelector('.image');

/* let container = document.querySelector('#div');
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM');
    let result = await response.json();
    console.log(result);
    let image = document.createElement('img');
    image.src = result['url'];
    container.appendChild(image);
}

getRandomImage(); */

/* for (let i = 0; i < 40; i++) {
    getRandomImage();
}*/


let container = document.querySelector('#div');
let result;
let arrayUrl = [];
async function getRandomImage() {
    let response = await fetch('https://random.dog/woof.json?fbclid=IwAR03VGYezarr3RFjvKuZ6TGzqhEv3WtK6n60FVTpoLHsKHNj6b4liCQTqAM')
        .then(function(response) {
            result = response.json();
            //console.log(result);
            return result;
        })
        .then(function(result) {
            let image = document.createElement('img');
            image.src = result['url'];
            // console.log(result['url']);
            container.appendChild(image);
            return result['url'];
        })
        .then(function(result) {
            //console.log(result);
            if (!result.includes('mp4')) {
                arrayUrl.push(result);
                //console.log(arrayUrl);
                console.log(result + '   no mp4');
            }

        })
}

//getRandomImage();
for (let i = 0; i < 10; i++) {
    getRandomImage();
}


/* function url(string) {
    if (string.includes('mp4')) {
        return 'true';
    } else {
        return 'false';
    }
} */
//console.log(url('https://random.dog/fa68ed75-f7e0-44eb-a39b-408b984d2f90.jpg'));