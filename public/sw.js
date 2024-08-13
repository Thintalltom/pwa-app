let cacheData = 'appV1';

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                'index.html',
                '/',
                '/mainpage',
                '/login'
            ]);
        })
    );
});

this.addEventListener('fetch', (event) => {
    const url = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums',
    ]
    if (url.some(url => event.request.url.includes(url))) { 
        //actually check if the some of the api in url are present 
        event.respondWith(
            caches.open(cacheData).then((cache) => {
                return fetch(event.request)
                    .then((response) => {
                        cache.put(event.request, response.clone());
                        //put the response here and return
                        return response;
                    })
                    .catch(() => {
                        // Return the cached response if fetch fails
                        return caches.match(event.request);
                    });
            })
        );
    } else if (!navigator.onLine) {
        // Handle other requests (like static assets) when offline
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request); // Fallback to network if not found in cache
            })
        );
    }
});
