const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = (event) => {

    if (event.target.id == 'red') {
        turnOn['red']();
    }

    if (event.target.id == 'yellow') {
        turnOn['yellow']();
    }

    if (event.target.id == 'green') {
        turnOn['green']();
    }

};

const turnOn = {
    'red': () => img.src = './images/vermelho.png',
    'yellow': () => img.src = './images/amarelo.png',
    'green': () => img.src = './images/verde.png'
}

buttons.addEventListener('click', trafficLight);