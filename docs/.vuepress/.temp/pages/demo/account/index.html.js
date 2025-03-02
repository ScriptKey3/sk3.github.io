import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/account/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/account/\",\"title\":\"账户模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"账户模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/account/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.37,\"words\":110},\"filePathRelative\":\"notes/demo/account/README.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"c19f38\",\"sort\":10003,\"name\":\"demo\"},{\"id\":\"d10c98\",\"sort\":10004,\"name\":\"account\"}],\"bulletin\":false}")
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
