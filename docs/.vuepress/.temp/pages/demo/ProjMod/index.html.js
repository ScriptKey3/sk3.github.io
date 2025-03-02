import comp from "E:/Sk3_web/docs/.vuepress/.temp/pages/demo/ProjMod/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/ProjMod/\",\"title\":\"项目模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目模块\",\"createTime\":\"2025/01/23 15:32:26\",\"permalink\":\"/demo/ProjMod/\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"notes/demo/project/README.md\",\"bulletin\":false}")
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
