let name = prompt ("Wie heisst du?");
let date = new Date ();
let hour = date.getHours();

if (hour >= 5 && hour < 12) {
    alert("Guten Morgen, " + name + "!");
} else if (hour >= 12 && hour < 18) {
    alert("Guten Tag, " + name + "!");
} else if (hour >= 18 && hour < 22) {
    alert("Guten Abend, " + name + "!");
} else {
    alert("Gute Nacht, ") + name + "!"
}