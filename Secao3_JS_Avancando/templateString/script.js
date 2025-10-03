// Template strings
// Comentário explicativo: este código mostra como usar Template Strings no JavaScript para montar frases dinâmicas de forma mais prática.

// Declaração de variáveis com valores fixos (string e number)
let nome = "Ruty"; // Cria uma variável chamada "nome" e atribui o valor "Ruty"
let sobrenome = "Silveira"; // Cria a variável "sobrenome" com o valor "Silveira"
let idade = 26; // Cria a variável "idade" com o valor numérico 26

// Exemplo antigo de concatenação de strings (comentado):
// Aqui, cada parte da frase precisava ser unida com o operador +
// let mensagem1 = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade";

// Exemplo usando Template String (muito mais legível):
// Usa a crase (` `) e o ${ } para inserir variáveis diretamente dentro da string.
let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`;

// Exibe o resultado no console:
console.log(mensagem); // Saída: "Meu nome é Ruty Silveira e eu tenho 26 anos de idade"
