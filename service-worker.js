const CACHE='delivery-rocha-final';
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll([
    '/delivery-rocha-app/',
    '/delivery-rocha-app/index.html',
    '/delivery-rocha-app/manifest.json'
  ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
