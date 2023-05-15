import { getCookie, validateMessage } from "./services.js";
import { KEY } from "./constants.js";
import { loadPosts } from "./loadPosts.js";

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
        // createUserMessage();
        sendMessage(INPUT.value);
        setTimeout(loadPosts(), 1000);
    }

    INPUT.value = '';
}

// function createUserMessage() {
//     let newMessage = document.createElement('div');
//     newMessage.classList.add('message');
//     newMessage.classList.add('message__user');
//     newMessage.append(MESSAGE.content.cloneNode(1));
//     newMessage.querySelector('.template__username').textContent = USER;
//     newMessage.querySelector('.template__message').textContent = INPUT.value;
//     newMessage.querySelector('.template__time').textContent = getTime();
//     CHAT.append(newMessage);
// }

function sendMessage(message) {
    const URL = `wss://edu.strada.one/websockets?${KEY}`;
    const socket = new WebSocket(URL);
    const text = message;
    console.dir(socket);

    socket.onopen = (e) => {
        console.log('OPEN SOCKET AND SEND MY MESSAGE');
        console.log(e);
        socket.send(JSON.stringify({ 'text': text }));
    }

    socket.onmessage = (e) => {
        console.log('OPEN SOCKET AND GET DATA');
        console.log(e);
        console.log(e.data);
    }
}

export { FORM }


// Чтобы получить состояние соединения, существует дополнительное свойство socket.readyState со значениями:

//  0    – «CONNECTING»: соединение ещё не установлено,
//  1    – «OPEN»: обмен данными,
//  2    – «CLOSING»: соединение закрывается,
//  3    – «CLOSED»: соединение закрыто.