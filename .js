// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// ✅ Firebase Configuration
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
const auth = getAuth(app);

// ✅ Set Persistent Authentication (Fixes Incognito Mode Issues)
setPersistence(auth, browserLocalPersistence)
  .then(() => alert("🔥 Auth persistence enabled"))
  .catch(error => alert("⚠️ Auth persistence error: " + error.message));

// 🔹 Function to handle user registration
function registerUser(event) {
  event.preventDefault();

  let email = document.getElementById("register-email").value.trim();
  let password = document.getElementById("register-password").value.trim();
  
  if (!email || !password) {
    alert("⚠️ Please enter a valid email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Registration Successful!");
      window.location.assign("https://your-wordpress-site.com/home");
    })
    .catch((error) => {
      alert("❌ Registration Error: " + formatFirebaseError(error.code));
    });
}

// 🔹 Function to handle user login
function loginUser(event) {
  event.preventDefault();

  let email = document.getElementById("login-email").value.trim();
  let password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    alert("⚠️ Please enter a valid email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login Successful!");
      window.location.assign("https://your-wordpress-site.com/dashboard");
    })
    .catch((error) => {
      alert("❌ Login Error: " + formatFirebaseError(error.code));
    });
}

// 🔹 Format Firebase Errors for Better User Experience
function formatFirebaseError(errorCode) {
  const errorMessages = {
    "auth/email-already-in-use": "This email is already registered. Try logging in instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Your password must be at least 6 characters long.",
    "auth/user-not-found": "No account found with this email. Please check your email or register.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/too-many-requests": "Too many failed attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Check your connection and try again."
  };
  return errorMessages[errorCode] || "An unknown error occurred. Please try again.";
}

// 🔹 Ensure buttons are enabled (Fixes Incognito Mode Issues)
document.addEventListener("DOMContentLoaded", function () {
  let registerForm = document.getElementById("register-form");
  let loginForm = document.getElementById("login-form");

  if (registerForm) {
    registerForm.addEventListener("submit", registerUser);
    document.getElementById("register-button").disabled = false;  // Force enable
  }
  
  if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
    document.getElementById("login-button").disabled = false;  // Force enable
  }
});
