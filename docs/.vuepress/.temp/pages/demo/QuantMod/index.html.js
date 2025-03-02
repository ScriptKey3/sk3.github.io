import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/QuantMod/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/QuantMod/\",\"title\":\"量化模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"量化模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/QuantMod/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/demo/QuantMod/README.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"7d2472\",\"sort\":10007,\"name\":\"QuantMod\"}],\"bulletin\":false}")
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
