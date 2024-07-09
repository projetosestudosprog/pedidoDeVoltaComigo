function trocarTexto() {
    var span = document.getElementById('textoSpan');
    if (span.innerHTML === 'Texto Inicial') {
        span.innerHTML = 'Novo Texto';
    } else {
        span.innerHTML = 'Texto Inicial';
    }
}