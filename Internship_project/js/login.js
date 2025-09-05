const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");

let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  if (isLogin) {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login";
    toggleText.innerHTML =
      `Don't have an account? <span class="toggle-link" onclick="toggleForm()">Sign Up</span>`;
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Sign Up";
    toggleText.innerHTML =
      `Already have an account? <span class="toggle-link" onclick="toggleForm()">Login</span>`;
  }
  clearErrors();
}

function clearErrors() {
  document.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  let valid = true;

  if (name.length < 3) {
    document.getElementById("signupNameError").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  }

  if (!isValidEmail(email)) {
    document.getElementById("signupEmailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("signupPasswordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }
   if (password !== confirmPassword) {
  document.getElementById("signupConfirmPasswordError").textContent = "Passwords do not match.";
  valid = false;
 }

if (!valid) return;

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful! You can now log in.");
  toggleForm();
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  let valid = true;

  if (!isValidEmail(email)) {
    document.getElementById("loginEmailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("loginPasswordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  if (!valid) return;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInName", savedUser.name);
    alert(`Welcome back, ${savedUser.name}!`);
    window.location.href = "index.html"; // redirect to homepage
  } else {
    alert("Invalid email or password.");
  }
});
