function createUser() {
    var users = [];

    return users;
}



function age() {
    let number = Math.random() * 42 + 18;
    return Math.floor(number);
}
console.log(age());



function randomBool() {
    /* if (Math.random() < 0.5) {
         return false;
     } else {
         return true;
     }*/
    return (Math.random() < 0.5) ? false : true;
}
console.log(randomBool());