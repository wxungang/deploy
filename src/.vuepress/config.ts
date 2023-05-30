import { defineUserConfig } from 'vuepress';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'deploy',
      description: 'awesome list'
    }
  },

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-KDW1VLG0JT'
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
