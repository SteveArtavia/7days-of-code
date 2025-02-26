let respuesta = document.getElementById("respuesta");

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const lenguaje = document.getElementById("lenguaje");

let texto = `Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje} `;

respuesta.innerHTML = texto;