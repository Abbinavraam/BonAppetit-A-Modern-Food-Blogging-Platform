
// const button = document.getElementById('btn');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     // Get the values from the input fields
//     const name = document.querySelector('input[name="first name"]').value.trim();
//     const email = document.querySelector('input[type="email"]').value.trim();

//     // Validate the inputs
//     if (name && validateEmail(email)) {
//         alert('Your order is confirmed');
//     } else {
//         alert('Please fill the form correctly');
//     }
// });

// // Helper function to validate email
// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }



// const butto = document.getElementById('bttn');

// // Add a click event listener to the button
// butto.addEventListener('click', () => {
//     // Get the values from the input fields
//     const name = document.querySelector('input[name="first name"]').value.trim();
//     const email = document.querySelector('input[type="email"]').value.trim();

//     // Validate the inputs
//     if (name && validateEmail(email)) {
//         alert('You have successfully signed up for email updates');
//     } else {
//         alert('Please fill the form correctly');
//     }
// });

// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }


// Local Storage Logic
// document.getElementById('btn').addEventListener('click', function () {
//     const firstName = document.getElementById('first name').value;
//     const email = document.getElementById('email').value;

//     // Save to Local Storage
//     if (firstName && email) {
//         localStorage.setItem('firstName', firstName);
//         localStorage.setItem('email', email);
//         alert('Sign-up Successful! Your details are saved.');
//     } else {
//         alert('Please fill out both fields.');
//     }
// });

// // Prefill form if data exists in Local Storage
// window.onload = function () {
//     const savedFirstName = localStorage.getItem('firstName');
//     const savedEmail = localStorage.getItem('email');

//     if (savedFirstName) {
//         document.getElementById('first-name').value = savedFirstName;
//     }
//     if (savedEmail) {
//         document.getElementById('email').value = savedEmail;
//     }
// };

// // Footer Sign-up Button
// document.getElementById('bttn').addEventListener('click', function () {
//     const footerFirstName = document.getElementById('first name').value;
//     const footerEmail = document.getElementById('email').value;

//     // Save to Local Storage
//     if (footerFirstName && footerEmail) {
//         localStorage.setItem('firstName', footerFirstName);
//         localStorage.setItem('email', footerEmail);
//         alert('Details saved successfully!');
//     } else {
//         alert('Please fill out both fields.');
//     }
// });

// Select the first button and add a click event listener
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    // Get the values from the input fields
    const name = document.querySelector('input[name="first name"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();

    // Validate the inputs
    if (name && validateEmail(email)) {
        // Save to local storage
        localStorage.setItem('firstName', name);
        localStorage.setItem('email', email);

        alert('Your order is confirmed and your details are saved.');
    } else {
        alert('Please fill the form correctly');
    }
});

// Select the second button and add a click event listener
const butto = document.getElementById('bttn');

butto.addEventListener('click', () => {
    // Get the values from the input fields
    const name = document.querySelector('input[name="first name"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();

    // Validate the inputs
    if (name && validateEmail(email)) {
        // Save to local storage
        localStorage.setItem('firstName', name);
        localStorage.setItem('email', email);

        alert('You have successfully signed up for email updates, and your details are saved.');
    } else {
        alert('Please fill the form correctly');
    }
});

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Prefill the input fields if data exists in local storage
window.onload = function () {
    const savedName = localStorage.getItem('firstName');
    const savedEmail = localStorage.getItem('email');

    if (savedName) {
        document.querySelector('input[name="first name"]').value = savedName;
    }

    if (savedEmail) {
        document.querySelector('input[type="email"]').value = savedEmail;
    }
};