const animateBtn = document.getElementById('animate-btn');
const animatedBox = document.getElementById('animated-box');

const barrelRollBtn = document.getElementById('barrel-roll-btn');
const bodyElement = document.body;

animateBtn.addEventListener('click', () => {
    animatedBox.classList.toggle('animate');
});

barrelRollBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('barrel-roll');
});
