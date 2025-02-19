// Obtém os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variável resultado
const resultado = document.getElementById("resultado");

// Função para fazer a soma
function somar(event) {
    event.preventDefault();
    
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);
    resultado.innerHTML = resultadoSoma;
}

// Função para sub
function sub(event) {
    event.preventDefault();
    let resultaSub = Number(valor1.value) - Number(valor2.value);
    resultado.innerHTML = resultaSub;
}

// Função mult
// Função Div