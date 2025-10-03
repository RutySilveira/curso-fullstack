// setInterval

function acao() {
  document.write("Executando... <br/>");
}

/* Funcao anonima

var time = setInterval(() => {
  document.write("Executando!!! <br/>");
}, 1000);

*/

// setTimeout

setTimeout(acao, 3000);

/* setTimeout(() => {
  console.log("EXECUTOU NOSSO TIMEOUT")}, 3000);
  
*/
