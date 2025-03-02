import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/quest/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/quest/\",\"title\":\"常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常见问题\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/quest/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":2.91,\"words\":873},\"filePathRelative\":\"notes/demo/question/常见问题.md\",\"bulletin\":false}")
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
