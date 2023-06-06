'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "339bf336a1d58eb3bb773585d2b1b874",
"assets/assets/images.png": "e9cd928fe174cf2b8306784c092c6723",
"assets/assets/lg.jfif": "5c348c0d496683617a53d29ad2f59a9c",
"assets/assets/logo.jfif": "67f5aad732385721781d1b3c15b2853e",
"assets/assets/RV": "a467c5bfdec6aaa5cfed5e455c72e3ca",
"assets/assets/rv.mp3": "faefbdf2e00141ad200550ecd5d5bc24",
"assets/assets/vp.mp3": "d2c58f4ad7e09a35709d6b1907d76203",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/%257B-sec-%257DNTIxMDk1ODMwMSNJTUdfMjAyMjA1MjlfMTMyMDI0LTAxLmpwZWc=_20220913_090510_20220913_090520img.0.jpg": "14ed2f663638e12171d952affb541ff9",
"assets/images/%257B-sec-%257DNTIxMDk1ODMwMSNJTUdfMjAyMjA1MjlfMTMyNzUwLTAxLmpwZWc=_20220913_090510_20220913_090520img.0.jpg": "bd3bdc616a08cea42e0b4d6cb3f24ed4",
"assets/images/1663246099127-01.jpeg": "abb87309403c23a8876aecbca5ce87a3",
"assets/images/1664040902101-01.jpeg": "2a06253e111bbb9f969a7b588240aa16",
"assets/images/1664041084783-01.jpeg": "f588a15ce7457ca993a92ce74a851d7a",
"assets/images/1664041242031-01.jpeg": "14fc89d62bbb8748d46e6063fb3bbd6e",
"assets/images/1664828669059-01.jpeg": "c3e4b81dd47739ff979fbe907d0f3914",
"assets/images/1665328875664-01.jpeg": "2651bed56eed1d591dd51f7d6fbb81b4",
"assets/images/20221004_004352.jpg": "968adf56e90f04ad20da643434067ebb",
"assets/images/20221004_004702.jpg": "f6f18ed21ddc04a560cece0d6cf21e6c",
"assets/images/20221004_005730.jpg": "abb76483dc43125e878e58b24b0161a3",
"assets/images/20221004_005942.jpg": "455992167be6c4f01e4c0e144825ad90",
"assets/images/20221004_010206.jpg": "37562067ac950fd75f18877f476745d7",
"assets/images/20221004_010247.jpg": "d8f1f618ace85274304656255eec7f57",
"assets/images/20221004_010319.jpg": "548c3b49ed23d4b62563214358cb42a6",
"assets/images/export_image.jpg": "d47b1794d9df887b45d5a0fec1a64b13",
"assets/images/images.png": "e9cd928fe174cf2b8306784c092c6723",
"assets/images/IMG20230103121116.jpg": "bb45e7af474670b42312611091f18a35",
"assets/images/IMG20230103121158.jpg": "eabbcba98c1205cfb1fb7d54019d65bb",
"assets/images/IMG20230103121204.jpg": "29edc4a89bdfb857dfc695691adfba5f",
"assets/images/IMG20230103121238.jpg": "f69eb12a8f2f95883a6888b077309885",
"assets/images/IMG20230103121257.jpg": "47fb626f677db09147b6c32ba51d8163",
"assets/images/IMG20230103121350.jpg": "ca5591399cf02840e78445e05d07066f",
"assets/images/IMG20230103121355.jpg": "9e9ae7ef9647d1c138b2015cde076e98",
"assets/images/IMG20230112120436.jpg": "1db95274d31ead409f6a0249577d1ae2",
"assets/images/IMG20230112120451.jpg": "d74a50a5119fddb11c650f96453d24bc",
"assets/images/IMG20230112120555.jpg": "acc699f435dce80d5a6e29c13644ab75",
"assets/images/IMG20230112120603.jpg": "5fd3ca5ee26761d744faca6841b2b0f5",
"assets/images/IMG20230112120645.jpg": "dee33bbd7824d3e5054cc6303a9be07b",
"assets/images/IMG20230112120653.jpg": "402dbd292ba85cf594c5bfaa246f6c2c",
"assets/images/IMG20230112120752.jpg": "530d685ff161a0cabf99b8f0a6c44f26",
"assets/images/IMG20230112120754.jpg": "b66c15c97b254b620171c4c9f85b6ae2",
"assets/images/IMG20230112120847.jpg": "c80af2dd2abe0e191eb13df344b53e95",
"assets/images/IMG20230112120849.jpg": "3792caa158e3abeecc1ddccc84031731",
"assets/images/IMG20230112120930.jpg": "979d2c607143b60795a886dd034ff376",
"assets/images/IMG20230112120932.jpg": "dac30e1ae0f6644ed53605ef78b44e86",
"assets/images/IMG20230112121212.jpg": "e667ec0bac48e424bda55eba06722db2",
"assets/images/IMG20230112121641.jpg": "aa0b1c3aea437d2287f8c03877540e94",
"assets/images/IMG20230112121705.jpg": "bd2daf1106fc48b1fa322346d4c1e0e1",
"assets/images/IMG20230112121853.jpg": "7512a389452f3d3a88bd6064d4449b30",
"assets/images/IMG20230112122019.jpg": "d461748a518a4f4a14021a467032bbd8",
"assets/images/IMG20230112122814.jpg": "23bfdcb0d7dafd92f48d9f30383b0fcc",
"assets/images/IMG20230112122816.jpg": "f6c770ec4a3e9dd0ac2764cd06217147",
"assets/images/IMG20230112122824.jpg": "82c070284f1c27cce6b038849caf4767",
"assets/images/IMG20230112122825.jpg": "139cfb2056a309823ec102b180fac9f2",
"assets/images/IMG20230112122924.jpg": "488eeed1653f27e126f7a0e64b288400",
"assets/images/IMG20230112122926.jpg": "6a2b6f7e8e4cd67cbc6f7c4b2d3ae9ac",
"assets/images/IMG20230112122958.jpg": "c31fabee6adfbaed217cc6ef0ea2723e",
"assets/images/IMG20230112123000.jpg": "798dbfe9cda54dfb34300a329a811f01",
"assets/images/IMG20230112123028.jpg": "39789b3f1aa59c866f661ddf7b28ac7e",
"assets/images/IMG20230123110025.jpg": "9719693fdb36b0a224cf5e16eb686701",
"assets/images/IMG20230123110121.jpg": "5ad86fbcb55e8e8c96a119f79b674966",
"assets/images/IMG20230125112910.jpg": "3d6d717f84a664a411500ffdf8657204",
"assets/images/IMG20230125113014.jpg": "173adbe02c114bf29692fb64d1dc8799",
"assets/images/IMG20230125113025.jpg": "cb1e330ca3ac95c89231ac61d3313bc7",
"assets/images/IMG20230125113108.jpg": "fc143fe541597f2120c2197f1782bee2",
"assets/images/IMG20230125113208.jpg": "4e7f08f707ca7b13609dfde1ced7e630",
"assets/images/IMG20230125113248.jpg": "f23eb2ed9a0fe42f6ffd99ee42b73e95",
"assets/images/IMG20230125113300.jpg": "9b3b596e717e5e84e47d546ac816af5c",
"assets/images/IMG20230125113332.jpg": "d3902dd800703ad580ab176b4ed439c6",
"assets/images/IMG20230218114955.jpg": "99d33605c83de8901d01e304f38b438a",
"assets/images/IMG20230218115132.jpg": "6ea9845822a72b6c55ab2bd877f3fa09",
"assets/images/IMG20230218115452.jpg": "bce5b8e5edb9b078d02cab0f0cd92123",
"assets/images/IMG20230218115520.jpg": "90999314ec32ce34d145abd05b3a1c2f",
"assets/images/IMG_20220529_132213.jpg": "d4c565e6e38429fbf442fa28b30ee17d",
"assets/images/IMG_20221002_224523.jpg": "ccd5c1d7b86dc26e706e37a3c27a39e7",
"assets/images/IMG_20221002_231634.jpg": "3d282acf362566ab5aa294bd0ea6b1fb",
"assets/images/IMG_20221004_004934.jpg": "9553bd2c6f8dde4eff9f414dcda2a704",
"assets/images/IMG_20221004_004958.jpg": "0ba5ec3a0591a82196d320ecc3720b55",
"assets/images/IMG_20221004_005031.jpg": "0c47657ae4bedc15ec66473338eed89f",
"assets/images/IMG_20221004_005157.jpg": "23e53082f3d2b8706ea498f27e93a77c",
"assets/images/IMG_20221004_005232.jpg": "f0f2fc87010eeba057cf7a2424a1210b",
"assets/images/IMG_20221004_005303.jpg": "a8e4cd82fac932c61bf63cf155fef4f7",
"assets/images/IMG_20221004_005328.jpg": "6718e7a42a83e63574ae7070d3e4cc6c",
"assets/images/IMG_20221004_005405.jpg": "1985601c92f7ef15b8b34ceb1453b6c0",
"assets/images/IMG_20221004_005544.jpg": "c589d7892293ca78f8e6925382c463ed",
"assets/images/IMG_20221004_005619.jpg": "e7fa28972bd6386be3434fadbd310fb2",
"assets/images/IMG_20221004_010319.jpg": "50d5236fb8f2d480b2e8316cf9a517c3",
"assets/images/IMG_20221004_011916.jpg": "8bb9f6e180afcc61343b3d976de99fd2",
"assets/images/IMG_20221013_105229.jpg": "5655543c7ad207b814dce9310f35e6f7",
"assets/images/IMG_20221013_110110.jpg": "5048d9d99d39aa555705f7b3afc14000",
"assets/images/IMG_20221026_182327.jpg": "840bd2a0851848c8a5f0ceb531c9b5d9",
"assets/images/IMG_20221026_182354.jpg": "47ec71a55e3f6ef2bfa708602fd2dc93",
"assets/images/IMG_20221026_182355.jpg": "b3869fd7651ddf67cdbfbbc5c5842c8e",
"assets/images/IMG_20221027_004734_0112.jpg": "53ec519995fc29588201b13828d087e9",
"assets/images/IMG_20221227_074225_953.jpg": "6c0f3de0976b5018bb469741f963c23c",
"assets/images/IMG_20221227_074237_418.jpg": "50f0aa2c6fe64d02dcaa0ec65da08d73",
"assets/images/IMG_20221227_074252_647.jpg": "57901e08c66c84a4cd63e0fd211e6cd5",
"assets/images/IMG_20221227_074311_449.jpg": "ddadafdfd5de2bef8de759a70ac13bf6",
"assets/images/IMG_20221227_074314_019.jpg": "19c3b887b08119681d9dd486c86049a0",
"assets/images/IMG_20221227_074346_940.jpg": "5390425fde231391cda52e5068e160da",
"assets/images/IMG_20221227_074420_892.jpg": "9d0884643ec8e1047616bae723081fd6",
"assets/images/IMG_20221227_074428_244.jpg": "65da118586663b0b38f2f53d1aedeeab",
"assets/images/IMG_20221227_074436_840.jpg": "45f250600a1f71a7c6903021fab45cf7",
"assets/images/IMG_20221227_074441_361.jpg": "636fd3f0e4ccfda29743c201b9f0eb09",
"assets/images/IMG_20221227_074510_007.jpg": "ba8165c2df72a412debbc07cee7cd752",
"assets/images/IMG_20230123_121443.jpg": "216e66718215ccc93e4504c38faf023b",
"assets/images/IMG_20230218_125522.jpg": "5e5c5ad5933b22995802c7ca7c984d29",
"assets/images/IMG_20230218_134141_117.jpg": "f6c7f7f2b6b59b0bc438bff003f40e15",
"assets/images/IMG_20230218_134141_234.jpg": "a5a87c14712a874f3713933956781e83",
"assets/images/IMG_20230304_103722.jpg": "71cb8747ad4888e3eeb474f2b0fc2590",
"assets/images/IMG_20230304_103805.jpg": "0f6367b1e75e1d704ce60a3020ec4a82",
"assets/images/IMG_20230311_131735.jpg": "6a9e045d09854a2fbc45ac9effe9b1e2",
"assets/images/IMG_20230312_230614.jpg": "18155a41965017b746b757e64744bd01",
"assets/images/PicsArt_09-14-12.48.20.jpg": "cea83b9f421c0aec933640e68ad11391",
"assets/images/Picsart_22-08-14_08-32-55-441.jpg": "6f6756e6253b068107a300404d1e7156",
"assets/images/Picsart_22-08-15_17-25-50-597.jpg": "1c0b5dc726285acffad08fdc19783ccd",
"assets/images/Picsart_22-09-15_18-20-25-311.jpg": "e4964a5fcfb37f0e20f46a5c20b5d09e",
"assets/images/Picsart_23-02-18_13-37-05-737.jpg": "9fe432c7c0a3bc1a37bfbf27580ada5c",
"assets/images/Picsart_23-02-18_13-38-02-956.png": "860d928596eef9c9aca0aa6c610dd9a0",
"assets/images/Picsart_23-03-04_10-41-33-867.jpg": "4cf113adf5553449726e3e056be3faf6",
"assets/images/Screenshot_2023-05-13-11-25-11-59_1c337646f29875672b5a61192b9010f9.jpg": "fa3fd6e4e9aab10b8bec3869da9e17eb",
"assets/images/Snapchat-158712135.jpg": "b842c6a3e800e7474851b2a9b09084b9",
"assets/images/Snapchat-2037444004.jpg": "b02933a97ab5ca82d86db00916f14e05",
"assets/images/Snapchat-230290363.jpg": "a824eb551c88671ec59c39474dfd1421",
"assets/images/Snapchat-485368697.jpg": "a5fd27b3f58b070dd7de83f36c0636d5",
"assets/NOTICES": "410fcf43d06e9913159266c770e1c9cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "df09ad1d55c5a4816fea326fa7128155",
"/": "df09ad1d55c5a4816fea326fa7128155",
"main.dart.js": "d5f1f3dcda6cee57715927e8a061cb6c",
"manifest.json": "75fb108f51f9415e25a9269b268906a3",
"version.json": "a2aadc86106b554886d14bcb65ffaed4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
