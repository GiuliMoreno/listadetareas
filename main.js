const inputdetarea = document.getElementById("nuevaTareaInput");
const botonagregar = document.getElementById("agregarBtn");
const listadetareas = document.getElementById("lista");
botonagregar.addEventListener("click", function (e) {
    e.preventDefault();
    const textodelatarea = nuevaTareaInput.value;
    agregarTarea(textodelatarea);
});
function agregarTarea(texto) {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = 
    `
    <input type ="checkbox">
    <p>${texto}</p>
    <button onclick="eliminarTarea(this)"> eliminar </button>;
    `
    listadetareas.prepend(nuevoLi);
}

 function eliminarTarea(poli) {
    poli.parentElement.remove();

}
