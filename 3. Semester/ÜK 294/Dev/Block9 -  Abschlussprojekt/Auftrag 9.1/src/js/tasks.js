// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Funktion zum Lesen eines Cookies
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Funktion zum Überprüfen, ob der Benutzer eingeloggt ist (Cookie oder Token)
function checkLogin() {
  const token = localStorage.getItem('token') || getCookie('token');
  
  if (token) {
    // Falls ein Token im Cookie oder localStorage existiert, den Aufgabenbereich laden
    document.getElementById('task-container').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block'; // Logout-Button einblenden
    loadTasks();
  } else {
    // Wenn kein Token vorhanden ist, zeige den Login-Bereich
    document.getElementById('task-container').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';  // Logout-Button ausblenden
  }
}

// Funktion zum Login (inklusive Cookie-Setzen)
document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://10.72.4.41:3000/auth/jwt/sign', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      // Token im lokalen Speicher und als Cookie speichern
      localStorage.setItem('token', data.token);
      setCookie('token', data.token, 7);  // Token als Cookie setzen für 7 Tage
      
      alert('Login erfolgreich!');
      
      // Aufgaben laden
      document.getElementById('task-container').style.display = 'block';
      document.getElementById('login').style.display = 'none';
      document.getElementById('logout-btn').style.display = 'inline-block'; // Logout-Button einblenden
      loadTasks();
    } else {
      alert('Login fehlgeschlagen');
    }
  })
  .catch(error => console.error('Login Fehler:', error));
});

// Funktion zum Logout (Token und Cookie entfernen)
function logout() {
  localStorage.removeItem('token');
  setCookie('token', '', -1);  // Cookie entfernen
  alert('Du wurdest ausgeloggt.');
  document.getElementById('task-container').style.display = 'none';
  document.getElementById('login').style.display = 'block';
  document.getElementById('logout-btn').style.display = 'none'; // Logout-Button ausblenden
}

// Logout-Button hinzufügen
document.getElementById('logout-btn').addEventListener('click', logout);

// Funktion zum Laden aller Aufgaben (List)
function loadTasks() {
  const token = localStorage.getItem('token');

  fetch('http://10.72.4.41:3000/auth/jwt/tasks', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(response => response.json())
  .then(data => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';  // Liste leeren
    
    // Aufgaben durchgehen und auf der Seite anzeigen
    data.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task.title;

      // Bearbeiten-Button für jede Aufgabe
      const editButton = document.createElement('button');
      editButton.textContent = 'Bearbeiten';
      editButton.onclick = () => editTask(task.id);
      
      // Löschen-Button für jede Aufgabe
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Löschen';
      deleteButton.onclick = () => deleteTask(task.id);

      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Fehler beim Laden der Aufgaben:', error));
}

// Funktion zum Hinzufügen einer neuen Aufgabe (Create)
document.getElementById('task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('task-title').value;
  const token = localStorage.getItem('token');

  fetch('http://10.72.4.41:3000/auth/jwt/tasks', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  })
  .then(response => response.json())
  .then(data => {
    loadTasks();  // Liste neu laden, nachdem die Aufgabe hinzugefügt wurde
    document.getElementById('task-title').value = '';  // Eingabefeld leeren
  })
  .catch(error => console.error('Fehler beim Hinzufügen der Aufgabe:', error));
});

// Funktion zum Bearbeiten einer Aufgabe (Update)
function editTask(taskId) {
  const newTitle = prompt('Neuer Titel der Aufgabe:');
  if (!newTitle) return;

  const token = localStorage.getItem('token');
  fetch('http://10.72.4.41:3000/auth/jwt/tasks', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: taskId, title: newTitle })
  })
  .then(response => response.json())
  .then(data => {
    loadTasks();  // Aktualisierte Liste neu laden
  })
  .catch(error => console.error('Fehler beim Bearbeiten der Aufgabe:', error));
}

// Funktion zum Löschen einer Aufgabe (Delete)
function deleteTask(taskId) {
  const token = localStorage.getItem('token');

  fetch(`http://10.72.4.41:3000/auth/jwt/task/${taskId}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(() => {
    loadTasks();  // Liste neu laden, nachdem die Aufgabe gelöscht wurde
  })
  .catch(error => console.error('Fehler beim Löschen der Aufgabe:', error));
}

// Überprüfe, ob der Benutzer eingeloggt ist, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', checkLogin);
