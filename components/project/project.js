function proyectos(){

    let sectionP = document.createElement('section');
    sectionP.className = "secProyectos";
    sectionP.appendChild(header());
    sectionP.appendChild(item());

    return sectionP;
}

// FUNCION PARA HEADER

function header(){
    
    let div = document.createElement('div');
    div.className = 'header';
    
    let h2 = document.createElement('h2');
    h2.className = "titProyectos";
    h2.innerText = "Proyectos";
    div.appendChild(h2);

    let boton = document.createElement('div');
    boton.className = "botHeader"; 
    boton.innerText = "Github";
    div.appendChild(boton);

    return div;
}

// FUNCION PARA LISTA

function item(){

    let div = document.createElement('div');
    div.innerText = "Item de lista";

    return div;
}


export { proyectos }


