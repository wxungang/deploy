import { hopeTheme } from 'vuepress-theme-hope';

import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  hostname: 'https://justdoless.cn',

  author: {
    name: 'justdoless',
    url: 'https://justdoless.cn',
    email: 'justdoless@qq.com'
  },

  iconAssets: 'iconfont',

  // logo: '/logo.min.png',

  repo: 'https://github.com/wxungang/deploy',

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      // navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      pageInfo: ['Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word'],

      // 文章右下角
      contributors: true,
      // 打包后所有文章都被更新为当前时间
      lastUpdated: false,
      editLink: true,
      // footer
      footer: 'justdoless@foxmail.com',
      displayFooter: true
    }
  },

  // encrypt: {
  //   config: {
  //     '/demo/encrypt.html': ['1234'],
  //     '/zh/demo/encrypt.html': ['1234']
  //   }
  // },

  plugins: {
    comment: {
      // You should generate and use your own comment service
      provider: 'Waline',
      // 官方默认域名已经被封： https://waline.vercel.app
      serverURL: 'https://waline.justdoless.cn',
      wordLimit: 140, // 字数限制
      // login: 'force' // 是否强制登录
      copyright: false, // 是否显示页脚版权信息。
      meta: ['nick', 'mail'], // 展示输入项：昵称、邮箱
      requiredMeta: ['mail'] // 必须填写
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue']
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },

    // uncomment these if you want a pwa
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black'
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff'
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }
  }
});
