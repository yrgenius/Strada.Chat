import { getCookie, getTime, validateMessage } from "./services.js";

const FORM = document.querySelector('.send__form');
const INPUT = document.querySelector('.input__button');
const BUTTON = document.querySelector('.button__send');
const CHAT = document.querySelector('.chat');
const MESSAGE = document.querySelector('.template');
const USER = getCookie('name') || "User";

INPUT.addEventListener('change', formHandler);
BUTTON.addEventListener('click', formHandler);


function formHandler(event) {
    event.preventDefault();

    //TODO: разобраться со всплытием событий, события срабатывают дважды
    // console.log(event.target); // вот их инициализаторы

    if (validateMessage(INPUT.value)) {
        createUserMessage();
    }

    INPUT.value = '';
}

function createUserMessage() {
    let newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.classList.add('message__user');
    newMessage.append(MESSAGE.content.cloneNode(1));
    newMessage.querySelector('.template__username').textContent = USER;
    newMessage.querySelector('.template__message').textContent = INPUT.value;
    newMessage.querySelector('.template__time').textContent = getTime();
    CHAT.append(newMessage);
}


export { FORM }