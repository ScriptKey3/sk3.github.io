import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/sk3/project/testnet/index.html.vue"
const data = JSON.parse("{\"path\":\"/sk3/project/testnet/\",\"title\":\"测试网\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试网\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/sk3/project/testnet/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/sk3/3.项目模块/3.测试网.md\",\"bulletin\":false}")
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
