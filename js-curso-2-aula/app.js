let numeroAleatorio = geraNumeroAleatoria();

function exibeTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibeTextoNaTela("h1", "Jogo do Numero Secreto");
exibeTextoNaTela("p", "Escolha um numero de 1 a 10");

function verificaChute() {
  let chute = document.querySelector("input").value;
  console.log(numeroAleatorio == chute);
}

function geraNumeroAleatoria() {
  return parseInt(Math.random() * 10 + 1);
}
