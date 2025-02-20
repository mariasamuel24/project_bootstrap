document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        if (!emailInput.value) {
            emailInput.classList.add('is-invalid');
        }
        if (!passwordInput.value) {
            passwordInput.classList.add('is-invalid');
        }
        return;
    }

    const email = emailInput.value;
    const password = passwordInput.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.href = 'index.html';
    } else {

        if (!users.find(u => u.email === email)) {
            emailInput.classList.add('is-invalid');
        }
        if (!users.find(u => u.password === password)) {
            passwordInput.classList.add('is-invalid');
        }
    }
});

document.getElementById('email').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});
document.getElementById('password').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});