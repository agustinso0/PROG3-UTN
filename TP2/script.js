/*ej 1
let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Titulo modificado"

let parrafos = document.getElementsByClassName("parrafo"); // te devuelve una lista de parrafos
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red"; // for para recorrer la lista y cambiarles el color
}
let todosLosLi = document.querySelectorAll("li"); // te devuelve una lista con todos los li del documento
for (let i = 0; i<todosLosLi.length; i++){
    todosLosLi[i].textContent += " Texto agregado" //agregar texto al que tiene
}*/

/*ej2
document.querySelector("button").addEventListener("click", function () {
    let input = document.querySelector("input");// captura el valor del input
    let inputValue = input.value;

    if (inputValue.trim() !== "") {
        let nuevoLi = document.createElement("li"); // crea un nuevo li con el valor del input // el trim saca los espacios
        nuevoLi.textContent = inputValue;
        let botonEliminar = document.createElement("button");// crea un botón "Eliminar"
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {// agrega evento al botón "Eliminar"
            nuevoLi.remove(); // elimina el li al hacer clic en el boton
        });
        nuevoLi.appendChild(botonEliminar); // agregar el boton al li
        document.querySelector("ul").appendChild(nuevoLi);// agrega el li a la lista
    }
});
*/

// //ej3
// const botonResaltar = document.querySelector(".resaltar");
// botonResaltar.addEventListener('click', function(){
//     const parrafos = document.getElementsByClassName("parrafo");
//     for (let i = 0; i< parrafos.length; i++){
//         parrafos[i].classList.add("resaltado")
//     }
// }
// );
// const botonOcultar = document.querySelector(".ocultar");
// botonOcultar.addEventListener('click', function(){
//     const parrafos = document.getElementsByClassName("parrafo");
//     for (let i = 0; i< parrafos.length; i++){
//         parrafos[i].classList.add("oculto")
//     }
// }
// );


//ej4

const form = document.getElementById('tareas-form');
const tareaInput = document.getElementById('tareaInput');
const tareaList = document.getElementById('tareaList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevaTareaText = tareaInput.value.trim();
    if (nuevaTareaText !== '') {
        const nuevoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'tarea-checkbox';

        
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                nuevoItem.classList.add('completado');
            } else {
                nuevoItem.classList.remove('completado');
            }
        });

        nuevoItem.appendChild(checkbox);
        nuevoItem.appendChild(document.createTextNode(nuevaTareaText));
        tareaList.appendChild(nuevoItem);
        tareaInput.value = '';
    }
});


document.querySelectorAll('.tarea-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.classList.add('completado');
        } else {
            this.parentElement.classList.remove('completado');
        }
    });
});

//ej5
let form5 = document.getElementById("formulario-5");
const btn5 = document.getElementById("boton-5");
btn5.addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre-5").value.trim();
    const nombreError = document.getElementById("error-nombre-5");
    
    const edad = document.getElementById("edad-5").value.trim();
    const edadError = document.getElementById("error-edad-5");

    const email = document.getElementById("email-5").value.trim();
    const emailError = document.getElementById("error-email-5");

    const regexEmail = /\S+@\S+\.\S+/;

    let valid = true;

    if (nombre === "") {
        nombreError.textContent = "Debes ingresar un nombre";
        valid = false;
    } else {
        nombreError.textContent = "";
    }

    if (edad === "" || isNaN(edad) || edad < 18) {
        edadError.textContent = "La edad es obligatoria y debe ser un numero mayor igual a 18";
        valid = false;
    } else {
        edadError.textContent = "";
    }

    if (email === "" || !regexEmail.test(email)) {
        emailError.textContent = "Debes ingresar un email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (valid) {
        alert("Formulario enviado");
        form5.reset();
    }
});

