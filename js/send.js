const FORM = document.querySelector('.send__form');
const INPUT = document.querySelector('.input__button');
const BUTTON = document.querySelector('.button__send');

FORM.addEventListener('change', formHandler);


function formHandler(event) {
    console.log('ok');
}


export { FORM }