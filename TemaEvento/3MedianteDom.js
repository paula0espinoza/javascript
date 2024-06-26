const boton=document.querySelector("input[name='saludar']"); //se recupera el elemento con el metodo queryselector, entonces desde el documento, 
// a traves del queryselector seleccionamos un input cuyo nombres sea 'saludar'. lo ponemos en una CONST porque estamos recuperando el elemento completo 
boton.onclick=function(){ // se asigna la funcion con el codigo deseado (el codigo que queremos ejecutar cuando ocurra el evento) en la propiedad onclick del elemento de tipo button
    alert("hola");
}