import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/introduction/introduce/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/introduction/introduce/\",\"title\":\"SK3介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SK3介绍\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/introduction/introduce/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":4.08,\"words\":1223},\"filePathRelative\":\"notes/demo/introduction/SK3介绍.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"19493f\",\"sort\":10005,\"name\":\"introduction\"}],\"bulletin\":false}")
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
