function authenticate() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        window.location.href = "./../index.html";
        return true; // Indicate successful login
    } else {
        alert("Invalid username or password");
        return false; // Indicate failed login
    }
}

// Export the function for testing
module.exports = { authenticate };
