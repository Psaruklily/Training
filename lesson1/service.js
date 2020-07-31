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
function getTasks() {
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