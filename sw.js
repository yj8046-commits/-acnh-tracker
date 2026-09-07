const C='acnh-tracker-v22';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon.svg','./title-logo.webp'])))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(resp=>{const cp=resp.clone();caches.open(C).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match(e.request))));
