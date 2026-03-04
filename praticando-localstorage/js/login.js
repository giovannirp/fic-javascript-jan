const loginForm = document.querySelector("#login-form");
const userNameInput = document.querySelector("#username");
const passWordInput = document.querySelector("#password");
const loginButton = document.querySelector("#login-btn");

const welcomeMessage = document.querySelector("#welcome-message");
const userWelcome = document.querySelector("#user-welcome");
const logoutButton = document.querySelector("#logout-btn");

function checkLogin() {
  const user = localStorage.getItem("user");

  if (user) {
    loginForm.classList.add("hidden");
    welcomeMessage.classList.remove("hidden");
    userWelcome.textContent = `Bem-vindo, ${user}!`;
  } else {
    loginForm.classList.remove("hidden");
    welcomeMessage.classList.add("hidden");
  }
}

// Login do usuário
loginButton.addEventListener("click", () => {
  const username = userNameInput.value.trim();
  const password = passWordInput.value.trim(); // Senha não é validada no exemplo

  if (username && password) {
    localStorage.setItem("user", username);
    checkLogin();
  }

});

// Logout do usuário
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  checkLogin()
});

// Verifica o login ao carregar a página
checkLogin();