function botaoFuja() {
  var botaoNaoFuja = document.getElementById("botaoNao");
  var painel = document.querySelector(".painel");

  var maxLargura = painel.offsetWidth - botaoNaoFuja.offsetWidth;

  var maxAltura = painel.offsetHeight - botaoNaoFuja.offsetHeight;

  var aleatorioAltura = Math.floor(Math.random() * maxAltura);

  var aleatorioLargura = Math.floor(Math.random() * maxLargura);

  botaoNaoFuja.style.left = aleatorioLargura + "px";
  botaoNaoFuja.style.top = aleatorioAltura + "px";
}

function musicaReproduzir() {
  var audio = document.getElementById("meu-audio");
  audio.play();
}


