
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    let winner = () => {

        if (playerTime == 0) {
            return "⭕"
        } else {
            return "❌"
        }
    }

    if (handleMove(position)) {

        setTimeout(() => { alert("O Jogo acabou! O vencedor foi " + winner()) }, 10)

    };

    updateSquare(position);

}

function updateSquare(position) {

    let square = document.getElementById(position);
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;

}

let reset = document.querySelector(".reset");
reset.addEventListener("click", resetAll);

function resetAll() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        square.innerHTML = ""
        board = ["", "", "", "", "", "", "", "", ""];
        playerTime = 0;
        gameOver = false;

    })
}