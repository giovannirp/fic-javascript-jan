const productNameInput = document.querySelector("#product-name");
const productPriceInput = document.querySelector("#product-price");
const addButton = document.querySelector("#add-product");
const cartList = document.querySelector("#cart-list");

// Recupera os produtos do localStorage ou inicializa um array vazio
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Função para exibir os produtos na tela
function renderCart() {
  cartList.innerHTML = ""; // Limpa a lista antes de renderizar
  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        ${product.nome} - R$ ${product.preco} 
        <button class="remove" data-index="${index}">Remover</button>    
    `;
    cartList.appendChild(li);
  });
}

// Adiciona um novo produto ao carrinho
addButton.addEventListener("click", () => {
  const nome = productNameInput.value.trim();
  const preco = parseFloat(productPriceInput.value.trim());

  if (nome && !isNaN(preco)) {
    cart.push({ nome, preco }); // Adiciona ao array
    localStorage.setItem("cart", JSON.stringify(cart)); // salva no localstorage
    productNameInput.value = ""; // Limpa o input
    productPriceInput.value = "";

    console.log(cart)
    renderCart();
  }
});

// Renderiza o carrinho ao carregar a página
renderCart();
