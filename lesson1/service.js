//Devide the code into several functions
/* function getImages(pageNumber, callbackSuccess) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
        success: callbackSuccess
    });
} */



//Same code with usage promise instead callback
//У цьому скріпті можна легко підміняти бібліотеки, наприклад. При цьому головний script.js ми не міняємо. Це дає багато можливостей

/* function getImages(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise;
} */

/* function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
} */



//Create todoList
/* function getTasks() {
    const promise = axios.get('https://repetitora.net/api/JS/Tasks?widgetId=34235');
    return promise.then((response) => {
        return response.data;
    });
}


function createTask(title) {
    const promise = axios.post('https://repetitora.net/api/JS/Tasks', {
        widgetId: 34235,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });
}


function updateTask(id, title) {
    const promise = axios.put('https://repetitora.net/api/JS/Tasks', {
        widgetId: 34235,
        taskId: id,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });
}


function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=34235&taskId=${id}`);
    return promise.then((response) => {
        return response.data;
    });
} */


//------------------------------------------------------------------------------------------------------------------
//LESSON 2 
//спрощення 'Створення назви нової книги на сервері (axios)'
function createBook(bookName) {
    let promise = axios({
        method: 'post',
        url: 'http://fakerestapi.azurewebsites.net/api/Books',
        data: {
            book: bookName
        }
    });
    return promise.then(response => {
        return response.data;
    });
}



//Внесення даних у таблицю, отриманих із сервера
function getBook() {
    let promise = axios({
        method: 'get',
        url: 'http://fakerestapi.azurewebsites.net/api/Books'
    });
    return promise.then(response => {
        return response.data;
    })
}