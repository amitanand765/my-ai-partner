const CACHE = 'ai-partner-v1';
const FILES = [
  '/my-ai-partner/',
  '/my-ai-partner/index.html',
  '/my-ai-partner/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
