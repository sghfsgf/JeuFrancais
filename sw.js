// =====================================================
// SERVICE WORKER
// JE JOUE ET J'APPRENDS LE FRANÇAIS
// =====================================================

const CACHE_NAME = "jeu-francais-v2";

const fichiers = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icone-192.png",
    "./icone-512.png"
];


// =====================================================
// INSTALLATION
// =====================================================

self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll(fichiers);

            })

    );

    // Active immédiatement le nouveau Service Worker

    self.skipWaiting();

});


// =====================================================
// ACTIVATION
// SUPPRIMER LES ANCIENS CACHES
// =====================================================

self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys()
            .then(function(cachesExistants) {

                return Promise.all(

                    cachesExistants.map(function(cache) {

                        if (cache !== CACHE_NAME) {

                            return caches.delete(cache);

                        }

                    })

                );

            })

    );

    // Prendre immédiatement le contrôle des pages

    self.clients.claim();

});


// =====================================================
// FICHIERS
// =====================================================

self.addEventListener("fetch", function(event) {

    event.respondWith(

        fetch(event.request)
            .then(function(reponse) {

                // Mettre en cache la nouvelle version

                const copie =
                    reponse.clone();

                caches.open(CACHE_NAME)
                    .then(function(cache) {

                        cache.put(
                            event.request,
                            copie
                        );

                    });

                return reponse;

            })

            .catch(function() {

                // Si Internet n'est pas disponible,
                // utiliser le cache.

                return caches.match(
                    event.request
                );

            })

    );

});
