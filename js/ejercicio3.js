let texto = "";
let textoUnido = "";

do{
  texto = prompt("escriba un texto");
  texto = texto + "-";
  textoUnido = textoUnido + texto;
}while(confirm("quiere seguir escribiendo otro texto?"));
document.write(textoUnido);