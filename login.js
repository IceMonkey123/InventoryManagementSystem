// Handle login form submission
document.querySelector('.sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector('.sign-in-form input[type="text"]').value;
    const password = document.querySelector('.sign-in-form input[type="password"]').value;

    // Define simple username and password (static values for simplicity)
    const storedUsername = 'admin';   // Pre-defined username
    const storedPassword = 'admin';  // Pre-defined password

    // Check if the entered username and password match the stored ones
    if (username === storedUsername && password === storedPassword) {
      // Store login state in localStorage
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');
      window.location.href = 'index.html';  // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }

    // If already logged in, redirect to dashboard
    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = 'index.html'; // Redirect to dashboard if already logged in
    }
});
