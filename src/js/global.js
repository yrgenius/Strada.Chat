import { ELEMENTS } from "./constants.js";

ELEMENTS.buttonPower.addEventListener('click', () => window.close());
ELEMENTS.buttonSettings.addEventListener('click', () => showModalPage('modal__settings'));
Array.from(ELEMENTS.modalsPage).forEach(page => page.addEventListener('click', closeModalPage));
Array.from(ELEMENTS.modalButtonClose).forEach(buttonClose => buttonClose.addEventListener('click', closeModalPage));


function showModalPage(classElement) {
    const showPage = document.querySelector(`.${classElement}`);
    showPage.classList.add('modal__active');
}

function closeModalPage(event) {
    const isButton = Array.from(event.target.classList).includes('modal__button-close');
    const isBackground = Array.from(event.target.classList).includes('modal');

    if (isButton) {
        event.target.parentElement.parentElement.classList.remove('modal__active');
    }

    if (isBackground) {
        event.target.classList.remove('modal__active');
    }
}


export { showModalPage, closeModalPage }