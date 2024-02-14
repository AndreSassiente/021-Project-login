const emailLabel = document.getElementById("email-label");
const emailInput = document.getElementById("email-input");
const pwdLabel = document.getElementById("pwd-label");
const pwdInput = document.getElementById("pwd-input");



emailInput.addEventListener("focusin", () => {
  emailLabel.classList.add("up");
})

pwdInput.addEventListener("focusin", () => {
  pwdLabel.classList.add("up");
})



