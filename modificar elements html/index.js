function nombrePareja(){
    var seleccion=document.getElementById("estadoCivil").value; 
    //trae el elemento cuyo id es "estadoCivil", y de estadocivil trae el valor(value) de la opcion que fue seleccionada
   // se usa "var" porque estamos recuperando un valor, no un elemento

    if((seleccion=="union")||(seleccion=="casado")){
        const boton=document.getElementById("enviar");//recupera el boton"enviar"
        boton.remove(); //elimina el boton, porque sino los elementos se veran debajo del boton enviar

        const etiqueta=document.createElement("label");
        //se crea un elemento tipo label,

        etiqueta.setAttribute("for","nombrepareja");
        // a etiqueta se le setea el atributo for, para saber que componente es

        etiqueta.setAttribute("id","labelnombrepareja");// id y le pone labelnombrepareja

        etiqueta.innerHTML("Apellido y Nombre de su pareja");
        document.body.appendChild(etiqueta);// se agruega la etiqueta label

        const input=document.createElement("input");//crea elemento input
        input.setAttribute("type","text");// le setea el atributo type que va a ser de tipo text
        input.setAttribute("id","nombrepareja");// le setea el atributo id que el identificador es nombrepareja
        document.body.appendChild(input); //agregamos el input que vendria a ser el cuadro de texto 

        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));//crea un elemento br y luego los inserta en el documento
        document.body.appendChild(boton);//agrega el boton, para que quede debajo de los elementos que nosostros queremos
    }

    else if ((seleccion=="soltero")||(seleccion=="viudo")) {
        const etiqueta=document.getElementById("labelnombrepareja")
    }



}
