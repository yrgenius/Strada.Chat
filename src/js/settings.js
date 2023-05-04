const buttonSaveNickname = document.querySelector('.modal__button-settings');

buttonSaveNickname.addEventListener('click', saveNickname);

function saveNickname() {
    event.preventDefault();
}

export { buttonSaveNickname }