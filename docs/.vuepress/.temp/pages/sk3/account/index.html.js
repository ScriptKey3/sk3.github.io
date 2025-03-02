import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/sk3/account/index.html.vue"
const data = JSON.parse("{\"path\":\"/sk3/account/\",\"title\":\"账户模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"账户模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/sk3/account/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.41,\"words\":122},\"filePathRelative\":\"notes/sk3/2.账号管理/README.md\",\"bulletin\":false}")
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
