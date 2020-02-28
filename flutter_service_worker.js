'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "8b008c7bdebe81a69f5d8fcc7bbc4f19",
"/main.dart.js": "c4c651364700df4dc9d133abb0c927ad",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "9b8122dc3a0e25b34d459cddeddd44e6",
"/assets/LICENSE": "5d1c53564a47a3c6f5eb7fd0f1dd886e",
"/assets/AssetManifest.json": "5ff1e88626043e71ed96e6abfde195f1",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/contact_back.jpg": "69455f32221bb0218dd027581c577ea4",
"/assets/assets/back2.png": "60452ca77c930dd9698dfad5b4d229d7",
"/assets/assets/back.png": "2de3a765ba3fd4ff961b2dc10d6feb0f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
