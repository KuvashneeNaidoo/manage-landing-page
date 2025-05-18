const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// form error
const emailInput = document.getElementById("emailInput");
const errorText = document.getElementById("errorText");
const form = document.getElementById("emailForm");

function validateEmail(email) {
  return email.includes("@");
}

emailInput.addEventListener("input", () => {
  if (validateEmail(emailInput.value)) {
    errorText.classList.add("hidden");
    emailInput.classList.remove("border-red-500");
  } else {
    errorText.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
  }
});

form.addEventListener("submit", (e) => {
  if (!validateEmail(emailInput.value)) {
    errorText.classList.remove("hidden");
    emailInput.classList.add("border-red-500");
    e.preventDefault();
  }
});
