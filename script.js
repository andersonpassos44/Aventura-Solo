// Espera que o documento esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o vídeo e adiciona um evento de término (ended)
    var video = document.getElementById('vd');
    video.addEventListener('ended', function() {
        // Quando o vídeo terminar, mostra o menu
        var menu = document.getElementById('menu');
        menu.style.visibility = 'visible';
    });
});
