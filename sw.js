self.addEventListener("install", event => { self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(self.clients.claim()); });
// This service worker intentionally does not cache market data: all market values must be fetched live.
self.addEventListener("fetch", event => {
  if (event.request.url.includes("api.dexscreener.com")) return;
});