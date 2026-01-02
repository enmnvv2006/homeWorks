// Instagram Login Page - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.querySelector('.btn-login');
    const showPasswordBtn = document.querySelector('.show-password');

    // Password show/hide toggle
    if (showPasswordBtn && passwordInput) {
        showPasswordBtn.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                showPasswordBtn.textContent = 'Скрыть';
            } else {
                passwordInput.type = 'password';
                showPasswordBtn.textContent = 'Показать';
            }
        });
    }

    // Check form validity
    function checkFormValidity() {
        const isValid = usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '';
        loginBtn.disabled = !isValid;
        loginBtn.style.opacity = isValid ? '1' : '0.5';
    }

    usernameInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);

    // Initial state
    checkFormValidity();

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        loginBtn.textContent = 'Вход...';
        loginBtn.disabled = true;

        setTimeout(() => {
            alert('Добро пожаловать в Instagram!');
            loginBtn.textContent = 'Войти';
            loginBtn.disabled = false;
            form.reset();
            checkFormValidity();
        }, 1500);
    });
});

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

login = usernameInput.addEventListener('input', () => {
    console.log(usernameInput.value);
});
parol = passwordInput.addEventListener('input', () => {
    console.log(passwordInput.value);
});


