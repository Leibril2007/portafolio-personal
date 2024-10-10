import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos(){

    let sectionP = document.createElement('section');
    sectionP.className = "secProyectos";
    sectionP.appendChild(header());
    sectionP.appendChild(listaProyectos());

    return sectionP;
}


function listaProyectos(){
    let div = document.createElement('div');
    div.className = "lista-proyectos";

    // se crea la variable cadaLetra que almacena las letras de dataproyecto
    // proyecto representa cadda elemento de dataProyectos
    dataProyectos.forEach( (proyecto) => {

        div.appendChild(item(proyecto.nombre, proyecto.descripcion ,  proyecto.githubPage, proyecto.github, proyecto.stacks, proyecto.fecha, proyecto.descargas));

    }); // forEach recibe como paragithubPagemetro una funcion (funcion de flecha)

    return div;
}


// FUNCION PARA LISTA

function item(nombre, descripcion, githubPage, github, stacks, fecha, descargas){

    let div = document.createElement('div');
    div.className = "div-item";

    
    let cuadritoProject = document.createElement('div');
    cuadritoProject.className = 'cuadrito-project';
    div.appendChild(cuadritoProject);

    let titNombre = document.createElement('h1');
    titNombre.className = "tit-Nombre";
    titNombre.innerText = nombre;
    div.appendChild(titNombre);


    let stack = document.createElement('div');
    stack.className = "stack-div";
    stack.innerText = stacks;
    div.appendChild(stack);

    let descipcionText = document.createElement('p');
    descipcionText.className = "descripcion-text";
    descipcionText.innerText = descripcion;
    div.appendChild(descipcionText);

    let fech = document.createElement('p');
    fech.className = "fecha";
    fech.innerText = fecha;
    div.appendChild(fech);

    let botGithub = document.createElement('a');
    botGithub.className = "btn-Github";
    botGithub.href = github;
    botGithub.innerText = "Github";
    div.appendChild(botGithub);

    let spanIcono = document.createElement('a');
    spanIcono.className = "material-symbols-outlined";
    spanIcono.innerText = "download";
    spanIcono.href = descargas;
    div.appendChild(spanIcono);

    let enlaceDescaga = document.createElement('a');
    enlaceDescaga.className = "icon-descarga";
    enlaceDescaga.href = descargas;
    spanIcono.appendChild(enlaceDescaga);



    return div;
}


export { proyectos }


