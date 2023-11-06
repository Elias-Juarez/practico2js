let nombre = [];
let edad = [];

for(let i = 0; i < 3; i++){
    nombre.push(prompt("ingrese un nombre")); 
    edad.push(parseInt(prompt("ingrese su edad")));
}

let posicion = edad.indexOf(Math.max(...edad));
alert(`${nombre[posicion]} es el mayor`);