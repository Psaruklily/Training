async function getInfoAboutCOVID() {
    let promise = await fetch('https://api.covid19api.com/summary', {
        method: 'GET'
    });
    let response = await promise.json();
    return response;
}