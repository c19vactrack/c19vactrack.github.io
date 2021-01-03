'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ff67be6b9bdc4bf827ff14b3318a5934",
"index.html": "c270cf78014b91665346fa601c6a69c3",
"/": "c270cf78014b91665346fa601c6a69c3",
"main.dart.js": "fd1de039a1996318caf6b23e8092b5c5",
"README.md": "14d67029a16cd7f9fcff52ad3d8a8a0f",
"favicon.png": "644edb9898362aa892518cc22c03713c",
"icons/Icon-192.png": "08970cb05231ac01a8be755e04912cde",
"icons/Icon-512.png": "1e43ad94094f7a97f074d62c7f3c8e66",
"manifest.json": "822596a71c3ffc1f8dee8a2f070cc0b3",
".git/config": "c084f941bff946d370a06c2a72bb553e",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/95/5df431f5ffa58cc9e709c3b0989538757a9ba4": "b86f358ddaa8609008896888c0199369",
".git/objects/92/fccdb4b904126e791b1624c7f57eeb3cc8398d": "173147f549e55bfefd24aaf7c3762bac",
".git/objects/0c/70b4ba03a4d2afe7c280da066f4b9eb2fc4006": "d0bf5eace2ac21c650093b7fa64d63dd",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/10bba7f099185b2ec27593bbe0471817d6e1a5": "f20862ac3f56020f886ced5a5f6e22ab",
".git/objects/67/78e6d44ffcb9329aaab0604611a47fd33e2808": "2fa950769662411bfd8b82f647a38fcf",
".git/objects/9d/776628f092e96aab0696b7493ab49cc2abb071": "a0c4524552ad1503235b452a051cb903",
".git/objects/9c/69c7a5ff5c55de45f2064b9cecacefe98cbddf": "690e8536887618e4efa2d450d96dd8a0",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/df/444cb4818501691b99952d378673ae7f0e9a7b": "09f5ea6a1d7f89347edc8284fd90ecf9",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ed/9844b10ab6bbfae974ba5f006a7c856588fb1e": "d9b7e0a36f171231729cec906dbb2589",
".git/objects/4e/cefccc1f9bd4e30fa1770e6ca2990e8277a4b5": "949fc7ca59d088c6e70e77cf1b163644",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/5552191faa61f907b00d6032d530fa03421eca": "a2e92730d941bc06f9a1317b6413fa61",
".git/objects/89/be2a12d47ae4ba845ac6d88b3d3b77c9b55a68": "3415e70babef2f3e4a36a426b7a8700f",
".git/objects/28/4ea366e059d449ae65d8c327fb43b297b1c266": "380c7d374f9c28afe689cb66746ac4b6",
".git/objects/17/ec367edcb123d7262f735560e0c5bc74df6df7": "60be292412ce96c92e39dfd3160c56a2",
".git/objects/7b/44d70a40621068a40a3e7fdd85ab89d796eab9": "aeea32f6868b9b4e0bec924755b39e7e",
".git/objects/8f/8ce86d637d93ac957bae0922129099ed770f17": "a6770f86eb5391fdbeecb03356fe922d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/f35d8c3daa97a9c8a9b44542cb56335852b884": "70139aac49b807e33678cb444598a6e5",
".git/objects/86/c4b78a148b29aa68525962da46ab563272024a": "6cfc17072fcbd17400180db2a3985249",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/54/f79a9425d50907325573c0605809d1a7e061dc": "9c3c99813ec07b5a3edf436d4dfeb076",
".git/objects/30/9f9b3acc6500b10f7899f5ac626a7e1a03d1fd": "3c3e8a5e6b8ec84d2833220d177c9f8a",
".git/objects/5e/edd9251a0209ab8e3d2dd9c8bf51826ae18f82": "67242fd82112435eb926cad82a798a9b",
".git/objects/6c/d230ed49172d7a092389e13a925cbc55f78603": "fa4bcd4d209620ccdffa7bb98163e1c7",
".git/objects/99/9e3d318da7dd50a3feb7eaed5ddb1d1dfee508": "9ac7ab7aaf18952da769cf2fb3ab7b1b",
".git/objects/99/4617c8d67d2ab0d3c7c3658c205c43d14ae8ab": "9a42770cbbd447d6ef11ed556d07c266",
".git/objects/63/a4d996e1eb30a863e9e6d330b67a1adbea6094": "c068a6ecd9b61c2f88f189bc8d59f2f3",
".git/objects/0f/ffb5c7a185981b8a88ba9a3efb6b7e0f8dd33f": "5f5fec56e80163ddd633782268a1cea8",
".git/objects/ba/6a754f85e45eae5feda945c96ab33009fbdcf0": "14c34aac3ead8ffa9b319e7bac561734",
".git/objects/dd/850af1308ebdc50cc036ffe8ad007719fc5074": "76f067afd41d3f5f6e46ee63bf4f7df4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ef/3aaf74a578fe5f213b480faaa4b41c57c8bd2e": "f1949e17d2b64c186dd9a945272f2716",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/d37abb48ccae7b9ac242af2d5c69f660a989d3": "c0906bfdc756a2045c88f3a8967454e6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/bf5c26636c6526dc3a11c9c6153632d4ca7bdf": "2c4f0a5b837597df07ae127d0119a931",
".git/objects/83/210f8fa082b3cf779d8b7b863b1842f507a5ae": "7d8bde728ac9a3ba2f02cd49524edec3",
".git/objects/1e/eccd9ac9a6dc74d67f2d64a296a056639e51ba": "3f68e6a28b686612ef7dedc49002dd5b",
".git/objects/23/89fa10fd2399aac3b5b598d156e8c3edf4ca5b": "5720bd57a0e902214872f5048797443b",
".git/objects/71/d9a9b37584128f7e7d178936bbaf0bcb511b4d": "2a5ab9101bb2c87843b6f8b7d7de1e27",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19b64f9f84340ff3ead629d0d614e7e7",
".git/logs/refs/heads/master": "19b64f9f84340ff3ead629d0d614e7e7",
".git/logs/refs/remotes/origin/master": "959ab0fa4d602992c494127a2891aeab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "8987dfc3750f45f79f5e6e895a02cc6d",
".git/refs/remotes/origin/master": "8987dfc3750f45f79f5e6e895a02cc6d",
".git/index": "426279bbd39a1888b650966d345fe29e",
".git/COMMIT_EDITMSG": "f228671c796d3a01580ed4c1e4ce8928",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "397b7dc7f7d1bb1f52d90021b991f6b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
