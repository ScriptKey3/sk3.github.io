import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/galaxy/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/galaxy/\",\"title\":\"银河模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"银河模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/galaxy/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/demo/project/银河模块.md\",\"bulletin\":false}")
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
