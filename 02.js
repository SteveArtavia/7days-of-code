const nombreEntrada = document.getElementById("nombre");
const edadEntrada = document.getElementById("edad");
const lenguajeEntrada = document.getElementById("lenguaje");
const boton = document.querySelector(".container__form__button");
const containerForm = document.querySelector(".container__form");

// Al enviar la respuesta del formulario
containerForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let nombre = nombreEntrada.value;
    let edad = edadEntrada.value;
    let lenguaje = lenguajeEntrada.value;

    containerForm.innerHTML = `
    <div class="container__form__respuesta">
        Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}!
    </div>`;

});
