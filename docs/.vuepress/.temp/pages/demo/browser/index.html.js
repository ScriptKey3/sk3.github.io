import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/browser/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/browser/\",\"title\":\"指纹浏览器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指纹浏览器\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/browser/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":2.42,\"words\":725},\"filePathRelative\":\"notes/demo/tool/指纹浏览器.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"85f5f6\",\"sort\":10009,\"name\":\"tool\"}],\"bulletin\":false}")
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
