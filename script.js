var $relogio = document.querySelector(".relogio");

function relogio() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    $relogio.textContent = hora + ":" + minutos + ":" + segundos;
}

relogio();
setInterval(relogio, 1000);
