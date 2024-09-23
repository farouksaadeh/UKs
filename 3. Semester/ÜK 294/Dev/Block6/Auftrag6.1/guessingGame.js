let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Die generierte Zufallszahl ist: " + randomNumber);

const form = document.getElementById('guessingForm');
const guessInput = document.getElementById('guess');
const messageElement = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        messageElement.textContent = "Bitte gib eine gültige Zahl ein!";
        return;
    }

    if (guess > randomNumber) {
        messageElement.textContent = "Zu hoch! Versuche es nochmal.";
    } else if (guess < randomNumber) {
        messageElement.textContent = "Zu niedrig! Versuche es nochmal.";
    } else {
        messageElement.textContent = "Herzlichen Glückwunsch! Du hast die Zahl erraten.";
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Neue Zufallszahl: " + randomNumber);
    }
});
