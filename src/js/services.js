function validationMessage(text) {

}

function validateEMail(value) {
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (value.match(validRegex))
        ? value
        : 'yrgenius80@gmail.com';
}

function getTime() {
    const time = new Date;
    return time.toLocaleTimeString().split(':', 2).join(":");
}

export { getTime, validateEMail }