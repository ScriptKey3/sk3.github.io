import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/project/tggame/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/project/tggame/\",\"title\":\"TG游戏\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TG游戏\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/project/tggame/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"notes/demo/project/TG游戏.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"1df4be\",\"sort\":10008,\"name\":\"project\"}],\"bulletin\":false}")
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
