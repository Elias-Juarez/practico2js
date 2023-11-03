const nota = parseInt(prompt("ingrese una nota del 0 al 10"));


switch(nota){
    case 0:
    case 1:
    case 2:
        if(nota >= 0 || nota <= 2){
            alert("Muy deficiente");
        }
        break;
    case 3:
    case 4:
        if(nota === 3 || nota === 4){
            alert("Insuficiente");
        }
        break;
    case 5:
    case 6:
        if(nota === 5 || nota === 6){
            alert("Suficiente");
        }
        break;
    case 7:
        if(nota === 7){
            alert("Bien");
        }
        break;
    case 8:
    case 9:
        if(nota === 8 || nota === 9){
            alert("Notable");
        }
        break;
    case 10:
        if(nota === 10){
            alert("Sobresaliente");
        }
        break;
    case nota:
        if(nota > 10){
            alert("número erróneo");
        }
        break;
    default:
            alert("Introduce un número válido");
}