// Espera que o documento esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o vídeo e adiciona um evento de término (ended)
    var video = document.getElementById('vd');
    if (video) {
        video.addEventListener('ended', function() {
            // Quando o vídeo terminar, mostra o menu
            var menu = document.getElementById('menu');
            if (menu) {
                menu.style.visibility = 'visible';
            }
        });
    }

    // Seleciona o dropdown e adiciona um evento de clique
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.submenu').classList.toggle('show');
        });
    }
});
