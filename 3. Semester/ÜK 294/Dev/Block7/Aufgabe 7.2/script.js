fetch('https://jsonplaceholder.typicode.com/posts/79')
  .then((response) => response.json())
  .then((post) => {
    const postContainer = document.getElementById('postContainer');
    
    const postElement = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p>UserID: ${post.userId}</p>
      <p>ID:${post.id}</p>
    `;
    
    postContainer.innerHTML = postElement;
  })
  .catch((error) => {
    console.error('Fehler beim Abrufen des Posts:', error);
  });

document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 345,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Post erfolgreich erstellt</p>`;
  })
  .catch((error) => {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Fehler beim Erstellen des Posts: ${error.message}</p>`;
  });
});

document.getElementById('deletePost').addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        console.log('Post erfolgreich gelöscht');
    } else {
      console.log('Fehler beim löschen!')
    }
  });
});
