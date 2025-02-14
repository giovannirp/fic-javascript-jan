// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event) {
    // previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    // condição
    if (inputNota.value >=6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
    
    inputNota.value = "";
}