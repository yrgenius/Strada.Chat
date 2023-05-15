import { ELEMENTS, KEY } from "./constants.js";
import { getTime } from "./services.js";
import { renderPosts } from './render.js';


export async function loadPosts() {
    console.log('LOAD ALL POSTS >>> ');
    try {
        const response = await fetch('https://edu.strada.one/api/messages/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${KEY}`,
            }
        });
        const data = await response.json();
        const array = await renderPosts(data);
    }
    catch (e) {
        console.log(e);
    }
}



// function renderPosts(array) {
//     array = array['messages'].reverse();
//     for (let i = 0; i < array.length; i++) {
//         let data = array[i];
//         let newMessage = document.createElement('div');
//         newMessage.classList.add('message');
//         newMessage.append(ELEMENTS.messages.content.cloneNode(1));
//         newMessage.querySelector('.template__username').textContent = data.user.name;
//         newMessage.querySelector('.template__message').textContent = data.text;
//         newMessage.querySelector('.template__time').textContent = getTime(data.createdAt);
//         ELEMENTS.chat.append(newMessage);
//     }
// }