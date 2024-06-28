let zombieCards = [
    "Ativação Extra (corredores), Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 0",
    "Ativação Extra (Lerdos), Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 0",
    "Ativação Extra (Lerdos), Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 0",
    "Ativação Extra (Balofo), Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 0",
    "Abominação, Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 1",
    "Abominação, Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 1",
    "Abominação, Vermelho: 1, - Laranja: 1, - Amarelo: 1, - Azul : 1",
    "Abominação, Vermelho: 1, - Laranja: 1, - Amarelo: 0, - Azul : 0",
    "Investida Balofos, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Investida Balofos, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Investida Balofos, Vermelho: 5, - Laranja: 4, - Amarelo: 3, - Azul : 2",
    "Investida Balofos, Vermelho: 3, - Laranja: 2, - Amarelo: 1, - Azul : 0",
    "Investida Lerdos, Vermelho: 9, - Laranja: 7, - Amarelo: 5, - Azul : 3",
    "Investida Lerdos, Vermelho: 9, - Laranja: 7, - Amarelo: 5, - Azul : 3",
    "Investida Lerdos, Vermelho: 12, - Laranja: 10, - Amarelo: 8, - Azul : 6",
    "Investida Lerdos, Vermelho: 10, - Laranja: 8, - Amarelo: 6, - Azul : 4",
    "Investida Lerdos, Vermelho: 10, - Laranja: 8, - Amarelo: 6, - Azul : 4",
    "Investida Lerdos, Vermelho: 7, - Laranja: 5, - Amarelo: 3, - Azul : 2",
    "Investida Lerdos, Vermelho: 6, - Laranja: 4, - Amarelo: 2, - Azul : 1",
    "Investida Lerdos, Vermelho: 8, - Laranja: 6, - Amarelo: 4, - Azul : 2",
    "Balofos, Vermelho: 3, - Laranja: 2, - Amarelo: 1, - Azul : 1",
    "Balofos, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Balofos, Vermelho: 4, - Laranja: 4, - Amarelo: 3, - Azul : 2",
    "Corredores, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Corredores, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Corredores, Vermelho: 4, - Laranja: 3, - Amarelo: 2, - Azul : 1",
    "Corredores, Vermelho: 3, - Laranja: 2, - Amarelo: 1, - Azul : 1",
    "Corredores, Vermelho: 3, - Laranja: 2, - Amarelo: 1, - Azul : 0",
    "Corredores, Vermelho: 5, - Laranja: 4, - Amarelo: 3, - Azul : 2",
    "Corredores, Vermelho: 6, - Laranja: 5, - Amarelo: 4, - Azul : 3",
    "Lerdos, Vermelho: 9, - Laranja: 7, - Amarelo: 5, - Azul : 3",
    "Lerdos, Vermelho: 9, - Laranja: 7, - Amarelo: 5, - Azul : 3",
    "Lerdos, Vermelho: 7, - Laranja: 5, - Amarelo: 3, - Azul : 2",
    "Lerdos, Vermelho: 10, - Laranja: 8, - Amarelo: 6, - Azul : 4",
    "Lerdos, Vermelho: 10, - Laranja: 8, - Amarelo: 6, - Azul : 4",
    "Lerdos, Vermelho: 12, - Laranja: 10, - Amarelo: 8, - Azul : 6",
    "Lerdos, Vermelho: 8, - Laranja: 6, - Amarelo: 4, - Azul : 2",
    "Lerdos, Vermelho: 6, - Laranja: 4, - Amarelo: 2, - Azul : 1"
    // Add more cards as needed
];

let drawnZombieCards = [];

function drawZombieCard() {
    if (zombieCards.length === 0) {
        zombieCards = [...drawnZombieCards];
        drawnZombieCards = [];
    }

    const randomIndex = Math.floor(Math.random() * zombieCards.length);
    const drawnCard = zombieCards.splice(randomIndex, 1)[0];
    drawnZombieCards.push(drawnCard);

    const cardParts = drawnCard.split(', ');
    const header = cardParts[0];
    const red = cardParts[1].split(': ')[1];
    const orange = cardParts[2].split(': ')[1];
    const yellow = cardParts[3].split(': ')[1];
    const blue = cardParts[4].split(': ')[1];

    let cardContent = `<div class="card-header">${header}</div>
                       <div class="card-blocks">
                           <div class="card-block red">X<span class="number">${red}</span></div>
                           <div class="card-block orange">X<span class="number">${orange}</span></div>
                           <div class="card-block yellow">X<span class="number">${yellow}</span></div>
                           <div class="card-block blue">X<span class="number">${blue}</span></div>
                       </div>`;

    document.getElementById("zombie-card").innerHTML = cardContent;
    document.getElementById("counter").innerText = `Cards left: ${zombieCards.length}`;
}

// Initialize the counter
document.getElementById("counter").innerText = `Cards left: ${zombieCards.length}`;