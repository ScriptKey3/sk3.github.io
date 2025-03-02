import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/email/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/email/\",\"title\":\"邮箱管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"邮箱管理\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/email/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1,\"words\":301},\"filePathRelative\":\"notes/demo/account/邮箱.md\",\"bulletin\":false}")
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
