const apagarBtn = document.getElementById("apagar");

apagarBtn.addEventListener("click", function() {
    // Limpa todos os valores
    localStorage.clear();

    // limpa a lista na interface
    listaValores.innerHTML = "";
})