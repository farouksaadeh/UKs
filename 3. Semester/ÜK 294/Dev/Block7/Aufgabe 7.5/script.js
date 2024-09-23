document.getElementById('commentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const tokenResponse = await fetch('http://10.72.4.26/challenges/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const token = tokenResponse.headers.get("Authorization"); 

    const commentResponse = await fetch('http://10.72.4.26/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token 
        },
        body: JSON.stringify({ message, username })
    });

    if (commentResponse.ok) {
        console.log("Kommentar erfolgreich gesendet.");
    } else {
        console.error("Fehler beim Senden des Kommentars.");
    }
});
