let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

let listItems = document.querySelectorAll('ul.games li');
listItems.forEach(function(item) {
  if (item.textContent === 'Grand Theft Auto V') {
    item.textContent = sum;
  }
});
