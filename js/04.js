let numeroSecreto = Math.floor(Math.random() * 10 + 1);
const texto = document.getElementById('texto');
const textoFinal = document.querySelector('.container__form');
let intentos = 3;

const botones = document.querySelectorAll('.boton-adivinar');

let numeroUsuario = 0;


function adivinar(event){
    const numeroUsuario = parseInt(event.target.value);
    console.log(numeroUsuario);

    intentos--;

    if(numeroUsuario === numeroSecreto){
        textoFinal.innerHTML = `¡Felicidades! Adivinaste el número secreto ${numeroSecreto}`;
    } else {
        if(numeroUsuario !== numeroSecreto && intentos > 0){
            texto.innerHTML = `¡Fallaste! Te quedan ${intentos} intentos`;
        } else {
            textoFinal.innerHTML = `¡Perdiste! El número secreto era ${numeroSecreto}`;
        }
    }
}
