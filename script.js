const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);
  strengthText.textContent = "Strength: "+strength.text;
  strengthText.style.color = strength.color;
});

function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length === 0) {
    return { text: "", color: "black" };
  } else if (score <= 2) {
    return { text: "Weak", color: "red" };
  } else if (score === 3 || score === 4) {
    return { text: "Moderate", color: "orange" };
  } else {
    return { text: "Strong", color: "green" };
  }
}