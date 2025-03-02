import { defineNavbarConfig } from 'vuepress-theme-plume'
export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '更新', link: '/blog/' },
  {
    text: 'web3 批量工具',link: '/notes/sk3/' },
  { text: '指纹浏览器', link: '/notes/browser/' },
])
export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Update', link: '/en/blog/' },
  {
    text: 'Notes',
    items: [{ text: 'web3 Batch tool', link: '/en/notes/sk3/' },{ text: 'Anti-association browser', link: '/en/notes/sk3/' }]
  },
])
