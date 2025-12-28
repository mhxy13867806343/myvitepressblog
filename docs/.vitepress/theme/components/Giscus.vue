<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const giscusContainer = ref(null)

const loadGiscus = () => {
  if (!giscusContainer.value) return
  
  // 清除旧的 giscus
  giscusContainer.value.innerHTML = ''
  
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'mhxy13867806343/mhxy13867806343.github.io')
  script.setAttribute('data-repo-id', '')  // 需要配置
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', '')  // 需要配置
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark_tritanopia' : 'light_tritanopia')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  
  giscusContainer.value.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

// 监听主题变化
watch(isDark, () => {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: isDark.value ? 'dark_tritanopia' : 'light_tritanopia'
          }
        }
      },
      'https://giscus.app'
    )
  }
})
</script>

<template>
  <div class="giscus-wrapper">
    <div ref="giscusContainer" class="giscus"></div>
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 2px solid rgba(255, 107, 157, 0.2);
}

.giscus {
  min-height: 200px;
}
</style>
