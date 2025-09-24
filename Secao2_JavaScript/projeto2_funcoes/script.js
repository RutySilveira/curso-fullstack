// Seleciona o elemento HTML com id="area" e guarda na variável "area"
// Esse será o espaço da página onde as mensagens e botões vão aparecer
var area = document.getElementById("area");

// Função chamada quando o usuário clica no botão "Entrar"
function entrar() {
  // Abre uma caixa de prompt pedindo o nome do usuário
  var nome = prompt("Digite seu nome");

  // Verifica se o usuário deixou o campo vazio ("") ou cancelou o prompt (null)
  if (nome === "" || nome === null) {
    // Mostra um alerta de erro
    alert("Ops algo deu errado");
    // Escreve uma mensagem padrão na área
    area.innerHTML = "Clique no botao para acessar...";
  } else {
    // Se o usuário digitou algo válido, mostra a mensagem de boas-vindas
    area.innerHTML = "Bem vindo " + nome + " ";

    // Cria um novo elemento <button> dinamicamente
    let botaoSair = document.createElement("button");
    // Define o texto do botão
    botaoSair.innerText = "Sair da conta";
    // Quando o botão for clicado, executa a função "sair"
    botaoSair.onclick = sair;

    // Adiciona o botão criado dentro da "area"
    area.appendChild(botaoSair);
  }
}

// Função chamada quando o usuário clica no botão "Sair da conta"
function sair() {
  // Exibe uma mensagem de despedida
  alert("Até mais!");
  // Atualiza a área com a mensagem "Você saiu!"
  area.innerHTML = "Voce saiu!";
}
