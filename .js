// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase Configuration (replace with your actual keys)
const firebaseConfig = {
  apiKey: "AIzaSyDPpsUBq6uTTvricRPKLCvhZ9snXYH1BV0",
  authDomain: "plantlog-2f4ff.firebaseapp.com",
  projectId: "plantlog-2f4ff",
  storageBucket: "plantlog-2f4ff.firebasestorage.app",
  messagingSenderId: "225155618015",
  appId: "1:225155618015:web:5330d974c0dac88e0d056a",
  measurementId: "G-0MZ869Z4Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "/home"; // Redirect
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Register Function
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registration Successful!");
            window.location.href = "/home"; // Redirect
        })
        .catch((error) => {
            alert(error.message);
        });
});
