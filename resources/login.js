document.getElementById("show-password").addEventListener("change", function() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Check if username and password are correct
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Nyzo0310" && password === "Earl0310") {
        // Redirect to the next page
        window.location.href = "dashboard.html";
    } else {
        // Show a message indicating invalid credentials
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
    }
});

// Clear error message when the user starts typing again
document.getElementById("username").addEventListener("input", function() {
    document.getElementById("errorMessage").textContent = "";
});

document.getElementById("password").addEventListener("input", function() {
    document.getElementById("errorMessage").textContent = "";
});