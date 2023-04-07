// boutons actions
const newGame = document.getElementById('new-game-btn');
const rollDice = document.getElementById('roll-dice-btn');
const hold = document.getElementById('hold-btn');
const rollDiceIcon = document.getElementById('roll-dice-icon');
const holdIcon = document.getElementById('hold-icon');

// gestion du dé
let diceImage = document.getElementById('dice');
const imgArray = ['./images/Dé/DICE 0.svg', './images/Dé/DICE 1.svg', './images/Dé/DICE 2.svg', './images/Dé/DICE 3.svg', './images/Dé/DICE 4.svg', './images/Dé/DICE 5.svg', './images/Dé/DICE 6.svg']
const altArray = ['dé-3D', 'lancer-dé-0', 'lancer-dé-1', 'lancer-dé-2', 'lancer-dé-3', 'lancer-dé-4', 'lancer-dé-5', 'lancer-dé-6']

// icones actif / vainqueur
const activeIcon = document.getElementById('active-icon');

// joueur 1 infos
let id1 = document.getElementById('player1');
let currentScore1 = document.getElementById('current-score-player1');
let globalScore1 = document.getElementById('global-score-player1');

// joueur 2 infos
let id2 = document.getElementById('player2');
let currentScore2 = document.getElementById('current-score-player2');
let globalScore2 = document.getElementById('global-score-player2');


// création classe pour les deux joueurs
class Player {
    constructor(id, currentScore, globalScore) {
        this.id = id;
        this.currentScore = currentScore;
        this.globalScore = globalScore;
    }
}

const player1 = new Player(id1.innerText, parseInt(currentScore1.innerText), parseInt(globalScore1.innerText));
const player2 = new Player(id2.innerText, parseInt(currentScore2.innerText), parseInt(globalScore2.innerText));

const listOfPlayers = [player1, player2]
let playerIndex = 0;            // par défaut, Joueur 1 commence


function restart() {
    window.location.reload();   //force un rafraichissement de la page qui remet tous les éléments avec leur valeurs d'origine

}

function roll () {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    // pour changer image
    diceImage.src = imgArray[diceRoll];
    diceImage.alt = altArray[diceRoll];

    listOfPlayers[playerIndex].currentScore += diceRoll;
    displayScore();
    if (diceRoll == 1) {
        listOfPlayers[playerIndex].currentScore = 0;
        displayScore();
        changePlayer(); // changer de joueur
    }
}

// change le joueur actif
function changePlayer () {
    if (playerIndex == 0) {
        playerIndex = 1; 
        id1.classList.remove('active');                     // supprimer actif de ce joueur
        id2.classList.add('active');                        // ajouter actif sur l'autre joueur
        id2.insertAdjacentElement('afterend', activeIcon);  // déplacer icone de joueur actif
    }
    else if (playerIndex == 1) {
        playerIndex = 0;
        id2.classList.remove('active');
        id1.classList.add('active');
        id1.insertAdjacentElement('afterend', activeIcon);
    }
}

// fait apparaitre les scores
function displayScore () {
    currentScore1.innerText = player1.currentScore;
    globalScore1.innerText = player1.globalScore;
    currentScore2.innerText = player2.currentScore;
    globalScore2.innerText = player2.globalScore;
}

function animateDice () {
    diceImage.classList.add('dice-roll-animation');

    setTimeout(() => {
        diceImage.classList.remove('dice-roll-animation');
      }, 500);
}

newGame.addEventListener('click', restart);
rollDice.addEventListener('click', roll);
rollDice.addEventListener('click', animateDice);