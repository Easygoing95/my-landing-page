// script.js

// Function to validate email
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Handle form submission
document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    if (isValidEmail(email)) {
        saveEmail(email);
        emailInput.value = ''; // Clear input field
        alert('Email saved successfully!');
    } else {
        alert('Please enter a valid email address.');
    }
});

// Save email to localStorage
function saveEmail(email) {
    let waitlist = JSON.parse(localStorage.getItem('waitlist')) || [];
    waitlist.push(email);
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
}
