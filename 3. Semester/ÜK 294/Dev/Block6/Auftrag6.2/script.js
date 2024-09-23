const form = document.getElementById('passwordForm');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const errorPassword1 = document.getElementById('error-password1');
const errorPassword2 = document.getElementById('error-password2');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    if (password1.value.length < 8) {
        errorPassword1.style.display = 'block';
        valid = false;
    } else {
        errorPassword1.style.display = 'none';
    }

    if (password1.value !== password2.value) {
        errorPassword2.style.display = 'block';
        valid = false;
    } else {
        errorPassword2.style.display = 'none';
    }

    if (valid) {
        alert("Erfolgreich gesendet!");
        form.submit(); 
    }
});
