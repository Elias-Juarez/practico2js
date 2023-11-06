const filas = parseInt(prompt("Ingrese las filas"));
const columnas = parseInt(prompt("Ingrese las columnas"));
let totalCeldas = filas * columnas;

document.write(`<table><tbody>`);
for(let f = 0; f < filas; f++){
    document.write(`<tr>`);
    for(let c = 0; c < columnas; c++){
        document.write(`<td>${totalCeldas}</td>`)
        totalCeldas--
    }
    document.write(`</tr>`)
}
document.write(`</tbody></table>`)