document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#add8e6', '#ffcccb', '#90ee90', '#f0e68c', '#dda0dd', '#ffdead', '#87ceeb', '#ffa07a', '#778899', '#ffb6c1'];
    
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    var h1Element = document.querySelector('h1');
    h1Element.textContent = 'Farouk Saadeh';

    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('.large { font-size: 2em; }', 0);

    var pElement = document.querySelector('p');
    pElement.classList.add('large');

    var ulElement = document.querySelector('ul');
    var newLi = document.createElement('li');
    newLi.textContent = 'Neuer Listeneintrag';
    ulElement.appendChild(newLi);

    var secondLi = ulElement.children[1];
    if (secondLi) {
        secondLi.remove();
    }

    var imgElement = document.createElement('img');
    imgElement.src = 'https://i.imgflip.com/57c2if.png?a479544';
    imgElement.alt = 'Beispielbild';
    imgElement.style.width = '150px';
    imgElement.style.height = '150px';
    h1Element.after(imgElement);

    const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

    listItems.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        ulElement.appendChild(li);
    });
});
