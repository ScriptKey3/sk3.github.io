import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/sk3/introduction/introduce/index.html.vue"
const data = JSON.parse("{\"path\":\"/sk3/introduction/introduce/\",\"title\":\"SK3介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SK3介绍\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/sk3/introduction/introduce/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":3.99,\"words\":1196},\"filePathRelative\":\"notes/sk3/1.SK3介绍/1.SK3介绍.md\",\"bulletin\":false}")
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
