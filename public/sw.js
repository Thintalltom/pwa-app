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
                '/login',
                '/post'
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
            caches.open(cacheData).then(async (cache) => {
                try {
                    const response = await fetch(event.request);
                    cache.put(event.request, response.clone());
                    return response;
                } catch {
                    return await caches.match(event.request);
                }
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
