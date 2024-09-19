let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.className = "img-log";
imgLogo.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6b36449-c129-4341-9ab7-7a25a6d68d8f/d7pynu4-4b6408b0-88c0-46fe-8abd-7ccf7cbbdc46.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q2YjM2NDQ5LWMxMjktNDM0MS05YWI3LTdhMjVhNmQ2OGQ4ZlwvZDdweW51NC00YjY0MDhiMC04OGMwLTQ2ZmUtOGFiZC03Y2NmN2NiYmRjNDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AAFnXdGzh5fcY37ViznnxJ9vKPDAeWULsShjnNgKEWw";
navBarDiv.appendChild(imgLogo);


let h2 = document.createElement('h2');
h2.innerText = "Ariel Subuyuj";
navBarDiv.appendChild(h2);



export { navBarDiv } // exporta el elemento, es decir puede salir