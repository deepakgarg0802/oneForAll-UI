var staticCacheName= 'restaurant-cache-v2';

self.addEventListener('install',function(event){
	var urlsToCache= ['/',
		'./index.html',
		'./restaurant.html',
		'./css/styles.css',
		'./css/styles_420.css',
		'./css/styles_700.css',
		'./css/styles_1024.css',
		'./js/dbhelper.js',
		'./js/main.js',
		'./js/restaurant_info.js',
		'./data/restaurants.json',
		'./img/1.jpg',
		'./img/2.jpg',
		'./img/3.jpg',
		'./img/4.jpg',
		'./img/5.jpg',
		'./img/6.jpg',
		'./img/7.jpg',
		'./img/8.jpg',
		'./img/9.jpg',
		'./img/10.jpg',
	];

	event.waitUntil(
		caches.open(staticCacheName).then(function(cache){
			cache.addAll(urlsToCache);
		})
	);
});

// self.addEventListener('activate',function(event){
// 	event.waitUntil(
// 		caches.keys().then(function(cacheNames){
// 			return Promise.all(
// 				cacheNames.filter(function(cacheName){
// 				return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
// 			}).map(function(cacheName){
// 				return cache.delete(cacheName);
// 			}));
// 		}));
// });

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			//console.log(response);
			return response || fetch(event.request);
		})
	);
});