//Set-up des variables necessaires au jeu
let mistakesText = document.getElementById('mistakes');
let selectedDigit; let selectedCell





//Récupération de la grille à travers l'api
let grid = fetch('http://31.33.247.37:3000/api/sudoku')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data
    })
    .catch(err => {
        console.log(err);
    })

const startGame = () => {
    //Grille vide
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    //Double boucle pour la generation de la grille
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('div');
            cell.id = i + '-' + j;

            //Dessin de la grille
            if (board[i][j] != 0) cell.innerHTML = board[i][j];
            if (i == 2 || i == 5 || i == 8) cell.classList.add('cell-bottom-border')
            if (j == 2 || j == 5 || j == 8) cell.classList.add('cell-right-border')
            if (i == 0) cell.classList.add('cell-top-border')
            if (j == 0) cell.classList.add('cell-left-border')

            //Implimentation de la logique de selection etc...
            cell.addEventListener('click', setCell)

            cell.classList.add('cell');
            document.getElementById('sudokuGrid').append(cell);
        }
    }
    createSelectionBar();
}

//Dessin de la barre avec les chiffres
const createSelectionBar = () => {
    for (let i = 1; i < 10; i++) {
        let digits = document.createElement('div');
        digits.id = i;
        digits.innerHTML = i;
        digits.addEventListener('click', setDigit)
        digits.classList.add('digit');
        document.getElementById('selection').appendChild(digits);
    }
}

//Fonction permettant de démarrer la partie
//Celle-ci devra recuperer la grille de l'api et remplacer la grille vide
function beginGame() {

}

function setDigit() {
    if (selectedDigit != undefined) selectedDigit.classList.remove('selected-digit')
    //Comment mettre pour deselectioner? Cette solution ne marche pas
    if (selectedDigit != this) selectedDigit = this
    selectedDigit.classList.add('selected-digit')
}

function setCell() {
    if (selectedCell != undefined) selectedCell.classList.remove('selected-cell')
    selectedCell = this
    selectedCell.classList.add('selected-cell')
}
function writeDigit() {
//Il faut reussir à enregistrer le clavier afin de recuperer le chiffre à injecter
}




startGame();

//document.getElementById('startButton').addEventListener('click', beginGame())


