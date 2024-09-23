const counterDisplay = document.getElementById('counter');
let counter = 0;

function updateCounter() {
    counterDisplay.textContent = counter;
    history.pushState({ counter }, '', `?counter=${counter}`);
}

document.getElementById('increment').onclick = () => { counter++; updateCounter(); };
document.getElementById('decrement').onclick = () => { counter--; updateCounter(); };

window.onpopstate = (e) => { if (e.state) counterDisplay.textContent = e.state.counter; };

const savedCounter = new URLSearchParams(window.location.search).get('counter');
if (savedCounter) { counter = parseInt(savedCounter); updateCounter(); }
