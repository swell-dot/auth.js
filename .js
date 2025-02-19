// Login Function
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "/home"; // Redirect after login
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Register Function
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Registration Successful!");
            window.location.href = "/home"; // Redirect after registration
        })
        .catch((error) => {
            alert(error.message);
        });
});
