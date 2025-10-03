// setInterval
// Essa função executa uma ação repetidamente em um intervalo de tempo definido.

function acao() {
  document.write("Executando... <br/>"); // Escreve "Executando..." na tela
}

/* Exemplo com função anônima usando setInterval
   Aqui, o código executaria a cada 1 segundo (1000 ms).
   "time" armazena o identificador do intervalo, caso você queira parar depois usando clearInterval(time).
   
var time = setInterval(() => {
  document.write("Executando!!! <br/>");
}, 1000);
*/

// ------------------------------

// setTimeout
// Diferente do setInterval, ele executa a ação **apenas uma vez** após o tempo definido.

setTimeout(acao, 3000);
// Chama a função "acao" depois de 3 segundos (3000 ms).

/* Outro exemplo com função anônima e console.log:
   Esse código exibiria "EXECUTOU NOSSO TIMEOUT" apenas uma vez depois de 3 segundos.

setTimeout(() => {
  console.log("EXECUTOU NOSSO TIMEOUT")
}, 3000);
*/
