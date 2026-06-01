const CACHE_NAME = 'smart-alternance-v2'
const APP_SHELL = [
  '/',
  '/programme',
  '/instituts',
  '/inscription',
  '/offline',
  '/manifest.webmanifest',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-icon.png',
  '/IMG-20260412-WA0032.jpg',
]

const STATIC_ASSET_PATTERNS = [/^https?:\/\/.*\/_next\/static\//, /^https?:\/\/.*\/_next\/image\//]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache))
          return response
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME)
          return cache.match(event.request) || cache.match('/offline')
        }),
    )
    return
  }

  const requestUrl = new URL(event.request.url)
  const isStaticAsset = STATIC_ASSET_PATTERNS.some((pattern) => pattern.test(requestUrl.href))

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response
          }

          if (response.type === 'opaque' && !isStaticAsset) {
            return response
          }

          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache))

          return response
        })
        .catch(() => {
          if (isStaticAsset) {
            return caches.match('/pwa-192x192.png')
          }

          return caches.match('/pwa-192x192.png')
        })
    }),
  )
})
