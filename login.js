// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const alertContainer = document.getElementById('alertContainer');

    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
        return;
    }

    // Demo credentials
    const validCredentials = {
        username: 'arjay',
        password: 'arjay123'
    };

    // Show alert message
    function showAlert(message, type) {
        const alertHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <i class="bi bi-${type === 'danger' ? 'exclamation-circle' : 'check-circle'} me-2"></i>
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        alertContainer.innerHTML = alertHTML;
    }

    // Handle login
    function handleLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate inputs
        if (!username || !password) {
            showAlert('Please enter both username and password.', 'danger');
            return;
        }

        // Check credentials
        if (username === validCredentials.username && password === validCredentials.password) {
            // Store user data in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            localStorage.setItem('loginTime', new Date().toISOString());
            
            showAlert('Login successful! Redirecting...', 'success');
            
            // Redirect to dashboard after a short delay
            setTimeout(function() {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            showAlert('Invalid username or password. Try admin / password123', 'danger');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    // Event listeners
    loginBtn.addEventListener('click', handleLogin);

    // Allow login with Enter key
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });

    // Clear alert on input focus
    usernameInput.addEventListener('focus', function() {
        alertContainer.innerHTML = '';
    });

    passwordInput.addEventListener('focus', function() {
        alertContainer.innerHTML = '';
    });
});