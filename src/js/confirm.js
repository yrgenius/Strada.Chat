// import Cookies from "js-cookie";
import { ELEMENTS } from "./constants.js";

const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlyZ2VuaXVzODBAZ21haWwuY29tIiwiaWF0IjoxNjgzNDY0MjUzLCJleHAiOjE2ODcwNjA2NTN9.4MYnl68i7SPoKzMR6IZN2h_XNxhINaTf2aifOoJLIcM";

ELEMENTS.modalConfirmButton.addEventListener('click', inputCodeHandler);


function inputCodeHandler() {
    event.preventDefault();

    saveCookie('code', ELEMENTS.modalAuthorizeInput.value);
    changeInput(ELEMENTS.modalAuthorizeInput.value);
    request('https://edu.strada.one/api/user',
        'PATCH',
        { name: ELEMENTS.modalSettingsInput.value || 'Oblivion' });
}

function saveCookie(key, value) {
    // let key = value || KEY;
    // Cookies.set(key, value, { expires: 365 });
    document.cookie = `${key}=${value || KEY}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}

function changeInput(value) {
    if (ELEMENTS.modalConfirmInput.textContent) {
        ELEMENTS.modalConfirmInput.value = KEY;
    }
}

function request(URL, method, body) {
    let options = {
        method: method,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${ELEMENTS.modalConfirmInput.value}`
        },
        body: JSON.stringify(body)
    }

    fetch(URL, options)
        .then(data => data.json())
        .then(content => saveCookie('name', content.name));
}

export { inputCodeHandler }

// POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

