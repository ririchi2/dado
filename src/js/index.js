const max = 6
const min = 1
const buttonElement = document.getElementById("button");
const answerElement = document.getElementById("answer");
const historialElement = document.getElementsByClassName("historial")[0];
var arrHistorial = [];

function lanzarDado() {
    return Math.floor(Math.random() * max) + min;
}

function displayInfo() {
    let randomnum = lanzarDado();
    answerElement.textContent = randomnum;
    arrHistorial.push(randomnum);
    historialElement.textContent = arrHistorial;
    if (arrHistorial.length>5) {
        arrHistorial.shift();
    }
}

buttonElement.addEventListener("click", displayInfo());
