export const blogPostData = [{"path":"/en/article/wylv0akx/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/01/17 15:26:28","lang":"en-US","excerpt":""},{"path":"/en/article/vqavhdrw/","title":"Custom Component","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["preview","component"],"createTime":"2025/01/17 15:26:28","lang":"en-US","excerpt":""},{"path":"/article/rwlkou3q/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/01/17 15:26:28","lang":"zh-CN","excerpt":""},{"path":"/article/v30d3bim/","title":"sk3更新日志","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/01/17 15:26:28","lang":"zh-CN","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
