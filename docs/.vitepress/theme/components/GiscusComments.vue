<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { isDark } = useData()
const container = ref<HTMLElement>()

function loadGiscus() {
  if (!container.value) return
  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'somewhere1/ATA')
  script.setAttribute('data-repo-id', '')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', '')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark_dimmed' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  container.value.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

watch(() => route.path, () => {
  loadGiscus()
})

watch(isDark, () => {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: isDark.value ? 'dark_dimmed' : 'light' } } },
      'https://giscus.app'
    )
  }
})
</script>

<template>
  <div class="giscus-wrapper">
    <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--ata-coral-glow);" />
    <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">💬 讨论 & 交流</h3>
    <div ref="container" />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
}
</style>
