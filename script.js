console.log("hola");
let titulo = document.querySelector("h1");
titulo.className = "animacion-titulo";
console.log("titulo ",titulo.className);

setTimeout(() => {
    titulo.className ="";
}, 1000);

let formulario = document.querySelector("#contacto form");
console.log("formulario",formulario);

formulario.addEventListener("submit", (e) => {
    console.log("confirmar envio ", e);
    e.preventDefault();
    const nombre = e.target.querySelector("input[name='nombre']").value;
    const apellido = e.target.querySelector("input[name='apellido']").value;
    const email = e.target.querySelector("input[name='email']").value;
    const mensaje = e.target.querySelector("textarea[name='mensaje']").value;

    if (!nombre || !apellido  || !email || !mensaje) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // aca sería bueno intentar enviar el correo a través de alguna API o similar
});

const habilidades = document.querySelectorAll("#habilidades ul li");
console.log("habilidades",habilidades);

habilidades.forEach((habilidad) => {
    console.log("habilidad",habilidad);

    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(porcentajeInicio);
    const colorInicio = "green";
    const colorFinal = "white";
    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
    console.log(habilidad.style.background);
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('titulo').classList.add('animacion-titulo');
});
