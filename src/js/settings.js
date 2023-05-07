import { ELEMENTS } from "./constants.js";

ELEMENTS.modalSettingsButton.addEventListener('click', showAuthorizationPage);


function showAuthorizationPage(event) {
    event.preventDefault();

    document.querySelector('.modal__settings').classList.remove('modal__active');
    showModalPage('modal__authorization');
}

function showModalPage(classElement) {
    const showPage = document.querySelector(`.${classElement}`);
    showPage.classList.add('modal__active');
}

export { showAuthorizationPage }