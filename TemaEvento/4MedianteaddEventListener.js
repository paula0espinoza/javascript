const boton=document.querySelector("input[name='saludar']");
function accion(){
    alert("hola");
}
boton.addEventListener("click", accion); // al boton le agregamos un escuchador de eventos, que recibe como 1er parametro el evento a manejar
// y como 2do ´parametro la funcion a ejecutar cuando se produce el evnto  