
let baseContacto = document.createElement('div');
baseContacto.className = "base-Contacto";


let titContactar = document.createElement('h3');
titContactar.className = "tit-contactar";
titContactar.innerText = "Contactar";
baseContacto.appendChild(titContactar);

let divForm1 = document.createElement('input');
divForm1.className = "form1";
baseContacto.appendChild(divForm1);

let divForm2 = document.createElement('input');
divForm2.className = "form2";
baseContacto.appendChild(divForm2);

let divForm3 = document.createElement('input');
divForm3.className = "form3";
baseContacto.appendChild(divForm3);

let divBot = document.createElement('div');
divBot.className = "botForm";
divBot.innerText = "Enviar";
baseContacto.appendChild(divBot);





export {baseContacto}