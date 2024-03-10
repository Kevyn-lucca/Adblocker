gecko.webNavigation.onCommitted.addListener(function (tab) {
    // Previni que o script rode para outras instancias
    if (tab.frameId == 0) {
        gecko.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

            // Pega a url da pagina
            let url = tabs[0].url;
            // Remove protocolos desnecessarios para a extensão
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")

           //remove queries para que termos somente o dominio
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain == "Twitter.com") {
                   TwitterScript();
                    return;
                }
            } catch (err) {
                throw err;
            }

        });
    }
});


function TwitterScript() {
    // Injeta o script na pagina.
    chrome.tabs.executeScript({
        file: 'Twitter.js'
    });
    return true;
}