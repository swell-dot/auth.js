// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// ✅ New Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBisU1Zs8Bh001KLW39eJK8OAkaP_iLUrE",
  authDomain: "plant-44faa.firebaseapp.com",
  projectId: "plant-44faa",
  storageBucket: "plant-44faa.appspot.com",
  messagingSenderId: "875256433814",
  appId: "1:875256433814:web:31ddbba064a296caec46b7",
  measurementId: "G-4X8RF8VYL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// 🔹 Function to handle user registration
function registerUser(event) {
  event.preventDefault();
  
  let email = document.getElementById("register-email").value;
  let password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration Successful! Redirecting...");
      window.location.href = "https://your-wordpress-site.com/home"; // Update with actual homepage
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 🔹 Function to handle user login
function loginUser(event) {
  event.preventDefault();
  
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful! Redirecting...");
      window.location.href = "https://your-wordpress-site.com/dashboard"; // Update with actual dashboard URL
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Attach event listeners once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let registerForm = document.getElementById("register-form");
  let loginForm = document.getElementById("login-form");

  if (registerForm) registerForm.addEventListener("submit", registerUser);
  if (loginForm) loginForm.addEventListener("submit", loginUser);
});
