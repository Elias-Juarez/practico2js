let pos = 0;
let letra = "";
let cadena = prompt("ingrese una cadena de texto");
cadena = cadena.toLowerCase();

for(let i = 0; i < cadena.length; i++){
    if(
        cadena.charAt(i) == "a" ||
        cadena.charAt(i) == "e" ||
        cadena.charAt(i) == "i" ||
        cadena.charAt(i) == "o" ||
        cadena.charAt(i) == "u"
    ){
        letra = letra + cadena.charAt(i);
        pos = cadena.indexOf(cadena.charAt(i));
        break;
    }
}
alert(`la vocal ${letra} esta en la posicion ${pos}`);