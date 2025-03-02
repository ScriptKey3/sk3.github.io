import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/introduction/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/demo/introduction/introduce\",\"title\":\"SK3介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SK3介绍\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/introduction/introduce\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":3.3,\"words\":990},\"filePathRelative\":\"notes/demo/introduction/SK3介绍.md\",\"bulletin\":false}")
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
