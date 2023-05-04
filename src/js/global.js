const BUTTON_POWER = document.querySelector('.button__exit');
const BUTTON_SETTINGS = document.querySelector('.button__settings');
const MODALS_PAGE = document.querySelectorAll('.modal');
const MODAL_BUTTONS_CLOSE = document.querySelectorAll('.modal__button-close');


BUTTON_POWER.addEventListener('click', () => window.close());
BUTTON_SETTINGS.addEventListener('click', () => showModalPage('modal__settings'));
Array.from(MODALS_PAGE).forEach(page => page.addEventListener('click', closeModalPage));
Array.from(MODAL_BUTTONS_CLOSE).forEach(buttonClose => buttonClose.addEventListener('click', closeModalPage));


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


export { BUTTON_SETTINGS }