let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Die generierte Zufallszahl ist: " + randomNumber);

let guess = null;
while (guess !== randomNumber) {
    guess = parseInt(prompt("Errate eine Zahl zwischen 1 und 100:"));

    if (isNaN(guess)) {
        alert("Bitte gib eine gültige Zahl ein!");
        continue; 
    }

    if (guess > randomNumber) {
        alert("Zu hoch! Versuche es nochmal.");
    } else if (guess < randomNumber) {
        alert("Zu niedrig! Versuche es nochmal.");
    } else {
        alert("Herzlichen Glückwunsch! Du hast die Zahl erraten.");
        break; 
    }
}
