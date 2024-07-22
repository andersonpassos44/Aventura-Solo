function preventBack() {
    // Define o hash inicial
    if (window.location.hash !== "#no-back") {
        window.location.hash = "#no-back";
    }

    // Adiciona um ouvinte para mudanças no hash
    window.addEventListener('hashchange', function() {
        if (window.location.hash !== "#no-back") {
            window.location.hash = "#no-back";
        }
    });
}