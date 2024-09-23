fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then((response) => response.json())  
  .then((post) => {
    const postContainer = document.getElementById('postContainer');

    const postElement = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;

    postContainer.innerHTML = postElement;
  })
  .catch((error) => {
    console.error('Fehler beim Abrufen des Posts:', error);
  });
