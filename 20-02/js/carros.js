const cars = [
    {
        brand: "Toyota",
        model: "Corola",
        year: 2022
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2008
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2013
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2018
    }
];

/* Cria uma função e chama essa função displayCards, aqui mesmo */
function displayCards() {
    // Variável
    const cardList = document.querySelector("#card-list");

    cars.forEach((car) => {
        // Criamos um elemento div pelo JavaScript
        const cardDiv = document.createElement("div");
        // Criamos uma class css car
        cardDiv.classList.add('car');

        // Criando o modelo
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} ${car.model}`;

        // Criando o Ano
        const cardYear = document.createElement("p");
        cardYear.textContent = `Ano: ${car.year}`;

        // Imprimindo na tela as informações
        cardDiv.appendChild(carModel);
        cardDiv.appendChild(cardYear);
        cardList.appendChild(cardDiv);


    });

};

// Chamar Função
displayCards();
















