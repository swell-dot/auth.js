// Firebase Authentication Setup
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Login Successful!");
                window.location.href = "/home"; // Redirect to home page
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Register Function
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("register-email").value;
        let password = document.getElementById("register-password").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Registration Successful!");
                window.location.href = "/home"; // Redirect to home page
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

