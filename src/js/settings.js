const buttonSaveNickname = document.querySelector('.modal__button-settings');
const authorizeButton = document.querySelector('.button__authorization');

buttonSaveNickname.addEventListener('click', showAuthorizationPage);
authorizeButton.addEventListener('click', showAuthorizationPage);


function showAuthorizationPage(event) {
    event.preventDefault();
    document.querySelector('.modal__settings').classList.remove('modal__active');
    showModalPage('modal__authorization');
}

function showModalPage(classElement) {
    const showPage = document.querySelector(`.${classElement}`);
    showPage.classList.add('modal__active');
}

export { buttonSaveNickname }