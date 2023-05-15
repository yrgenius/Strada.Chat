import { KEY } from "./constants.js";
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
        await renderPosts(data);
    }
    catch (e) {
        console.log(e);
    }
}
