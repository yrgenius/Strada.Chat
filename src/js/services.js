import { ELEMENTS } from "./constants.js";

function validateMessage(text) {
    return text.length;
}

function validateEMail(value) {
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (value.match(validRegex))
        ? value
        : 'yrgenius80@gmail.com';
}

function getTime(value) {
    let time = undefined;
    (value)
        ? time = new Date(value)
        : time = new Date();
    return time.toLocaleTimeString().split(':', 2).join(":");
}

function getCookie(key) {
    let cookie = document.cookie;
    let data = [];
    if (cookie && cookie.includes(key)) {
        data = [...cookie.split('; ')];
        return data.filter(el => el.includes(key))[0].split('=')[1];
    }
}

function testRequest(myUrl, method, body) {
    //GET https://edu.strada.one/api/user/me
    try {
        const url = myUrl || 'https://edu.strada.one/api/user/me';

        if (method === 'GET') {
            fetch(url)
                .then(response => {
                    let out = response.json();
                    console.log('data', out); //del
                    return out
                })
                .then(data => {
                    let out = data;
                    console.log(out); //del
                    return out;
                });
        }
        else {
            const options = {
                method: method,
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(body || '')
            }

            fetch(url, options)
                .then(response => {
                    let out = response.json();
                    console.log('data', out); //del
                    return out
                })
                .then(data => {
                    let out = data;
                    console.log(out); //del
                    return out;
                });
        }
    }
    catch {
        console.info("testRequest error");
    }
}

function useEventOnAnotherElement(element, myEvent) {
    let event = new Event(myEvent);
    element.dispatchEvent(event);
}

export { validateMessage, getTime, validateEMail, getCookie, testRequest, useEventOnAnotherElement }