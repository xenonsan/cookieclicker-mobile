const cacheName = 'cookie-clicker-cache-v2';
const assetsToCache = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './ajax.js',
  './base64.js',
  './DungeonGen.js',
  './dungeons.js',
  './excanvas.compiled.js',
  './minigameGarden.js',
  './minigameGrimoire.js',
  './minigameMarket.js',
  './minigamePantheon.js',
  './showads.js',
  './pwa/192icon.png',
  './pwa/512icon.png',
  './img/perfectCookie.png',
  './img/goldCookie.png',
  './img/wrathCookie.png',
  './img/imperfectCookie.png',
  './img/buildings.png',
  './img/icons.png',
  './img/cursor.png',
  './img/grandma.png',
  './img/farm.png',
  './img/mine.png',
  './img/factory.png',
  './img/bank.png',
  './img/temple.png',
  './img/wizardtower.png',
  './img/shipment.png',
  './img/alchemylab.png',
  './img/portal.png',
  './img/timemachine.png',
  './img/antimattercondenser.png',
  './img/prism.png',
  './img/chancemaker.png',
  './img/fractalEngine.png',
  './img/javascriptconsole.png',
  './img/idleverse.png',
  './img/cortex.png',
  './img/you.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});