import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/tw/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/tw/\",\"title\":\"TW操作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TW操作\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/tw/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.33,\"words\":98},\"filePathRelative\":\"notes/demo/account/TW操作.md\",\"bulletin\":false}")
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
