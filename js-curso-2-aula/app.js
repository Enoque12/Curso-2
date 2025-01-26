let listaDeNumerosAleatorio = [];
let limiteNumeroGerado = 3;
let numeroAleatorio = geraNumeroAleatoria();
let tentativas = 1;

function exibeTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function mensagemInicial() {
  exibeTextoNaTela("h1", "Jogo do Numero Secreto");
  exibeTextoNaTela("p", "Escolha um numero de 1 a 10");
}

mensagemInicial();

function verificaChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroAleatorio) {
    exibeTextoNaTela("h1", "Você acertou!");
    let mensagemTentativas = tentativas > 1 ? "Tentativas" : "Tentativa";
    let mensagemExibida = `Você conseguiu com ${tentativas} ${mensagemTentativas}`;
    exibeTextoNaTela("p", mensagemExibida);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroAleatorio) {
      exibeTextoNaTela("p", "O chute é maior");
      limpaCampo();
    } else {
      exibeTextoNaTela("p", "O chute é menor");
      limpaCampo();
    }
    tentativas++;
  }
}

function reiniciarJogo() {
  numeroAleatorio = geraNumeroAleatoria();
  mensagemInicial();
  limpaCampo();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  tentativas = 1;
}

function limpaCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function geraNumeroAleatoria() {
  let numeroEscolhido = parseInt(Math.random() * 3 + 1);
  let quantElementosNaLista = listaDeNumerosAleatorio.length;

  if (quantElementosNaLista == limiteNumeroGerado) {
    listaDeNumerosAleatorio = [];
  }

  if (listaDeNumerosAleatorio.includes(numeroEscolhido)) {
    console.log("Gerar numero");
    return geraNumeroAleatoria();
  } else {
    console.log("Entrei para adicionar");
    listaDeNumerosAleatorio.push(numeroEscolhido);
    console.log(listaDeNumerosAleatorio);
    return numeroEscolhido;
  }
}
