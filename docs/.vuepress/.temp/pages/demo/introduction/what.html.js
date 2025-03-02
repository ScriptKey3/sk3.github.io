import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/introduction/what.html.vue"
const data = JSON.parse("{\"path\":\"/demo/introduction/what\",\"title\":\"软件安装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"软件安装\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/introduction/what\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"notes/demo/introduction/软件安装.md\",\"bulletin\":false}")
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
