// Test 1: Überprüfen, ob Login korrekt funktioniert
function testLogin() {
    const email = "test@example.com";
    const password = "m294";
    
    fetch('http://10.72.4.41:3000/auth/jwt/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      console.assert(data.token !== undefined, "Login Test fehlgeschlagen!");
      console.log("Login Test erfolgreich");
    })
    .catch(error => console.error("Login Test Fehler:", error));
  }
  
  // Test 2: Überprüfen, ob Aufgabenliste geladen wird
  function testLoadTasks() {
    const token = "hier-dein-token";  // Verwende ein gültiges Token
  
    fetch('http://10.72.4.41:3000/auth/jwt/tasks', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => response.json())
    .then(data => {
      console.assert(Array.isArray(data), "Tasks Test fehlgeschlagen!");
      console.log("Tasks Test erfolgreich");
    })
    .catch(error => console.error("Tasks Test Fehler:", error));
  }
  
  // Tests ausführen
  testLogin();
  testLoadTasks();
  