import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/AccMgmt/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/AccMgmt/\",\"title\":\"账户管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"账户管理\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/AccMgmt/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":2.16,\"words\":647},\"filePathRelative\":\"notes/demo/account/账户管理.md\",\"bulletin\":false}")
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
