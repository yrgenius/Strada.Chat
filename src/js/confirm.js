import { ELEMENTS } from "./constants.js";
import { useEventOnAnotherElement } from "./services.js";

const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlyZ2VuaXVzODBAZ21haWwuY29tIiwiaWF0IjoxNjgzNTE1MzIyLCJleHAiOjE2ODcxMTE3MjJ9.RNMVyTs3tbhh7ShrQtkC9OhT0WQXPGSj7TwPqwoc-Qk";

ELEMENTS.modalConfirmButton.addEventListener('click', inputCodeHandler);


function inputCodeHandler() {
    event.preventDefault();

    saveCookie('code', ELEMENTS.modalAuthorizeInput.value);
    changeInput(ELEMENTS.modalSettingsInput.value);
    request('https://edu.strada.one/api/user',
        'PATCH',
        { name: ELEMENTS.modalSettingsInput.value || 'Oblivion' });

    setTimeout(useEventOnAnotherElement(ELEMENTS.modalButtonClose[1], 'click'), 500);
}

function saveCookie(key, value) {
    document.cookie = `${key}=${value || KEY}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
}

function changeInput(value) {
    if (ELEMENTS.modalConfirmInput.value === '') { // !!! это не одно и тоже что  if (ELEMENTS.modalConfirmInput.value)
        ELEMENTS.modalConfirmInput.value = value || KEY;
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

