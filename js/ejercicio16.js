let texto = prompt("ingrese un texto");
let caracteres = texto.split("");
let caracteresReverse = caracteres.reverse();
let resultadoTexto = caracteresReverse.join("");

alert(resultadoTexto);