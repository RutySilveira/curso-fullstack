// Função chamada quando o usuário clica no botão "Pedir"
function pedir() {
  // Abre uma caixinha (prompt) para o usuário digitar um número de 1 a 4
  var valor = prompt("Digite um valor de 1 a 4");

  // O switch compara o valor digitado (convertido para número) e executa o caso correspondente
  switch (Number(valor)) {
    case 1: // Se o usuário digitar 1
      alert("Voce escolheu 1 = Suco");
      break; // Para o switch aqui

    case 2: // Se o usuário digitar 2
      alert("Voce escolheu 2 = Agua gelada");
      break;

    case 3: // Se o usuário digitar 3
      alert("Voce escolheu 3 = Sorvete");
      break;

    case 4: // Se o usuário digitar 4
      alert("Voce chamou o garçom!");
      break;

    default: // Se o usuário digitar qualquer coisa diferente de 1 a 4
      alert("Escolha uma opção entre 1 e 4");
      break;
  }
}
