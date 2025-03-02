export const siteData = JSON.parse("{\"base\":\"/Stable-kit-3/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"title\":\"Stable kit 3\",\"lang\":\"zh-CN\",\"description\":\"The best Tools of web3\"},\"/en/\":{\"title\":\"Stable kit 3\",\"lang\":\"en-US\",\"description\":\"The best Tools of web3\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
