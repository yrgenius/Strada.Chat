import { validateEMail } from "./services.js";

const inputField = document.querySelector('.modal__input-authoraze');
const BUTTON_SENDMAIL = document.querySelector('.modal__button-get');
const BUTTON_INPUTCODE = document.querySelector('.modal__button-inp');
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlyZ2VuaXVzODBAZ21haWwuY29tIiwiaWF0IjoxNjgzMjgwMjkwLCJleHAiOjE2ODY4NzY2OTB9.W332HFnfxHSHzHgvaeSzLGeqygqSQiqvzhff1u9TCHs";

BUTTON_SENDMAIL.addEventListener('click', getCode);
BUTTON_INPUTCODE.addEventListener('click', inputCode);


function getCode() {
    event.preventDefault();
    const URL = 'https://edu.strada.one/api/user';
    const userEmail = validateEMail(inputField.value);
    const options = {
        method: 'POST',
        body: JSON.stringify({ email: userEmail }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    console.log(userEmail); //del

    // fetch(URL, options)
    //     .then(data => {
    //         if (!data.ok) {
    //             throw Error(data.status);
    //         }
    //         return data.json();
    //     })
    //     .then(text => console.log(text));
}

function inputCode() {
    event.preventDefault();

    document.cookie = `key=${inputField.value || KEY}; expires=Tue, 19 Jan 2038 03:14:07 GMT`;

}

export { getCode }

// POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

