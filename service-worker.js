/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1204ebcf4bff9924cc717a0eb67755c"
  },
  {
    "url": "assets/css/0.styles.1f68c2c0.css",
    "revision": "ef0c98dfd12ed014dc2895c4437e8ea4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.981c0961.js",
    "revision": "8451893ad6026aae4acba396405f3afc"
  },
  {
    "url": "assets/js/10.b413c24e.js",
    "revision": "d57e24fe17800efebce6412c4df933b4"
  },
  {
    "url": "assets/js/11.db227c46.js",
    "revision": "774cd0edab9bedd95b9a92dfde6cf78e"
  },
  {
    "url": "assets/js/12.1829e66c.js",
    "revision": "bca3f106efe1a1a993f42a04f2baa01c"
  },
  {
    "url": "assets/js/13.8fc83ade.js",
    "revision": "2813e9d055f29fc91dcee60f4c8dcefe"
  },
  {
    "url": "assets/js/14.294bc385.js",
    "revision": "afc6615da550c4c1e202fa05b137ef86"
  },
  {
    "url": "assets/js/15.e9df4d07.js",
    "revision": "9264baf6be879513567dc2d9394fec01"
  },
  {
    "url": "assets/js/16.0e5dbf14.js",
    "revision": "4a134eee6577942188b466e603206d39"
  },
  {
    "url": "assets/js/17.469e941c.js",
    "revision": "973865ee762f3731f5f683c9adf77ce4"
  },
  {
    "url": "assets/js/18.6d9c576b.js",
    "revision": "cc386b9197bb4cebd544c36c74765a9c"
  },
  {
    "url": "assets/js/19.1cab5548.js",
    "revision": "003c9b4dd75be2f8494e58a8f9b12ca6"
  },
  {
    "url": "assets/js/2.e61e2a84.js",
    "revision": "7886a6371978d3200efa4a0640a98f32"
  },
  {
    "url": "assets/js/20.5aec2ac0.js",
    "revision": "aa8b76405a3feb94fb5a28eb570cc25c"
  },
  {
    "url": "assets/js/21.d445cdf6.js",
    "revision": "e5515474e87737752225f471e6f06647"
  },
  {
    "url": "assets/js/22.1d832ddb.js",
    "revision": "4fbc814e872337ed7e4bb6b8d04b2220"
  },
  {
    "url": "assets/js/23.fb8ac7fd.js",
    "revision": "fb42752c73c9ee170d374096d01dff7a"
  },
  {
    "url": "assets/js/24.30023be6.js",
    "revision": "f4c10970d9b8945d3961f67e62984d84"
  },
  {
    "url": "assets/js/25.55d10268.js",
    "revision": "fa2511c8c86fa707d0332194cb17ba71"
  },
  {
    "url": "assets/js/26.01703210.js",
    "revision": "bf44e42b98f2a7b8263cf78026ba3e71"
  },
  {
    "url": "assets/js/27.8c544c92.js",
    "revision": "43bdf74c2bf56aee28e14b2f01a5a219"
  },
  {
    "url": "assets/js/28.8caac1c6.js",
    "revision": "ffb07a3aa60ed45779679dfa153a7d3f"
  },
  {
    "url": "assets/js/29.e70217b8.js",
    "revision": "e7133a08de0e634a74b2e6e4d062daa4"
  },
  {
    "url": "assets/js/3.3adfb633.js",
    "revision": "e20c612dd1387204bb91ddfc149db308"
  },
  {
    "url": "assets/js/30.b5dc6a8c.js",
    "revision": "b3b9e1e6f780f033e4dc29859038f5de"
  },
  {
    "url": "assets/js/31.3b44f577.js",
    "revision": "18e5bb175fd25d2bb6edfa30070b0d61"
  },
  {
    "url": "assets/js/32.94455351.js",
    "revision": "081d11e42a6e66b40c883e14a6eb64f0"
  },
  {
    "url": "assets/js/33.2470aa20.js",
    "revision": "7fc5c1e6058b950f909d84ff649209d2"
  },
  {
    "url": "assets/js/34.53630368.js",
    "revision": "33c6f1ce1aff143bf76db1d48faeb24f"
  },
  {
    "url": "assets/js/35.ebdd3b90.js",
    "revision": "0ceaba61f91772652b7a54d011ee1807"
  },
  {
    "url": "assets/js/36.b981e948.js",
    "revision": "ddef48594b7b18c169c84b88d6d39d73"
  },
  {
    "url": "assets/js/37.d1e579d8.js",
    "revision": "f9c1703762a92b7cda84e018b08345ab"
  },
  {
    "url": "assets/js/38.b1245030.js",
    "revision": "d6fb55791fae00013802f8aa08732ec5"
  },
  {
    "url": "assets/js/39.f88d8118.js",
    "revision": "34c1457ae9306ea515fac773790a8196"
  },
  {
    "url": "assets/js/40.8f40b591.js",
    "revision": "664ccf797680c3fbbd9b79860c9383d0"
  },
  {
    "url": "assets/js/41.cf6c3bfb.js",
    "revision": "a99309d42ed9efde9ad6e821365de3b6"
  },
  {
    "url": "assets/js/42.8b335924.js",
    "revision": "8521352a21418e2058007ca64dfc0360"
  },
  {
    "url": "assets/js/43.fc7ef5ad.js",
    "revision": "62629bd67a5c8e71b88506a716dedeca"
  },
  {
    "url": "assets/js/44.c72e6b6d.js",
    "revision": "37b38f021b8980da031f6207242abdc4"
  },
  {
    "url": "assets/js/45.732571ad.js",
    "revision": "7e795cb6e1ee99ef34fa92f0254d4f93"
  },
  {
    "url": "assets/js/46.6817c8fa.js",
    "revision": "6afe4ae27224f9fda3e2124d56939b26"
  },
  {
    "url": "assets/js/47.1c2050b3.js",
    "revision": "5a68a500f0f5ef4bffef7f9f4a0789bb"
  },
  {
    "url": "assets/js/48.c21a5bee.js",
    "revision": "e77d4123c2a70b869e1a0735b551ca3f"
  },
  {
    "url": "assets/js/49.83c30e10.js",
    "revision": "d0e4e656e1ae8c8dcae3a5e71cda855f"
  },
  {
    "url": "assets/js/5.8785bc97.js",
    "revision": "6da3cf27d1a5007cee9c4b988e36911c"
  },
  {
    "url": "assets/js/50.c1868100.js",
    "revision": "cf40b3ea4ab8d320f08d718051b5d385"
  },
  {
    "url": "assets/js/51.152e18a6.js",
    "revision": "b09926e04d1d9d45eed0e108c61a5a73"
  },
  {
    "url": "assets/js/52.b4a0e006.js",
    "revision": "897a7df00b5fa0521b1754585f043b92"
  },
  {
    "url": "assets/js/6.215cc46a.js",
    "revision": "10a5067225114e7a4eb6c31f7d5be2b8"
  },
  {
    "url": "assets/js/7.4c31fa13.js",
    "revision": "e0c332a8a0521f01860a9c3ee8493838"
  },
  {
    "url": "assets/js/8.8db3cd22.js",
    "revision": "a39561b52f8cfc75c3ca0d9c557529b5"
  },
  {
    "url": "assets/js/9.490d4cea.js",
    "revision": "9067a4e840b7434edcfa1a580369b853"
  },
  {
    "url": "assets/js/app.49743547.js",
    "revision": "5164e9ff9b7ddb44061906eb8bcb9ce1"
  },
  {
    "url": "en/index.html",
    "revision": "51c86475fa0164bb9dd70fe02eeb2378"
  },
  {
    "url": "en/works/index.html",
    "revision": "6d5c754f9ba9a4a8fb125bcea25fefef"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5778e4edb7382f61f7a0a60d021b7d60"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "45eaa2424b9360b3f76d52a21df1cd0f"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "8804d1341c63fe54f6654ee40edb6008"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "9c7c4bf53f9a0895201d050838558307"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "1a695622d4d472fc0e74a3e3f69cde91"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "0f1a409585c3fb4b856acd3881ceb7cc"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "6f8641881cec5d351c0139f509c3dd0a"
  },
  {
    "url": "images/encourage.png",
    "revision": "b4ebfead2678d2bbe24fd726dca87c32"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "80ad195bf5ed36c1d93c6192eb7bc716"
  },
  {
    "url": "logo.png",
    "revision": "e763acd781f7a6bef726fa9a5298282f"
  },
  {
    "url": "zh/article/adding-shadow-effect-to-batch-image.html",
    "revision": "5eedf1b5a15d70e38afd4779a3fb3d5b"
  },
  {
    "url": "zh/article/arya-jarvis-born-for-efficiency.html",
    "revision": "a1509c552a25fa5190ea5793755ef7c0"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "637cd1a6842d55d5541d2d8c8f9e19c7"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "d9f83e57d644e946d939727e931c3661"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "9bb669c6c5f58c60f4a9adfa46a6414a"
  },
  {
    "url": "zh/article/first-talk-about-nice-links.html",
    "revision": "b3e58dceb55904200ae344e1b35059b2"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "13f123765434a400b681bc20f1c2a0d7"
  },
  {
    "url": "zh/article/how-to-quickly-delete-git-repository-new-changes.html",
    "revision": "abf232d6c415e74c3c87d1e413ee238e"
  },
  {
    "url": "zh/article/how-to-use-npm-npx-tutorial.html",
    "revision": "6b06e422f7dfd921b73e5a5b2df08f12"
  },
  {
    "url": "zh/article/how-to-write-a-good-readme-for-your-project.html",
    "revision": "851cae134de1dd75215ecf095130a831"
  },
  {
    "url": "zh/article/index.html",
    "revision": "e725647f777c0429c3ef4a9a3eb2c3d4"
  },
  {
    "url": "zh/article/js-import-export-vs-require-module-exports.html",
    "revision": "1fdc7c60c341a4dde1166373c5db67f5"
  },
  {
    "url": "zh/article/list-of-websites-i-most-want-to-share-with-my-friends.html",
    "revision": "8169e9e4b61332fc8cb2b81698b41773"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "afcecb7e413671bf9ab3e6fb1f4a6e00"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "3cee9a9293f23d2da9f0b5f10d9d8a82"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "f0cef31f0d3408a83a8a24bf196fd6d5"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "7a40c7b71992ffb39f1fb7a7009181e7"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "aaeddd066abb2470df22b90b13276221"
  },
  {
    "url": "zh/article/vuepress-hexo-jekyll-ghost-gitbook-hugo-solo_compare-personal-website-generator.html",
    "revision": "2af5916ea4b7acd492f825578a2980a0"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "2c12dd58ba697749471c49fa78daae7b"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "61ad5ad355472143097ec74683745adc"
  },
  {
    "url": "zh/blog/ghost-blog.html",
    "revision": "c71d095fed2a574a656182e737beaaaa"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "adbd291a88ef8e1184b4d263ffdcdeef"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "f8beda6d5dac196c27d0365902fff63e"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "83c9f1f6a549ea6fd6f702795dffa4a2"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "40b8a52bc2a6a5b48892ee73cd9567d8"
  },
  {
    "url": "zh/blog/latest-vuepress-blog.html",
    "revision": "08d886154e99f73902f89d346d3d848a"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "b01a1f22b89308a65c9d8c9d615a7f31"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "c5ccad0baa2d88238ec5a1aa8ed2f99f"
  },
  {
    "url": "zh/index.html",
    "revision": "6b1fc15c2c983734b3674ea61f1fd503"
  },
  {
    "url": "zh/works/index.html",
    "revision": "0f62f8a7af6f2307ad3d842e87bb8f1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
