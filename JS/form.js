

let formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(formulario.name.value);
    console.log(formulario.email.value);
    console.log(formulario.comentarios.value);
});


