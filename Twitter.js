function removeAds() {

    // Pega os elementos span da pagina
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        // Checa se eles contem o texto "promoted"
        if (spans[i].innerHTML === "Promoted") {
            // Adquiri a Div que tem a propaganda
            let card = spans[i].closest(".feed-shared-update-v2");

            // Se a classe mudou,pegue o sexto parente 
            if (card === null) {
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Some com o Ad!
            card.setAttribute("style", "display: none !important;");
        }
    }
}


removeAds();

// Verifica se os ads estão sendo removidos conforme o usuario scrolla
setInterval(function () {
    removeAds();
}, 100)