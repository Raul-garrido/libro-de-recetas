// Estrategia "red primero" para la app y los datos: cada vez que hay conexión,
// se comprueba GitHub y se sirve la versión más reciente. Solo se usa la copia
// en caché cuando no hay red (modo offline). Así la PWA se actualiza sola en
// cuanto se recarga o reabre con conexión, sin necesidad de un botón de sync.

const CACHE_NAME = 'fontana-maestro-v2';
const APP_SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // activa esta versión nueva sin esperar a que se cierren otras pestañas
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()) // toma el control de las pestañas ya abiertas
  );
});

function isFreshContent(request) {
  return request.mode === 'navigate'
    || request.url.endsWith('index.html')
    || request.url.includes('recetas.json');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (isFreshContent(request)) {
    // Red primero: intenta traer siempre lo último; si no hay red, usa la copia guardada.
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Resto de recursos (manifest, iconos, etc.): caché primero, red como respaldo.
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
