import comp from "D:/sk3.github.io/sk3.github.io/docs/.vuepress/.temp/pages/demo/project/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/project/\",\"title\":\"项目模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/project/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/demo/project/README.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"1df4be\",\"sort\":10009,\"name\":\"project\"}],\"bulletin\":false}")
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
