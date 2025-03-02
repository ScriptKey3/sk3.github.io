import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/testnet/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/testnet/\",\"title\":\"测试网\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试网\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/testnet/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/project/测试网.md\",\"bulletin\":false}")
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
