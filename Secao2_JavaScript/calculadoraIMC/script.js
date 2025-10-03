/*
Faixas de classificação do IMC:
Abaixo de 17       -> Muito abaixo do peso
Entre 17 e 18,49   -> Abaixo do peso
Entre 18,5 e 24,99 -> Peso Normal
Entre 25 e 29,99   -> Acima do peso
Maior ou igual a 30 -> Obesidade
*/

// Fórmula do IMC: peso / (altura * altura);

var peso; // Variável para armazenar o peso informado
var altura; // Variável para armazenar a altura informada
var imc; // Variável para armazenar o cálculo do IMC
var resultado; // Variável para manipular a <div> onde aparece o resultado

function calcular(event) {
  event.preventDefault(); // Impede que o formulário recarregue a página

  // Pega os valores digitados nos inputs
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  // Calcula o IMC (lembrando de converter para número automaticamente)
  imc = peso / (altura * altura);

  // Pega a <div> onde o resultado vai ser exibido
  resultado = document.getElementById("resultado");

  // Estrutura condicional para verificar em qual faixa o IMC se encaixa
  if (imc < 17) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc.toFixed(2) +
      "<br/> Cuidado, você está muito abaixo do peso!";
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc.toFixed(2) +
      "<br/> Você está abaixo do peso!";
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc.toFixed(2) +
      "<br/> Você está no peso ideal!";
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc.toFixed(2) +
      "<br/> Você está acima do peso!";
  } else if (imc >= 30) {
    resultado.innerHTML =
      "<br/> Seu resultado foi: " +
      imc.toFixed(2) +
      "<br/> Cuidado, obesidade!";
  }

  // Limpa os campos de entrada após o cálculo
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
