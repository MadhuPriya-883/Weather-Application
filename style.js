<!-- JavaScript for login.html -->
<script>
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Replace with your authentication logic
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example validation (replace with your logic)
        if (username === 'yourusername' && password === 'yourpassword') {
            // Redirect to the weather application page
            window.location.href = 'weather.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
</script>