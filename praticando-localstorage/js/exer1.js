let nome = prompt("Digite seu nome:");

// Salva o nome no local storage
localStorage.setItem("nome", nome);

// Recupera e exibe o nome salvo
let nomeSalvo = localStorage.getItem("nome");
console.log("Nome salvo: ", nomeSalvo);