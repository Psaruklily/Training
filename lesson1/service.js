function getImages(pageNumber, callbackSuccess) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
        success: callbackSuccess
    });
}