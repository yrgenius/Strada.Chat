import { validateEMail } from "./services.js";
import { ELEMENTS } from "./constants.js";

ELEMENTS.modalAuthorizeButtonSendMail.addEventListener('click', getCodeHandler);
ELEMENTS.modalAuthorizeButtonInputCode.addEventListener('click', inputCodeHandler);

const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlyZ2VuaXVzODBAZ21haWwuY29tIiwiaWF0IjoxNjgzNDY0MjUzLCJleHAiOjE2ODcwNjA2NTN9.4MYnl68i7SPoKzMR6IZN2h_XNxhINaTf2aifOoJLIcM";


function getCodeHandler() {
    event.preventDefault();

    const URL = 'https://edu.strada.one/api/user';
    const userEmail = validateEMail(ELEMENTS.modalAuthorizeInput.value);
    const options = {
        method: 'POST',
        body: JSON.stringify({ email: userEmail }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    fetch(URL, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        })
        .then(text => console.log(text));
}

function inputCodeHandler() {
    event.preventDefault();

    saveCookie(ELEMENTS.modalAuthorizeInput.value);
    changeInput(ELEMENTS.modalAuthorizeInput.value);
    request('https://edu.strada.one/api/user',
        'PATCH',
        { name: ELEMENTS.modalSettingsInput.value });
}

function saveCookie(value) {
    document.cookie = `key=${value || KEY}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}

function changeInput(value) {
    if (ELEMENTS.modalAuthorizeInput.textContent) {
        ELEMENTS.modalAuthorizeInput.value = KEY;
    }
}

function request(URL, method, body) {
    let options = {
        method: method,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${ELEMENTS.modalAuthorizeInput.value}`
        },
        body: JSON.stringify(body)
    }

    fetch(URL, options)
        .then(data => data.json())
        .then(content => console.log(content));
}

export { getCodeHandler }

// POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

