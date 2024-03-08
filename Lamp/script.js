var lamp = document.getElementById("lampimg");
var btnon = document.getElementById("on");
var btnoff = document.getElementById("off");
var btchange = document.getElementById("changeLamp");

function on() {
    lamp.src = ("./images/ligada.jpg");
}

function off() {
    lamp.src = ("./images/desligada.jpg");
}

lamp.addEventListener(
    'click',
    () => {
        lamp.src = ("./images/quebrada.jpg");
        btnon.removeAttribute('onclick');
        btnoff.removeAttribute('onclick');
    })

btchange.addEventListener(
    'click',
    () => {
        lamp.src = ("./images/desligada.jpg");
        btnon.setAttribute("onclick", "on()");
        btnoff.setAttribute("onclick", "off()");
    }
)