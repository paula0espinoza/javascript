function verifiNombre(){
    var dato=document.getElementById('nombre').value;
    dato=dato.trim();
    if (dato==""){
        document.getElementById('nombre').value="";
        document.getElementById('nombre').focus();
        alert('el nombre no puede ser vacio');
    }
}

function verifiApellido(){
    var dato=document.getElementById('apellido').value;
    dato=dato.trim();
    if(dato==""){
        document.getElementById('apellido').value="";
        document.getElementById('apellido').focus();
        alert ('el apellido no puede ser vacio');
    }
}

 //focus METODO
//ventana emergente
 // 2..recupera el valor ingresado en el input, VALUE trae el valor del contenido del input (se guarda en una VAR)
     //3..el valor que recupere de dato, le quito los espacios en blanco con la funcion trim (para que la gente si o si escriba algo)
     //3..es decir, en la variable dato guardamos dato pero con la funcion trim para sacar los espacios en blanco
     //5..no entiendo que hace
      //6.. focus sirve para poner enfoque a una parte(pone el enfoque en el input"nombre")
      //lo mismo para apellido
