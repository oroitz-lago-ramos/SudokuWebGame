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
    board = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
    ]
    
   
    
    for (let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let cell = document.createElement('div');
            cell.id = i + '-' + j;
            if (board[i][j] != 0)cell.innerHTML = board[i][j];
            cell.classList.add('cell');
            document.getElementById('sudokuGrid').append(cell);
        }
    }
} 

const createSelectionBar = () => {
    for (let i = 1; i < 10; i++) {
        let digits = document.createElement('div');
        digits.id = i;
        digits.innerHTML = i;
        digits.classList.add('digit');
        document.getElementById('selection').appendChild(digits);
        console.log(i)
    }
}

startGame();

//document.getElementById('startButton').addEventListener('click', beginGame())


