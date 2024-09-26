
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

export { header }