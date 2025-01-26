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
  console.log(calculaFatorial(6));
  console.log(tabuada(2));
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

//--------------------------------------------------------------------------------------------------------
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso) {
  let iMC = peso / altura ** 2;
  console.log(`De acordo com os dados que forneceste o seu IMC e ${iMC}`);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculaFatorial(numero) {
  let verifica = numero;
  let fatorial = 1;
  if (numero == 0) {
    fatorial = 1;
  } else {
    while (numero > 1) {
      fatorial = fatorial * numero;
      numero--;
    }
  }
  console.log(`O fatorial de ${verifica} e ${fatorial}.`);
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteMoeda(moedaEmDolar) {
  return moedaEmDolar * 4.8;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  alert(
    `Com a altura de ${altura} e largura de ${largura} a area vale ${area} e o perimetro ${perimetro}.`
  );
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaAPCirculo(raio) {
  let perimetro = 2 * 3.14 * raio;
  let area = 3.14 * raio ** 2;
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  let contador = 1;
  console.log(`Tabuada de ${numero}`);
  while (contador <= 12) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  }
}

//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push("Java");
linguagensDeProgramacao.push("Ruby");
linguagensDeProgramacao.push("Golang");

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ["Java", "Maria", "Ana"];
console.log(listaNomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(listaNomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(listaNomes[listaNomes.length - 1]);
