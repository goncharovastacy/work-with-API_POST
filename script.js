'use strict';

const title = document.querySelector('#title');
const body = document.querySelector('#body');
const button = document.querySelector('#button');
const posts = document.querySelector('.posts');

// создаем разметку поста
function createPost(obj){
  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `<h3>${obj.title}</h3>
  <p>${obj.body}</p>`;
  posts.append(post);
}

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
        createPost(json);
      } )
}

// очищаем инпуты после нажатия
function clearInputs(){
    title.value = '';
    body.value = '';
}

button.addEventListener('click', () => {
    sendPost(title.value, body.value);
    clearInputs();
})