document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = sanitizeName(document.getElementById('name').value.trim());
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (validateName(name) && validateEmail(email) && validatePassword(password, confirmPassword)) {
            // Save to local storage
            saveToLocalStorage('name', name);
            saveToLocalStorage('email', email);

            alert('Your account has been created and your details are saved.');
            window.location.href = "signupsucess.html";
        } else {
            alert('Please fill the form correctly');
        }
    });

    // Prefill the input fields if data exists in local storage
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');

    if (savedName) {
        document.getElementById('name').value = savedName;
    }

    if (savedEmail) {
        if (validateEmail(savedEmail)) {
            document.getElementById('email').value = savedEmail;
        } else {
            console.error('Invalid email format retrieved from local storage:', savedEmail);
            localStorage.removeItem('email'); // Remove invalid email
        }
    }
});

// Helper function to validate name
function validateName(name) {
    return name.length > 0; // Simple validation for non-empty name
}

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate password
function validatePassword(password, confirmPassword) {
    return password.length >= 6 && password === confirmPassword;
}

// Helper function to sanitize name
function sanitizeName(name) {
    return name.replace(/[^a-zA-Z\s'.-]/g, '');
}

// Helper function to save to local storage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to save to local storage:', error);
    }
}
