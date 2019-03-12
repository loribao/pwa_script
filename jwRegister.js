function registraSW() {
    if ("serviceWorker" in navigator) {
        if (navigator.serviceWorker.controller) {
            console.log("[PWA Builder] Service Worker encontrado, não há necessidade de registro");
        } else {
            navigator.serviceWorker
                .register("pwabuilder-sw.js", () => {
                    scope: "./"
                })
                .then(function (reg) {
                    console.log("[PWA Builder] Service Worker foi registrado pelo escopo: " + reg.scope);
                });
        }
    }
}

window.addEventListener('load', registraSW);