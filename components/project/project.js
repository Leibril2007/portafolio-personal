import { header } from "../header/header.js";

function proyectos(){

    let sectionP = document.createElement('section');
    sectionP.className = "secProyectos";
    sectionP.appendChild(header());
    sectionP.appendChild(item());

    return sectionP;
}


// FUNCION PARA LISTA

function item(){

    let div = document.createElement('div');
    div.innerText = "Item de lista";

    return div;
}


export { proyectos }


