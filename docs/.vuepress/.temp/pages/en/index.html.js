import comp from "D:/sk3.github.io/sk3.github.io/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Stable Kit 3\",\"tagline\":\"Batch Tool of Web3\",\"text\":\"An efficient multi-platform support, full-featured web3 automation tool\",\"actions\":[{\"theme\":\"brand\",\"text\":\"Blog\",\"link\":\"/en/blog/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://qm.qq.com/q/FzdYFeoa8E\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":47},\"filePathRelative\":\"en/README.md\",\"categoryList\":[],\"bulletin\":false}")
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
