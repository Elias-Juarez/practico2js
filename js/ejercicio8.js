let numero = parseInt(prompt("ingrese un numero entre 1 y 50"));

for(let f = 1; f <= numero; f++){
    for(let c = 1; c <= f; c++){
        document.write(c);
    }
    document.write("<br>");
}