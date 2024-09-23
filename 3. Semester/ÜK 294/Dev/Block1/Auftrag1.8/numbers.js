let numbers = [];
let input;

while (true) {
    input = prompt("Gib eine Zahl ein (oder leer lassen, um zu beenden:");
    if (input === "") break;
    let number = Number(input);
    if (isNaN(number)) {
        alert("Das ist keine gültige Zahl. Bitte gib eine Zahl ein.");
    } else {
        numbers.push(number);
    }
}

let operation = prompt("Welche Operation möchtest du durchführen? (+, -, *, /)");

let result;
if (operation === "+") {
    result = numbers.reduce((a, b) => a + b, 0); // Addition
} else if (operation === "-") {
    result = numbers.reduce((a, b) => a - b); // Subtraktion
} else if (operation === "*") {
    result = numbers.reduce((a, b) => a * b); // Multiplikation
} else if (operation === "/") {
    result = numbers.reduce((a, b) => a / b); // Division
} else {
    alert("Ungültige Operation!"); 
}

// Ergebnis anzeigen

alert("Das Ergebnis ist: " + result);