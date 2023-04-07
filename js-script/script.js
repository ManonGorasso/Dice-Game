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
