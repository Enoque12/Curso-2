let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificaConsole() {
  console.log("O botão foi clicado");
}

function verificaAlert() {
  alert("Eu amo JS");
}

function verificaPrompt() {
  let cidade = prompt("Digite o nome de uma cidade de Moçambique");

  alert(`Estive na cidade de ${cidade} e me lembrei de ti.`);
}

function verificaSoma() {
  let valor1 = parseInt(prompt("Digite o primeiro numero: "));
  let valor2 = parseInt(prompt("Digite o segundo numero: "));
  let resultado = valor1 + valor2;
  alert(`A soma de ${valor1} e ${valor2} é ${resultado}.`);
}
