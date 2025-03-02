import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/Sk3_web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.128_esbuild@0.24.2_less@4.2.1_markdown-it@14.1.0_sass-embed_osdpkc2axss7l5fly5ynshnxhu/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/Sk3_web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.128_esbuild@0.24.2_less@4.2.1_markdown-it@14.1.0_sass-embed_osdpkc2axss7l5fly5ynshnxhu/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'E:/Sk3_web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.128_esbuild@0.24.2_less@4.2.1_markdown-it@14.1.0_sass-embed_osdpkc2axss7l5fly5ynshnxhu/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'E:/Sk3_web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.128_esbuild@0.24.2_less@4.2.1_markdown-it@14.1.0_sass-embed_osdpkc2axss7l5fly5ynshnxhu/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import 'E:/Sk3_web/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.128_esbuild@0.24.2_less@4.2.1_markdown-it@14.1.0_sass-embed_osdpkc2axss7l5fly5ynshnxhu/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
