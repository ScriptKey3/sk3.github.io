import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/ChainInteract/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/ChainInteract/\",\"title\":\"链上交互\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"链上交互\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/ChainInteract/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/demo/tool/链上交互.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"85f5f6\",\"sort\":10009,\"name\":\"tool\"}],\"bulletin\":false}")
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
