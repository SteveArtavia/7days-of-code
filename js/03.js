const entradaNombre = document.getElementById('nombre');
const containerPreguntas = document.querySelector('.container__form');
const containerButton = document.querySelector('.container__form__button');

let nombre = 'usuario';
let controlador = "inicio";
let tecnologias = [];

function confirmar(nombreUsuario) {
    nombre = entradaNombre.value;
    nombreUsuario = nombre;

    if(controlador === "inicio") {
        preguntasPlantilla(`${nombreUsuario} quieres dedicarte al Front-End o al Back-End?`, 'front','back');
        return;

    } else if(controlador === "front"){
        preguntasPlantilla(`Quieres aprender react o vue?`, 'react', 'vue');
        return;

    } else if(controlador == 'vue'){
        preguntasPlantilla(`Quieres especializarte en ${controlador} o quieres ser fullstack?`, 'especializacion', 'fullstack');
        return;

    } else if(controlador == 'react'){
        preguntasPlantilla(`Quieres especializarte en ${controlador} o quieres ser fullstack?`, 'especializacion', 'fullstack');
        return;

    } else if(controlador == 'back'){
        preguntasPlantilla('Quieres aprender C# o Java?', 'csharp', 'java');
        return;

    } else if(controlador == 'csharp'){
        preguntasPlantilla(`Quieres especializarte en ${controlador} o quieres ser fullstack?`, 'especializacion', 'fullstack');
        return;

    } else if(controlador == 'java'){    
        preguntasPlantilla(`Quieres especializarte en ${controlador} o quieres ser fullstack?`, 'especializacion', 'fullstack');
        return;

    } else if(controlador == 'especializacion'){
       containerPreguntas.innerHTML = `Felicidades ${nombreUsuario}, sigue adelante y especializate en tu area de interes`;

       setTimeout(() => {
            preguntasPlantilla(`${nombre} hay alguna otra tecnologia que te gustaria aprender?`, 'si', 'no');
       }, 3000);
        return;

    } else if(controlador == 'fullstack'){
        containerPreguntas.innerHTML = `Felicidades ${nombreUsuario}, sigue adelante y conviertete en desarrollador fullstack`;

        setTimeout(() => {
            preguntasPlantilla(`${nombreUsuario} hay alguna otra tecnologia que te gustaria aprender?`, 'si', 'no');
       }, 3000);
        return;

    } else if(controlador == 'si'){
        si(nombreUsuario);
        return;

    } else if(controlador == 'no'){
        no(nombreUsuario);
        return;
    }

    return nombreUsuario;
}

// al presionar boton inicial para confirmar nombre
containerButton.addEventListener('click', confirmar);

function preguntasPlantilla(pregunta, opcion1, opcion2){
    containerPreguntas.innerHTML = `
        <h3>${pregunta}</h3>

        <button class="button-respuesta" id="${opcion1}" onclick="seleccionar('${opcion1}');">${opcion1}</button>

        <button class="button-respuesta" id="${opcion2}" onclick="seleccionar('${opcion2}');">${opcion2}</button>
    `;
    return;
}

function seleccionar(opcion){
    controlador = opcion;
    confirmar();
}

function si(){
    controlador = 'si';
    containerPreguntas.innerHTML = `
        <h3>Que otra tecnologia te interesa ${nombre}</h3>
        <input class="container__form__input" type="text" id="tecnologia" placeholder="Escribe aqui...">
        <button class="button-respuesta" id="agregar" onclick="agregar();">Agregar</button>
        <button class="button-respuesta" id="no" onclick="no();">No me interesa otra tecnologia</button>
    `;
    return;
}

function agregar(){
    let tecnologia = document.getElementById('tecnologia').value;

    tecnologias.push(tecnologia);

    preguntasPlantilla(`Hay alguna otra tecnologia que te interese aprender ${nombre}?`,`si`, `no`);

    return;
}

function no(){
    controlador = 'no';

    if(tecnologias.length === 0){
        containerPreguntas.innerHTML = `
            <h3>Excelente ${nombre}!</h3>
        `;
    } else {
        containerPreguntas.innerHTML = `
            <h3>Excelente ${nombre}!</h3>
            <p>Sigue adelante y podras aprender estas tecnologias:</p>
            <ul>
            ${tecnologias.map(tecnologia => `<li>${tecnologia}</li>`).join('')}
            </ul>
        `;
    }

    return;
}

