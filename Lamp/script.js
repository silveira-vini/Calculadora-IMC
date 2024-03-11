var lamp = document.getElementById("lampimg");
var btnon = document.getElementById("on");
var btnoff = document.getElementById("off");
var btchange = document.getElementById("changeLamp");

function on() {
    lamp.src = "./images/ligada.jpg";
    btnon.setAttribute("style","display:none");
    btnoff.setAttribute("style","display:inline-block");
}

function off() {
    lamp.src = "./images/desligada.jpg";
    btnon.setAttribute("style","display:inline-block");
    btnoff.setAttribute("style","display:none");

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
    btnon.setAttribute("style","display:inline-block");
    btnoff.setAttribute("style","display:none");
}

lamp.addEventListener('click', broke);

btchange.addEventListener('click', replace);