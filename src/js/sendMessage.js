import { validateMessage } from "./services.js";
import { KEY } from "./constants.js";
import { loadPosts } from "./loadPosts.js";

const INPUT = document.querySelector('.input__button');
const BUTTON = document.querySelector('.button__send');

INPUT.addEventListener('change', formHandler);
BUTTON.addEventListener('click', formHandler);


function formHandler(event) {
    event.preventDefault();

    //TODO: разобраться со всплытием событий, события срабатывают дважды
    // console.log(event.target); // вот их инициализаторы

    if (validateMessage(INPUT.value)) {
        // createUserMessage();
        sendMessage(INPUT.value);
        setTimeout(() => loadPosts(), 1000);
    }

    INPUT.value = '';
}

function sendMessage(message) {
    const URL = `wss://edu.strada.one/websockets?${KEY}`;
    const socket = new WebSocket(URL);
    const text = message;
    console.dir(socket);

    socket.onopen = (e) => {
        console.log(e);
        if(text) socket.send(JSON.stringify({ 'text': text }));
        loadPosts();
        console.log('OPEN SOCKET AND SEND MY MESSAGE AND GET ALL POST');
    }

    socket.onmessage = (e) => {
        console.log(e);
        console.log(e.data);
        console.log('GET DATA >>>');
        loadPosts();
    }

    socket.onclose = (e) => {
        console.log(e);
        sendMessage();
        console.log('SOCKET CLOSE >>>>>>>>>>>>>>>>>>>>>>>');
    }
}

export { sendMessage }


// Чтобы получить состояние соединения, существует дополнительное свойство socket.readyState со значениями:

//  0    – «CONNECTING»: соединение ещё не установлено,
//  1    – «OPEN»: обмен данными,
//  2    – «CLOSING»: соединение закрывается,
//  3    – «CLOSED»: соединение закрыто.