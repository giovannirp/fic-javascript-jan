// Variável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt-email");

function mudar(event) {
    event.preventDefault();

    // Validação de formulário
    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("Preencha o campo!");
        return false;
    }

    // Imprimir na tela
    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtEmail.innerHTML = email.value;

    // Limpar os campos
    nome.value = "";
    cidade.value = "";
    email.value = "";

}

// Outra função
function mudarCor() {
    if (document.body.style.backgroundColor === "orange") {
        document.body.style.backgroundColor = ""; // Volta para a cor Padrão
    } else {
        document.body.style.backgroundColor = "orange"
    }
   
}

