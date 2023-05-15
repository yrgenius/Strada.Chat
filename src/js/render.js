import { ELEMENTS } from "./constants.js";
import { getTime, getCookie } from "./services.js";


export function renderPosts(array) {
    let userName = getCookie('name');
    array = array['messages'].reverse();

    console.log(array);

    ELEMENTS.chat.replaceChildren();

    for (let i = 0; i < array.length; i++) {
        let data = array[i];
        let newMessage = document.createElement('div');
        newMessage.classList.add('message');
        if (data.user.name === userName) {
            newMessage.classList.add('message__user');
        }
        newMessage.append(ELEMENTS.messages.content.cloneNode(1));
        newMessage.querySelector('.template__username').textContent = data.user.name;
        newMessage.querySelector('.template__message').textContent = data.text;
        newMessage.querySelector('.template__time').textContent = getTime(data.createdAt);
        ELEMENTS.chat.append(newMessage);
    }
}