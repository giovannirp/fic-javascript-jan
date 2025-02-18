// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

function resultadoNotaClick(event) {
    // previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    // Validação de formulário
    if (inputNota.value === "") {
        message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    // condição
    if (inputNota.value >=6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
    
    inputNota.value = "";
}