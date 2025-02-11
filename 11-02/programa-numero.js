/*
    - Verifica se o número é positivo, negativo ou zero
    se número for maior que zero, é positivo
    se o número for menor que zero, é negativo
    senão o número não é válido
*/
let numero = prompt("Digite um número");

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
    document.write(`o número ${numero} é positivo`);
} else if (numero < 0) {
    document.write(`o número ${numero} é negativo `);
} else {
    document.write(`O número ${numero}, não é válido`);
}