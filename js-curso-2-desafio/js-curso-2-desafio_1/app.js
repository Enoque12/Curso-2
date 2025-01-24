let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificaConsole() {
  console.log("O botão foi clicado");
  olaMundo();
  exibeNome("Enoque");
  console.log(`O dobro de 5 e ${retornaNumero(5)}`);
  console.log(`A media e ${calculaMedia(2, 3, 4)}`);
  console.log(`O maior numero e ${maiorNumero(2, 3)}`);
  console.log(`Quadrado de um numero = ${quadradoDeUmNumero(4)}`);
}

function verificaAlert() {
  alert("Eu amo JS");
}

function verificaPrompt() {
  let cidade = prompt("Digite o nome de uma cidade: ");

  alert(`Estive na cidade de ${cidade} e me lembrei de ti.`);
}

function verificaSoma() {
  let valor1 = parseInt(prompt("Digite o primeiro numero: "));
  let valor2 = parseInt(prompt("Digite o segundo numero: "));
  let resultado = valor1 + valor2;
  alert(`A soma de ${valor1} e ${valor2} é ${resultado}.`);
}

//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
  console.log("Olá Mundo!");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome) {
  console.log(nome);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornaNumero(numero) {
  return 2 * numero;
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(numero1, numero2, numero3) {
  let media = parseInt((numero1 + numero2 + numero3) / 3);
  return media;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradoDeUmNumero(numero) {
  return numero * numero;
}
