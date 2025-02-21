// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPpsUBq6uTTvricRPKLCvhZ9snXYH1BV0",
  authDomain: "plantlog-2f4ff.firebaseapp.com",
  projectId: "plantlog-2f4ff",
  storageBucket: "plantlog-2f4ff.appspot.com",
  messagingSenderId: "225155618015",
  appId: "1:225155618015:web:5330d974c0dac88e0d056a",
  measurementId: "G-0MZ869Z4Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to handle user registration
function registerUser(event) {
  event.preventDefault();
  
  let email = document.getElementById("register-email").value;
  let password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration Successful!");
      window.location.href = "https://your-wordpress-site.com/home"; // Update with your actual homepage
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Function to handle user login
function loginUser(event) {
  event.preventDefault();
  
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      window.location.href = "https://your-wordpress-site.com/dashboard"; // Update with your actual dashboard/homepage
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Attach event listeners after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let registerForm = document.getElementById("register-form");
  let loginForm = document.getElementById("login-form");

  if (registerForm) registerForm.addEventListener("submit", registerUser);
  if (loginForm) loginForm.addEventListener("submit", loginUser);
});
