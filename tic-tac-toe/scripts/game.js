// iniciando as variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;

function handleMove(position) {

    if (gameOver) {
        return;
    }

    gameOver = isWin();


    if (board[position] == "") {

        board[position] = symbols[playerTime];

        if (gameOver == false) {

            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;

}

function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let index = 0; index < winStates.length; index++) {

        let seq = winStates[index];
        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if (board[pos0] == board[pos1] &&
            board[pos0] == board[pos2] &&
            board[pos0] != "") {

            return true;
        }
    }

    return false;

}