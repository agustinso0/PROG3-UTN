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

//ej2
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
