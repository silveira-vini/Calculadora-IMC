var boxlamp = document.getElementById("lamp");
var lamp = document.getElementById("lampimg");
var btnon = document.getElementById("on");
var btnoff = document.getElementById("off");
var btchange = document.getElementById("changeLamp");
let broke = false;

console.log(broke);


if (broke == false) {

    btnon.addEventListener(
        'click',
        () => {
            lamp.src = ("./images/ligada.jpg");
        }
    )

    btnoff.addEventListener(
        'click',
        () => {
            lamp.src = ("./images/desligada.jpg");
        }
    )
}

else {
    btnon.addEventListener(
        'click',
        () => {
            lamp.src = ("./images/quebrada.jpg");
        }
    )

    btnoff.addEventListener(
        'click',
        () => {
            lamp.src = ("./images/quebrada.jpg");
        }
    )

}

lamp.addEventListener(
    'click',
    () => {
        lamp.src = ("./images/quebrada.jpg");
        broke = true;
        console.log(broke);
    })

btchange.addEventListener(
    'click',
    () => {
        lamp.src = ("./images/desligada.jpg");
        broke = false;
    }

)