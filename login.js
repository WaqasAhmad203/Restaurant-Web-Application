document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleFormLink = document.getElementById('toggle-form-link');
    const forgotPassword = document.getElementById('forgot-password-link');
    const rememberMe = document.getElementById('remember-me');
    const labelRememberMe = document.getElementById('label-remeber-me');
    const formText = document.getElementById('form-text');
    toggleFormLink.addEventListener('click', function () {
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'flex';
            labelRememberMe.style.display = 'inline';
            rememberMe.style.display = 'inline-block';
            forgotPassword.style.display = 'inline';
            signupForm.style.display = 'none';
            document.querySelector('#auth-form h2').textContent = 'Login';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'flex';
            forgotPassword.style.display = 'none';
            rememberMe.style.display = 'none';
            labelRememberMe.style.display = 'none';
            formText.style.display = 'none'
            document.querySelector('#auth-form h2').textContent = 'Signup';
        }
    });
    const signupFormSubmit = document.getElementById('signup-form-submit');

    signupFormSubmit.addEventListener('click', function (event) {
        event.preventDefault();

       
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('All fields must be filled out');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        
        alert('Form submitted successfully!');
        
    });
});