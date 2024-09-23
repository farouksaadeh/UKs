const form = document.getElementById('friendForm');
const summaryDiv = document.getElementById('summary');
const summaryContent = document.getElementById('summaryContent');
const friendList = document.getElementById('friendList');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const street = document.getElementById('street').value;
    const zip = document.getElementById('zip').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const duSie = document.getElementById('duSie').checked ? 'Du' : 'Sie';
    const relation = document.querySelector('input[name="relation"]:checked').value;

    summaryContent.innerHTML = `
        <strong>Name:</strong> ${firstName} ${lastName}<br>
        <strong>Adresse:</strong> ${street}, ${zip} ${city}<br>
        <strong>Email:</strong> <a href="mailto:${email}">${email}</a><br>
        <strong>Anrede:</strong> ${duSie}<br>
        <strong>Beziehung:</strong> ${relation}
    `;

    summaryDiv.classList.remove('hidden');
});

document.getElementById('addToFriendList').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const street = document.getElementById('street').value;
    const zip = document.getElementById('zip').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const duSie = document.getElementById('duSie').checked ? 'Du' : 'Sie';
    const relation = document.querySelector('input[name="relation"]:checked').value;

    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>${street}<br>${zip} ${city}</p>
        <a href="mailto:${email}">${email}</a><br>
        <p><strong>Anrede:</strong> ${duSie}</p>
        <p><strong>Beziehung:</strong> ${relation}</p>
        <button class="deleteFriend">Löschen</button>
    `;

    friendList.appendChild(newFriend);

    newFriend.querySelector('.deleteFriend').addEventListener('click', function() {
        newFriend.remove();
    });

    summaryDiv.classList.add('hidden');
    form.reset();
});

document.getElementById('cancel').addEventListener('click', function() {
    summaryDiv.classList.add('hidden');
});

document.querySelectorAll('.deleteFriend').forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.closest('.friend').remove();
    });
});
