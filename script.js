function botaoFuja() {
  var botaoNaoFuja = document.getElementById("botaoNao");
  var painel = document.querySelector(".painel");

  var maxLargura = painel.offsetWidth - botaoNaoFuja.offsetWidth;

  var maxAltura = painel.offsetHeight - botaoNaoFuja.offsetHeight;

  var aleatorioAltura = Math.floor(Math.random() * maxAltura);

  var aleatorioLargura = Math.floor(Math.random() * maxLargura);

  botaoNaoFuja.style.left = aleatorioLargura + "px";
  botaoNaoFuja.style.top = aleatorioAltura + "px";
  alert(`
  CLIQUE NA FOTO E DEPOIS EM SIM E VEJA 
  AS SURPRESA QUE FIZ A VOCE
  DEIXE A TELA NA VERTICAL
  `)

}

function musicaReproduzir() {
  var audio = document.getElementById("meu-audio");
  let texto = document.querySelector(".texto")
 
  audio.play();
  texto.style.display = "none"
 
}


function trocarImagem() {
  document.getElementById("imagem").src = "ela.jpg"

}

function restaurarImagem() {
  document.getElementById("imagem").src = "casal-espaco-universo1.jpeg"
}


