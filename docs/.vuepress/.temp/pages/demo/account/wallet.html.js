import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/account/wallet.html.vue"
const data = JSON.parse("{\"path\":\"/demo/account/wallet\",\"title\":\"钱包管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"钱包管理\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/account/wallet\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.44,\"words\":133},\"filePathRelative\":\"notes/demo/account/Wallet.md\",\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
