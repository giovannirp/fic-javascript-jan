const visitContText = document.querySelector("#visit-count");
const resetButton = document.querySelector("#reset-btn");

// Recupera o contador ou inicia em 0
let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;

// Incrementa o contador e salva no localStorage
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Atualiza o texto na tela
visitContText.textContent = `Você visitou esta página ${visitCount} vezes.`;

// Zerar o contador ao clicar no botão
resetButton.addEventListener("click", () => {
  localStorage.setItem("visitCount", 0)
  visitContText.textContent = "Você visitou esta página 0 vezes";
})