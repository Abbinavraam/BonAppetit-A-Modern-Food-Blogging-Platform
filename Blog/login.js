// // Get elements
// const loginForm = document.getElementById('loginForm');
// const signupForm = document.getElementById('signupForm');
// const showSignup = document.getElementById('showSignup');
// const showLogin = document.getElementById('showLogin');

// // Toggle to Signup Form
// showSignup.addEventListener('click', () => {
//     loginForm.classList.add('hidden');
//     signupForm.classList.remove('hidden');
// });

// // Toggle to Login Form
// showLogin.addEventListener('click', () => {
//     signupForm.classList.add('hidden');
//     loginForm.classList.remove('hidden');
// });

// // Form Submission (Example)
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert(`Logged in as ${document.getElementById('loginEmail').value}`);
// });

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert(`Account created for ${document.getElementById('signupName').value}`);
// });


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (validateEmail(email) && password.length > 0) {
            // Save to local storage
            saveToLocalStorage('email', email);
            alert('Your order is confirmed and your details are saved.');
            window.location.href = "regis.html" ;
        } else {
            alert('Please fill the form correctly');
        }
    });

    const showSignup = document.getElementById('showSignup');
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "signup.html";
    });

    // Prefill the input fields if data exists in local storage
    const savedEmail = localStorage.getItem('email');

    if (savedEmail) {
        if (validateEmail(savedEmail)) {
            document.getElementById('loginEmail').value = savedEmail;
        } else {
            console.error('Invalid email format retrieved from local storage:', savedEmail);
            localStorage.removeItem('email'); 
        }
    }
});

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to save to local storage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to save to local storage:', error);
    }
}

