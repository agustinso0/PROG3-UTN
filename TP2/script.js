//ej 1
let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Titulo modificado"

let parrafos = document.getElementsByClassName("parrafo"); // te devuelve una lista de parrafos
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red"; // for para recorrer la lista y cambiarles el color
}
let todosLosLi = document.querySelectorAll("li"); // te devuelve una lista con todos los li del documento
for (let i = 0; i<todosLosLi.length; i++){
    todosLosLi[i].textContent += " Texto agregado" //agregar texto al que tiene
}