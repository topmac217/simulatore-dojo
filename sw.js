self.addEventListener('fetch', function(event) {
  // Questo codice serve solo a far capire ad Android che è una vera app
  event.respondWith(fetch(event.request));
});
