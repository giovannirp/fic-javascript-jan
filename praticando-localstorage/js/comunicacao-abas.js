const nameInput = document.querySelector("#name-input");
const saveButton = document.querySelector("#save-name");
const nameDisplay = document.querySelector("#name-display");

// Função para exibir o nome salvo
 function displayName() {
    const saveName = localStorage.getItem("name");
    nameDisplay.textContent = saveName ? `Nome: ${saveName}` : "Nenhhum nome salvo";
 }

 // Salva o nome no LocalStorage
 saveButton.addEventListener("click", () => {
   const name = nameInput.value.trim();
   if (name) {
      localStorage.setItem("name", name);
      displayName();
   }

   console.log(name)
 });

 // Atualiza em tempo real quando outra aba modifica o nome
 window.addEventListener("storage", (event) => {
   if (event.key === "name") {
      displayName()
   }
 });

 //exibe o nome salvo ao carregar a página
 displayName();