import { showModalPage } from "./global.js";

const authorizeButton = document.querySelector('.button__authorization');
const BUTTON_SENDMAIL = document.querySelector('.modal__button-get');
const BUTTON_INPUTCODE = document.querySelector('.modal__button-inp');

authorizeButton.addEventListener('click', showAuthorizationPage);
BUTTON_SENDMAIL.addEventListener('click', getCode);
BUTTON_INPUTCODE.addEventListener('click', inputCode);

function showAuthorizationPage(event) {
    document.querySelector('.modal__settings').classList.remove('modal__active');
    showModalPage('modal__authorization');
}

function getCode() {
    event.preventDefault();
    const URL = 'https://edu.strada.one/api/user';
    const userEmail = document.querySelector('.modal__input-authoraze').value;

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ email: userEmail }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(text => console.log(text));

}

function inputCode() {
    event.preventDefault();
}

export { showAuthorizationPage }

// POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

