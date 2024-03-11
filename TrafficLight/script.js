
let image = document.getElementById("img")
let red = document.getElementById("r");
let yellow = document.getElementById("y");
let green = document.getElementById("g");
let automatic = document.getElementById("a");

let images = ["./images/vermelho.png", "./images/amarelo.png", "./images/verde.png"]
let indiceAtual = 0;



function turnRed() {
    image.src = "./images/vermelho.png";
}

function turnYellow() {
    image.src = "./images/amarelo.png";
}

function turnGreen() {
    image.src = "./images/verde.png";
}

function changeImg() {
    image.setAttribute("src", images[indiceAtual]);
    indiceAtual = ((indiceAtual + 1) % images.length);
    setInterval(changeImg, 1000);
}

red.addEventListener("click", turnRed);
yellow.addEventListener("click", turnYellow);
green.addEventListener("click", turnGreen);
automatic.addEventListener("click", changeImg);
