let boxlamp = document.getElementById("lamp");
let lamp = document.getElementById("lampimg");
let btnon = document.getElementById("on");
let btnoff = document.getElementById("off");

function on() {
    lamp.src = ("./images/ligada.jpg");
}

function off() {
    lamp.src = ("./images/desligada.jpg");
}

lamp.addEventListener('click',
    () => {
        lamp.src = ("./images/quebrada.jpg");
        btnon.onclick = ("");
        btnoff.onclick = ("");
        boxlamp.onmouseover = ("");
        boxlamp.onmouseout = ("");
    })