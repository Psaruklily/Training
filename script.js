async function getResponse() {
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


getResponse();

