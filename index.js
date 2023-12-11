// Function to handle form submission
function handleLoginFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get values from the input fields
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const keepLoggedIn = document.getElementById('keepLoggedIn').checked;

    // Check if entered credentials are valid
    if (areCredentialsValid(enteredUsername, enteredPassword)) {
        alert('Logged in!'); // Display a success message

        // Save credentials to local storage if "Keep Me logged in" is checked
        if (keepLoggedIn) {
            saveCredentialsToLocalstorage(enteredUsername, enteredPassword);
        }

        // Redirect to home.html after successful login
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password'); // Display an error message
    }
}

// Function to handle fingerprint click
function handleFingerprintClick() {
    alert('Fingerprint scanned!'); // Display a message indicating fingerprint scanning
}

// Function to check if entered credentials are valid
function areCredentialsValid(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    return username === storedUsername && password === storedPassword;
}

// Function to save credentials to local storage
function saveCredentialsToLocalstorage(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Event listeners for form submission and fingerprint click
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmission);
document.getElementById('fingerprint').addEventListener('click', handleFingerprintClick);
