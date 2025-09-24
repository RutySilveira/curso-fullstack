// Abre uma caixa de diálogo pedindo o nome do usuário
// O valor digitado será armazenado na variável "nome"
var nome = prompt("Qual o seu nome?");

// Abre outra caixa de diálogo pedindo o sobrenome do usuário
// O valor digitado será armazenado na variável "sobrenome"
var sobrenome = prompt("Qual seu sobrenome?");

// Exibe no console do navegador a mensagem "Olá Nome Sobrenome"
// Usando a concatenação (juntar textos e variáveis com o símbolo +)
console.log("Olá " + nome + " " + sobrenome);

// Escreve no corpo da página (HTML) uma mensagem de boas-vindas
// O texto será mostrado dentro da tag <h1>, em destaque
document.write("<h1> Bem vindo " + nome + " " + sobrenome + " </h1>");

// Insere uma imagem na página usando a tag <img>
// O atributo src define o link da imagem
// O atributo alt define o texto alternativo caso a imagem não carregue
document.write(
  "<img src= 'https://sujeitoprogramador.com/steve.png' alt='Foto do Steve' />"
);
