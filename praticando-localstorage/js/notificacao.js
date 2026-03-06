const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-btn");
const messageDisplay = document.querySelector("#message-display");

// Carrega a última mensagem salva (caso exista)
const savedMessage = localStorage.getItem("latestMessage");
if(savedMessage) {
  messageDisplay.textContent = savedMessage;
}

// Enviar messagem e armazeanar no localStorage
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    localStorage.setItem("latestMessage", message);
    messageDisplay.textContent = message;
    messageInput.value = ""; // Limpa o input
  }
});

// Atualiza automaticamente em outras abas
window.addEventListener("storage", (event) => {
  if (event.key === "latestMessage") {
    messageDisplay.textContent = event.newValue || "Nenhuma mensagem enviada.";
  }
});