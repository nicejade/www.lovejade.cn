const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

module.exports = {
  base: '/',
  // 存放“生成静态的 HTML 文件”路径;
  dest: './docs/dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  ga: 'UA-86109050-8',
  updatePopup: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '幽居空谷轩',
      description: '繁华尽处，寻一无人山谷，建一木制小屋，铺一青石小路，与你晨钟暮鼓，安之若素。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'LOVE JADE HOME',
      description: 'Wherever you go， whatever you do， I will be right here waiting for you.'
    }
  },
  configureWebpack: buildConfig.configureWebpack,
  themeConfig,
  evergreen: true,
  markdown: {
    // 是否在每个代码块的左侧显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-checkbox'))
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: '🎉 发现新内容可用 ✏️',
          buttonText: '刷新'
        }
      }
    ]
  ]
}
