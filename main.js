import { navBarDiv } from "./components/navBar/navBar.js"; //importa el archivo, para que se pueda utilizar
import { proyectos } from "./components/project/project.js";


/* COMPONENTES DE LA PAGINA */

let DOM = document.querySelector("#root"); // llama al elemento

/* navBar */

let navBar = document.createElement('section'); // crea un elemento
navBar.className = "nav-bar"; // agrega el nombre como una clase al elemento
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar); // agrega el elemento como hijo a otro elemento.

/* Proyectos */

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);



