const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

function imc() {

    const nome = document.getElementById("name").value;
    const altura = +document.getElementById("alt").value;
    const peso = +document.getElementById("peso").value;
    const display = document.getElementById("display");

    if (nome !== 0 && altura !== 0 && peso !== 0) {

        let imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "abaixo do peso";
        } else if (imc < 25) {
            classificacao = "no peso ideal, PARABÉNS!!";
        } else if (imc < 30) {
            classificacao = "levemente acima do peso";
        } else if (imc < 35) {
            classificacao = "com obesidade grau I";
        } else if (imc < 40) {
            classificacao = "com obesidade grau II";
        } else {
            classificacao = "com obesidade grau III. Perigo!!!";
        }

        display.textContent = `${nome}, seu IMC é ${imc}. Você esta ${classificacao}`
        display.style.opacity = "1"
    }

    else {
        display.textContent = "Preencha todos os campos"
        display.style.opacity = "1"
    }
}

function resetar() {
    display.style.opacity = "0"

    setTimeout(() => {
        document.getElementById("name").value = "";
        document.getElementById("alt").value = "";
        document.getElementById("peso").value = "";
        display.textContent = "";
    }, 1000);
}

calcular.addEventListener("click", imc);
limpar.addEventListener("click", resetar);