import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/sk3/question/index.html.vue"
const data = JSON.parse("{\"path\":\"/sk3/question/\",\"title\":\"常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见问题\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/sk3/question/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":3.24,\"words\":973},\"filePathRelative\":\"notes/sk3/6.常见问题/常见问题.md\",\"bulletin\":false}")
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
