const nameInput = document.querySelector("#name-input");
const ageInput = document.querySelector("#age-input");
const saveButton = document.querySelector("#save-data");
const clearButton = document.querySelector("#clear-data");
const dataDisplay = document.querySelector("#data-display");

// função para exibir os dados salvos
function displayData() {
   const name = localStorage.getItem("name");
   const age = localStorage.getItem("age");

   if (name && age) {
    dataDisplay.textContent = `Nome: ${name}, Idade: ${age}`;
   } else {
    dataDisplay.textContent = "Nenhum dado encontrado";
   }
}

// salva os dados no localStorage
saveButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name && age) {
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        displayData();
    }
});

// Limpa todos os dados do lacalStorage
clearButton.addEventListener("click", () => {
    localStorage.clear();
    displayData();
})

// Exibe os dados ao carregar a página
displayData();