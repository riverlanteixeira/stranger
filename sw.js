const CACHE_NAME = 'stranger-ar-cache-v1';

// Lista de todos os arquivos essenciais para o jogo funcionar offline.
const URLS_TO_CACHE = [
    '/',
    'index.html',
    'manifest.json',
    'https://aframe.io/releases/1.5.0/aframe.min.js',

    // Imagens
    'assets/img/stranger-things-logo.png',
    'assets/img/dustin.png',
    'assets/img/icon-192.png',
    'assets/img/icon-512.png',

    // Modelos 3D
    'assets/models/bicicleta-will.glb',
    'assets/models/compass.glb',
    'assets/models/baseball_bat.glb',
    'assets/models/demogorgon.glb',
    'assets/models/stranger_things_walkie_talkie/scene.gltf',
    'assets/models/stranger_things_walkie_talkie/textures/lambert2_baseColor.png',
    'assets/models/stranger_things_walkie_talkie/textures/lambert2_metallicRoughness.png',
    'assets/models/stranger_things_walkie_talkie/textures/lambert2_normal.png',
    'assets/models/stranger_things_walkie_talkie/scene.bin',
    'assets/models/will_byers_no_mundo_invertido/scene.gltf',
    'assets/models/will_byers_no_mundo_invertido/textures/Material.001_baseColor.png',
    'assets/models/will_byers_no_mundo_invertido/textures/Material.001_metallicRoughness.png',
    'assets/models/will_byers_no_mundo_invertido/textures/Material.001_normal.png',
    'assets/models/will_byers_no_mundo_invertido/scene.bin',

    // Áudios
    'assets/audio/dustin-missao-1-completa.mp3',
    'assets/audio/dustin-missao-2-completa.mp3',
    'assets/audio/dustin-missao-3-completa.mp3',
    'assets/audio/dustin-missao-4-completa.mp3',
    'assets/audio/dustin-missao-5-completa.mp3',
    'assets/audio/dustin-missao-6-completa.mp3'
];

// Evento de instalação: abre o cache e armazena todos os nossos arquivos.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto. Armazenando arquivos...');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Evento de fetch: intercepta as requisições.
// Se o recurso estiver no cache, serve a partir do cache. Senão, busca na rede.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});