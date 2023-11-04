let num = 0;
let suma = 0;
do{
    num = parseInt(prompt("ingrese un numero"));
    if(num < 0 || num > 0){
        suma = suma + num; 
    }else{
        alert("ingrese un numero valido");
    }
}while(confirm("quiere seguir escribiendo números?"))
document.write(`la suma de los valores ingresados es: ${suma}`);
