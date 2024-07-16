function verifiNombre(){
var dato=document.getElementById('nombre').value; //recupera el valor ingresado en el input, VALUE trae el valor del contenido del input (se guarda en una VAR)
dato=dato.trim();//el valor que recupere de dato, le quito los espacios en blanco con la funcion trim (para que la gente si o si escriba algo)
  if (dato==""){//es decir, en la variable dato guardamos dato pero con la funcion trim para sacar los espacios en blanco
document.getElementById('nombre').value="";
document.getElementById('nombre').focus();
  }             
}