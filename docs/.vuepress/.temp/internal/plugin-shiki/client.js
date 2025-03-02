
import { useCopyCode } from 'D:/sk3.github.io/sk3.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.128_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_eaxmtgjgkkjiz6qorihkhplw6u/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'D:/sk3.github.io/sk3.github.io/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.128_typescript@5.7.3_vue@3.5.13_typescript@5.7.3__vue_eaxmtgjgkkjiz6qorihkhplw6u/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
