let zombieCards = [
    "Ativação Extra (corredores) Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 0",
    "Ativação Extra (Lerdos) Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 0",
    "Ativação Extra (Lerdos) Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 0",
    "Ativação Extra (Balofo) Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 0",
    "Abominação Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 1",
    "Abominação Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 1",
    "Abominação Vermelho: 1 - Laranja: 1 - Amarelo: 1 - Azul : 1",
    "Abominação Vermelho: 1 - Laranja: 1 - Amarelo: 0 - Azul : 0",
    "Investida Balofos Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Investida Balofos Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Investida Balofos Vermelho: 5 - Laranja: 4 - Amarelo: 3 - Azul : 2",
    "Investida Balofos Vermelho: 3 - Laranja: 2 - Amarelo: 1 - Azul : 0",
    "Investida Lerdos Vermelho: 9 - Laranja: 7 - Amarelo: 5 - Azul : 3",
    "Investida Lerdos Vermelho: 9 - Laranja: 7 - Amarelo: 5 - Azul : 3",
    "Investida Lerdos Vermelho: 12 - Laranja: 10 - Amarelo: 8 - Azul : 6",
    "Investida Lerdos Vermelho: 10 - Laranja: 8 - Amarelo: 6 - Azul : 4",
    "Investida Lerdos Vermelho: 10 - Laranja: 8 - Amarelo: 6 - Azul : 4",
    "Investida Lerdos Vermelho: 7 - Laranja: 5 - Amarelo: 3 - Azul : 2",
    "Investida Lerdos Vermelho: 6 - Laranja: 4 - Amarelo: 2 - Azul : 1",
    "Investida Lerdos Vermelho: 8 - Laranja: 6 - Amarelo: 4 - Azul : 2",
    "Balofos Vermelho: 3 - Laranja: 2 - Amarelo: 1 - Azul : 1",
    "Balofos Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Balofos Vermelho: 4 - Laranja: 4 - Amarelo: 3 - Azul : 2",
    "Corredores Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Corredores Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Corredores Vermelho: 4 - Laranja: 3 - Amarelo: 2 - Azul : 1",
    "Corredores Vermelho: 4 - Laranja: 4 - Amarelo: 3 - Azul : 2",
    "Corredores Vermelho: 3 - Laranja: 2 - Amarelo: 1 - Azul : 1",
    "Corredores Vermelho: 3 - Laranja: 2 - Amarelo: 1 - Azul : 0",
    "Corredores Vermelho: 5 - Laranja: 4 - Amarelo: 3 - Azul : 2",
    "Corredores Vermelho: 6 - Laranja: 5 - Amarelo: 4 - Azul : 3",
    "Lerdos Vermelho: 9 - Laranja: 7 - Amarelo: 5 - Azul : 3",
    "Lerdos Vermelho: 9 - Laranja: 7 - Amarelo: 5 - Azul : 3",
    "Lerdos Vermelho: 7 - Laranja: 5 - Amarelo: 3 - Azul : 2",
    "Lerdos Vermelho: 10 - Laranja: 8 - Amarelo: 6 - Azul : 4",
    "Lerdos Vermelho: 10 - Laranja: 8 - Amarelo: 6 - Azul : 4",
    "Lerdos Vermelho: 12 - Laranja: 10 - Amarelo: 8 - Azul : 6",
    "Lerdos Vermelho: 8 - Laranja: 6 - Amarelo: 4 - Azul : 2",
    "Lerdos Vermelho: 6 - Laranja: 4 - Amarelo: 2 - Azul : 1",
];

let weapons = [
    "Axe",
    "Sword",
    "Bow",
    "Gun",
    "Chainsaw"
];

let drawnZombieCards = [];
let drawnWeapons = [];
let activeLevel = 'blue';

function setLevel(level) {
    activeLevel = level;
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[onclick="setLevel('${level}')"]`).classList.add('active');
}

function drawZombieCard() {
    if (zombieCards.length === 0) {
        zombieCards = [...drawnZombieCards];
        drawnZombieCards = [];
    }

    const randomIndex = Math.floor(Math.random() * zombieCards.length);
    const drawnCard = zombieCards.splice(randomIndex, 1)[0];
    drawnZombieCards.push(drawnCard);

    let cardText = drawnCard.split('Vermelho')[0];

    switch(activeLevel) {
        case 'blue':
            cardText += drawnCard.split('Azul : ')[1];
            break;
        case 'yellow':
            cardText += drawnCard.split('Amarelo')[1].split('Azul')[0];
            break;
        case 'orange':
            cardText += drawnCard.split('Laranja')[1].split('Amarelo')[0];
            break;
        case 'red':
            cardText += drawnCard.split('Vermelho')[1].split('Laranja')[0];
            break;
    }

    document.getElementById("zombie-card").innerText = `Zombie Card: ${cardText.trim()}`;
}

function searchWeapon() {
    if (weapons.length === 0) {
        weapons = [...drawnWeapons];
        drawnWeapons = [];
        document.getElementById("weapons-list").innerHTML = '';
    }

    const randomIndex = Math.floor(Math.random() * weapons.length);
    const drawnWeapon = weapons.splice(randomIndex, 1)[0];
    drawnWeapons.push(drawnWeapon);

    const weaponDiv = document.createElement("div");
    weaponDiv.className = "weapon";
    weaponDiv.innerText = drawnWeapon;
    const returnButton = document.createElement("button");
    returnButton.innerText = "Return";
    returnButton.onclick = () => returnWeapon(drawnWeapon, weaponDiv);

    weaponDiv.appendChild(returnButton);
    document.getElementById("weapons-list").appendChild(weaponDiv);
}

function returnWeapon(weapon, weaponDiv) {
    const index = drawnWeapons.indexOf(weapon);
    if (index > -1) {
        drawnWeapons.splice(index, 1);
        weapons.push(weapon);
        weaponDiv.remove();
    }
}
