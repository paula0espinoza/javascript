const elementos=document.getElementsByClassName("parrafo");//en una const "elementos",guarda lo que tenga document, y a document le aplico el getelementbyclassname con el nombre de la clase"parrafo". estoy pidiendo que del document html me trraiga todos los elementos que sean de la clase parrafo
for (let i=0;i<elementos.length;i++){ //con la propiedad .lenght obtengo la longitud del arreglo(en este caso tenemos 2 elementos). for va hacer  que a cada elemento que tengo en el arreglo le modifica el estilo y del estilo el color a red
    elementos[i].style.color='red';
}