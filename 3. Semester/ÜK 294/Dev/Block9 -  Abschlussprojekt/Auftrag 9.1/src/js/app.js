document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem('token');
  
  if (token) {
    // Wenn der Benutzer eingeloggt ist, zeige den Aufgabenbereich und lade die Aufgaben
    document.getElementById('task-container').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    checkUrlForTaskId();  // Überprüfen, ob eine taskId in der URL vorhanden ist
  } else {
    // Zeige das Login-Formular an, falls der Benutzer nicht eingeloggt ist
    document.getElementById('task-container').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }
});
