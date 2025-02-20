document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    nameInput.classList.remove('is-invalid');
    mobileInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        if (!nameInput.value) nameInput.classList.add('is-invalid');
        if (!mobileInput.value) mobileInput.classList.add('is-invalid');
        if (!emailInput.value) emailInput.classList.add('is-invalid');
        if (!passwordInput.value) passwordInput.classList.add('is-invalid');
        return;
    }

    const name = nameInput.value;
    const mobile = mobileInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        emailInput.classList.add('is-invalid');
    } else {
        users.push({ name, mobile, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';
    }
});


document.getElementById('name').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});
document.getElementById('mobile').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});
document.getElementById('email').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});
document.getElementById('password').addEventListener('input', function() {
    this.classList.remove('is-invalid');
});