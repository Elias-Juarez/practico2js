do{
  const texto1 = prompt("escriba un texto");
  const texto2 = prompt("escriba otro texto");

  let textoUnido = texto1 + "-" + texto2 + "-";
  document.write(textoUnido);
  console.log(textoUnido);
}while(confirm("quiere seguir escribiendo otro texto?"))