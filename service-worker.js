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
    "revision": "32e09b62a16e51007d78b1b87d9811eb"
  },
  {
    "url": "assets/css/0.styles.53c47686.css",
    "revision": "e57c178e6c5ca1735c655397b3eb648f"
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
    "url": "assets/js/1.840fa321.js",
    "revision": "21cf4bf58c848c76a09f2db88a763bbf"
  },
  {
    "url": "assets/js/10.50df8461.js",
    "revision": "b1d94ee535a5afaa6344f3c37fa488a2"
  },
  {
    "url": "assets/js/11.e2971878.js",
    "revision": "b97731a8861a089607322dc0ecbc0892"
  },
  {
    "url": "assets/js/12.174435ae.js",
    "revision": "a97ce92124ae7ae6dc646e38d824629b"
  },
  {
    "url": "assets/js/13.2aedb529.js",
    "revision": "217ad64f161e4ff9f1b575c7f05fa90f"
  },
  {
    "url": "assets/js/14.7181030b.js",
    "revision": "e9f19727f81d8b0fe10e54707fbca977"
  },
  {
    "url": "assets/js/15.16438462.js",
    "revision": "28881a015c976bb523591f278ba3e076"
  },
  {
    "url": "assets/js/16.29b75289.js",
    "revision": "744928ec5a679f2faf764dd8f2179104"
  },
  {
    "url": "assets/js/17.575cf9bd.js",
    "revision": "11a937da60b9161db7ca378048567cc1"
  },
  {
    "url": "assets/js/18.92dfdcd0.js",
    "revision": "c9c86f6b36914e9939fa6aceb24ae11d"
  },
  {
    "url": "assets/js/19.78182853.js",
    "revision": "058c55cd0e69f5e169d366f4fce4e585"
  },
  {
    "url": "assets/js/2.bde53fcb.js",
    "revision": "4d63425d8ddd9e87fc4ee5ba16227afd"
  },
  {
    "url": "assets/js/20.bd041242.js",
    "revision": "25a20b7deaa12640dded24bde67213f2"
  },
  {
    "url": "assets/js/21.031a120e.js",
    "revision": "2132621b63b7d15fdd0ed842535c4dd2"
  },
  {
    "url": "assets/js/22.dfb81bb1.js",
    "revision": "6480bf3fd6a3e5b44e8b82a62f45b241"
  },
  {
    "url": "assets/js/23.1aff0a14.js",
    "revision": "26f5dd46da258991df953d1364b53e80"
  },
  {
    "url": "assets/js/24.9549bfa3.js",
    "revision": "576fd396caf0be7b1e6773091ed99ae3"
  },
  {
    "url": "assets/js/25.e7f3e27a.js",
    "revision": "27865b4e7395cd14b55dc683dbca7fa2"
  },
  {
    "url": "assets/js/26.4d12f422.js",
    "revision": "b69838dbbfcab44ef290bbc14a02efef"
  },
  {
    "url": "assets/js/27.177640ee.js",
    "revision": "53c116e14efce32b5bb52cf251d39d6e"
  },
  {
    "url": "assets/js/28.5edcf084.js",
    "revision": "81119f73ef1264325f58e4247f912a01"
  },
  {
    "url": "assets/js/29.7fe42bbc.js",
    "revision": "27d834768919bf5d89719ad667d2a688"
  },
  {
    "url": "assets/js/3.7f2286d1.js",
    "revision": "5c91e3f35161ec870b35bb6f4c211937"
  },
  {
    "url": "assets/js/30.f6b8e0ed.js",
    "revision": "5bbd645be8f663ae4018075b5b06fe6c"
  },
  {
    "url": "assets/js/31.d15cfdc8.js",
    "revision": "15b6999e67c6feaf07a7726111483f56"
  },
  {
    "url": "assets/js/32.84012422.js",
    "revision": "437939e50712aa940f4bbe3f2e51d80c"
  },
  {
    "url": "assets/js/33.845ed912.js",
    "revision": "b3d2920835356eb92dcddec07cb42e2a"
  },
  {
    "url": "assets/js/34.09d975da.js",
    "revision": "f80aae2ad416564b3266ac8ee06942e5"
  },
  {
    "url": "assets/js/35.624452e8.js",
    "revision": "fc4649ee791bf65c380f2a7cb5d6e096"
  },
  {
    "url": "assets/js/36.3f7f12cf.js",
    "revision": "e2dd4c19e727493bc09974232a336788"
  },
  {
    "url": "assets/js/37.c5282f70.js",
    "revision": "3271e91e7c6f9ffb79595e0b2680d592"
  },
  {
    "url": "assets/js/38.f802f13c.js",
    "revision": "bec4f0d3e73aa18c1e434824672a00fb"
  },
  {
    "url": "assets/js/39.dd1416e1.js",
    "revision": "ba219e3bb6614a7ae2ed5f91850a2262"
  },
  {
    "url": "assets/js/40.99520692.js",
    "revision": "9d1fce9c05e5437f745c885c33618be2"
  },
  {
    "url": "assets/js/41.388b030f.js",
    "revision": "284fc442d598acbcf35906e6b5ffaf9d"
  },
  {
    "url": "assets/js/42.ecc65c7a.js",
    "revision": "8536abc8a7d233479d12d21e14212330"
  },
  {
    "url": "assets/js/43.edb20abc.js",
    "revision": "16ec6ca5bf7eb8498f78bef2780d04d3"
  },
  {
    "url": "assets/js/44.a4d4248e.js",
    "revision": "7620ba914e3f0bd76a8bb35bd738e92e"
  },
  {
    "url": "assets/js/45.158c29b0.js",
    "revision": "7f72e5020f891127d75316ebf3b87013"
  },
  {
    "url": "assets/js/46.c6391f5b.js",
    "revision": "07a44a46f2edc38a9a0be4ea2b5ed051"
  },
  {
    "url": "assets/js/47.2ac3e632.js",
    "revision": "cd489c7e10353ba7d9ff62acf2a01f6b"
  },
  {
    "url": "assets/js/48.42b13121.js",
    "revision": "80a4150c13df32fec0d9da0210bac30d"
  },
  {
    "url": "assets/js/49.f71cdcee.js",
    "revision": "98c70f924fe750ee4c25fb1fd3077bd3"
  },
  {
    "url": "assets/js/5.83e8f502.js",
    "revision": "50ab38ae3f7e43785228b95029cba380"
  },
  {
    "url": "assets/js/50.c6bcd09e.js",
    "revision": "6df7a7372f388dd0396d4d777c65855f"
  },
  {
    "url": "assets/js/51.da7fe6b6.js",
    "revision": "1530392e6173eed0a9014d3979fc9a0b"
  },
  {
    "url": "assets/js/52.51b33673.js",
    "revision": "0cb10ec44abfcfc1d314817c23eac043"
  },
  {
    "url": "assets/js/53.88ff86ae.js",
    "revision": "cd442f1e38f71ea3c8eb491c663dbd63"
  },
  {
    "url": "assets/js/6.1566b05c.js",
    "revision": "e84f63e606e4aa23c80bfca68af2e1af"
  },
  {
    "url": "assets/js/7.4c31fa13.js",
    "revision": "e0c332a8a0521f01860a9c3ee8493838"
  },
  {
    "url": "assets/js/8.b90b73fb.js",
    "revision": "4aa2fa5aa55b91fc6278f7e2ece9f814"
  },
  {
    "url": "assets/js/9.67c82f21.js",
    "revision": "b42ebe0f84d8b52753c31dac252218fd"
  },
  {
    "url": "assets/js/app.c6571405.js",
    "revision": "18922cc3878170e28d9d43e2a9b9be8c"
  },
  {
    "url": "en/index.html",
    "revision": "30ab185a64089d18de354cf674e7c773"
  },
  {
    "url": "en/works/index.html",
    "revision": "ae6d6cb461435ba59890d5b4ee37b217"
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
    "revision": "9217d67fb05b50b020caf924c4bc2c88"
  },
  {
    "url": "logo.png",
    "revision": "e763acd781f7a6bef726fa9a5298282f"
  },
  {
    "url": "zh/article/adding-shadow-effect-to-batch-image.html",
    "revision": "a788c617d9de1571078029148a9606d5"
  },
  {
    "url": "zh/article/arya-jarvis-born-for-efficiency.html",
    "revision": "f262ccca22996ad5bfbf2e05e414f394"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "3eda8d2c1a79732a0ba4952d3c8d965d"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "934c0992dba696ef043c07e61d662e6e"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "d1df3ebf306c08589e54bdb13a5170af"
  },
  {
    "url": "zh/article/first-talk-about-nice-links.html",
    "revision": "f459f30e9315ccdb74e00b872674be93"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "b145ec7701ad35eeb51a2e466101f22f"
  },
  {
    "url": "zh/article/how-to-quickly-delete-git-repository-new-changes.html",
    "revision": "fe794d76120a2a86bf6d714b14930077"
  },
  {
    "url": "zh/article/how-to-use-npm-npx-tutorial.html",
    "revision": "ab5628d0513b5641a452679da0311d77"
  },
  {
    "url": "zh/article/how-to-write-a-good-readme-for-your-project.html",
    "revision": "6ec0260c0c31711f960712de41c9767d"
  },
  {
    "url": "zh/article/index.html",
    "revision": "db5d6f45d0eb9ed0f41898d704585e47"
  },
  {
    "url": "zh/article/js-import-export-vs-require-module-exports.html",
    "revision": "27ce7dd533d4b1e109d5bc8196876ac1"
  },
  {
    "url": "zh/article/list-of-websites-i-most-want-to-share-with-my-friends.html",
    "revision": "0b506d12b2cc25ab2195123f36fee188"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "1d8530a20972c5a7ee7d13f819a290d5"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "93d288d532884c13ee6572056b6ce005"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "c052421251994fce669d298c6df0b6ce"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "b0b19b621096277bb1dc1215321faa56"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "f38b6eb457b7a95e3ccbab41c610bf37"
  },
  {
    "url": "zh/article/vuepress-hexo-jekyll-ghost-gitbook-hugo-solo_compare-personal-website-generator.html",
    "revision": "2efbbf6c013b700b2ad9fb5ad6a42b55"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "30511d62a2e04109d3b7430f1e15a951"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "42334c76be7b3a99bdd139d655b0b632"
  },
  {
    "url": "zh/blog/ghost-blog.html",
    "revision": "74b670ec410406ec8bdb6ac826ec3ea7"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "e3d7411b8cb480a871eeaf1952e894d1"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "744b813b97672bc705bcd44bead71412"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "baf6a892fab30d3f21353a09524684da"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "fa9716f356e59950d05e4ea878d746d4"
  },
  {
    "url": "zh/blog/latest-vuepress-blog.html",
    "revision": "d675c4fd207a53b47f1088dab9c1c955"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "1cdeeebd18cf0588daa2c29a8e4433fb"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "772e2f164458a8870c36d23a0dcd6394"
  },
  {
    "url": "zh/index.html",
    "revision": "9afc3f417550758e8ff4258957a3c6ea"
  },
  {
    "url": "zh/works/index.html",
    "revision": "16953ff13915f34224e4c56303b9c706"
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
