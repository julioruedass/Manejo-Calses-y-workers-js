// Variable en JavaScript
const valorDinamico = 'Este valor es de una CONSTANTE ';
//div para elementos dinamicos
let elemento_div = document.getElementById("element_dinamic_1");
//Div para elementos estaticos
var myElement = document.getElementById("element_dinamic_2");

function f_crear_elementos_pagina(){
    /* remplaza todo el body- */
    //document.body.innerHTML = `Elemento dinamic:<input id="dinamic_1" type="text" value="${valorDinamico}">`;
    elemento_div.innerHTML = `- Elemento dinamic 1:<input id="dinamic_2" type="text" value="${valorDinamico}">`;
    // JavaScript
    myElement.innerHTML = `- Elemento dinamic 2:<input id="dinamic_1" type="text" value="${valorDinamico}">`;
}

function f_borrar_elementos_pagina(){
    /* remplaza todo el body- */
    //document.body.innerHTML = `Elemento dinamic:<input id="dinamic_1" type="text" value="${valorDinamico}">`;
    elemento_div.innerHTML = `<br>-`;
    // JavaScript
    myElement.innerHTML = `<br>-`;
}
