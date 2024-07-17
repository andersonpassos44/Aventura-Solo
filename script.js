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

const correctSequence = [1, 9, 2, 7];
let userSequence = [];

function digitClick(digit) {
    userSequence.push(digit);
    if (userSequence.length === correctSequence.length) {
        if (checkSequence()) {
            window.location.href = "numero6.html"; // Redireciona para a página definida
        } else {
            alert("Sequência incorreta! Tente novamente.");
        }
        userSequence = []; // Reseta a sequência do usuário
    }
}

function checkSequence() {
    for (let i = 0; i < correctSequence.length; i++) {
        if (userSequence[i] !== correctSequence[i]) {
            return false;
        }
    }
    return true;
}
