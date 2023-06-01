'use strict';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const button = document.querySelector('#button');
const posts = document.querySelector('.posts');

function sendPost (title, body){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<h3>${json.title}</h3>
        <p>${json.body}</p>`;
        posts.append(post);
      } )
}

function clearInputs(){
    title.value = '';
    body.value = '';
}

button.addEventListener('click', () => {
    sendPost(title.value, body.value);
    clearInputs();
});