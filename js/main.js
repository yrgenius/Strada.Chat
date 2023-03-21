const power = document.querySelector('.button__exit');
const settings = document.querySelector('.button__settings');
const modalAuthorizationPage = document.querySelector('.modal__authorization');
const buttonCloseModalPage = document.querySelectorAll('.modal__button-close');


power.addEventListener('click', () => window.close());
settings.addEventListener('click', () => showModalPage(event, 'modal__settings'));

Array.from(buttonCloseModalPage).forEach(buttonClose => buttonClose.addEventListener('click', closeModalPage));

function showModalPage(event, classElement) {
    let page = document.querySelector(`.${classElement}`);
    console.dir(page);
    page.classList.add('modal__active');
}

function closeModalPage(event) {
    console.log(event.target.parentElement); //del
    event.target.parentElement.parentElement.classList.remove('modal__active');
}