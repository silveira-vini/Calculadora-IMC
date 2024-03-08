var lamp = document.getElementById("lampimg");
var btnon = document.getElementById("on");
var btnoff = document.getElementById("off");
var btchange = document.getElementById("changeLamp");

function on() {
    lamp.src = "./images/ligada.jpg";
}

function off() {
    lamp.src = "./images/desligada.jpg";
}

function broke() {
    lamp.src = "./images/quebrada.jpg";
    btnon.removeAttribute('onclick');
    btnoff.removeAttribute('onclick');
}

function replace() {
    lamp.src = "./images/desligada.jpg";
    btnon.setAttribute("onclick", "on()");
    btnoff.setAttribute("onclick", "off()");
}

lamp.addEventListener('click', broke);

btchange.addEventListener('click', replace);