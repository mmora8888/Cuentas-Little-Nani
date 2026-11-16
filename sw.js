var V='ln-v1',LIBS=['https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js','https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js','https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return Promise.all(['./','./index.html','./manifest.webmanifest'].concat(LIBS).map(function(u){return c.add(u).catch(function(){})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request,u=new URL(r.url);if(r.method!=='GET')return;
  if(u.origin===location.origin){e.respondWith(fetch(r).then(function(x){var cp=x.clone();caches.open(V).then(function(c){c.put(r,cp)});return x}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./index.html')})}));return}
  if(LIBS.indexOf(r.url)>=0)e.respondWith(caches.match(r).then(function(m){return m||fetch(r)}))});
