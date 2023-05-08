import { validateEMail } from "../services.js";
import { ELEMENTS } from "../constants.js";
import { showModalPage } from "./global.js";

ELEMENTS.modalAuthorizeButtonSendMail.addEventListener('click', getCodeHandler);
ELEMENTS.modalAuthorizeButtonInputCode.addEventListener('click', showConfirmPage);


function getCodeHandler() {
    event.preventDefault();
    try {
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
    catch {
        console.log('Error form send Email');
    }

}

function showConfirmPage() {
    event.preventDefault();
    document.querySelector('.modal__authorization').classList.remove('modal__active');
    showModalPage('modal__confirm');
}


export { getCodeHandler }

// POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

