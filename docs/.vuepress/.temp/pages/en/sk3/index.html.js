import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/en/sk3/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/sk3/\",\"title\":\"STABLE KIT 3\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"STABLE KIT 3\",\"createTime\":\"2025/01/23 19:57:06\",\"permalink\":\"/en/sk3/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.91,\"words\":274},\"filePathRelative\":\"en/notes/sk3/README.md\",\"bulletin\":false}")
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
