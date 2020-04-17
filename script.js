
let jsonString2

const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  console.log(typeof Http.responseText)
  jsonString2 = JSON.stringify(Http.responseText)
  console.log(jsonString2[0])
  console.log(jsonString2)

  var element = document.getElementById("out");
}

console.log("test")
// console.log(jsonString)
// console.log(typeof jsonString)

// new part code
// asdasda
// asdasda
// asdasda