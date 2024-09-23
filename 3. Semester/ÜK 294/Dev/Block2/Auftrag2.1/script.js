let newReleases = document.querySelectorAll('ul.games:nth-of-type(1) > li');
newReleases.forEach((newRelease) => {
    console.log(newRelease.textContent)
}) 

let secondTopSeller = document.querySelector('h2:nth-of-type(2) + ul.games > li:nth-child(2)');
console.log(secondTopSeller.textContent);

let lastFreeGame = document.querySelector('h2:nth-of-type(3) + ul.games > li:last-child');
console.log(lastFreeGame.textContent);

let topSellersGames = document.querySelectorAll('h2:nth-of-type(2) + ul.games > li');
topSellersGames.forEach(game => console.log(game.textContent));

let header = document.querySelector('h1');
console.log(header.textContent);

let gameOfTheDay = document.querySelector('#game-of-the-day');
console.log(gameOfTheDay.textContent);

let saleGames = document.querySelectorAll('.sale');
saleGames.forEach(game => console.log(game.textContent));



