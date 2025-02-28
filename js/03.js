const entradaNombre = document.getElementById('nombre');
const containerPreguntas = document.querySelector('.container__form');
const containerButton = document.querySelector('.container__form__button');

let nombre = 'usuario';

let controlador = "inicio";

function confirmar(nombre) {
    nombre = entradaNombre.value;

    if(controlador === "inicio") {
        containerPreguntas.innerHTML = `
            <h3 class="pregunta">${nombre} quieres estudiar Front-End o Back-End?</h3>

            <button class="button-respuesta" id="front" onclick="front();">Front-End</button>

            <button class="button-respuesta" id="back" onclick="controlador='back'">Back-End</button>
        `;
    } else if(controlador === "front"){
        containerPreguntas.innerHTML = `
            <h3 class="pregunta">Quieres aprender React o Vue?</h3>

            <button class="button-respuesta" id="react" onclick="controlador='react'">React</button>

            <button class="button-respuesta" id="vue" onclick="controlador='vue'">Vue</button>
        `;
    }
}

// al presionar boton
containerButton.addEventListener('click', confirmar);

function front(){
    controlador = 'front';
    confirmar(nombre);
}

