let number = document.querySelector('.output');
console.log(number)
let button = document.querySelector('.btn');
button.onclick = () => {
    localStorage.setItem('number', number.value);
}