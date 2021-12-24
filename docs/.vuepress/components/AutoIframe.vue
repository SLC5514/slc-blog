<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const iframeRef = ref()

const iframeId = Math.random().toString().substr(2)

const initHeight = () => {
  if (!iframeRef.value) return
  const rect = iframeRef.value.getBoundingClientRect()
  let height = document.documentElement.clientHeight - rect.top - 15
  const children = iframeRef.value.parentNode.children
  const len = children.length
  let idx = -1
  for (let i = len - 1; i >= 0; i--) {
    if (children[i].id === iframeId) idx = i
    if (idx !== -1 && children[i].classList.contains('auto-iframe') && parseFloat(children[i].style.height) > 0) {
      height = parseFloat(children[i].style.height)
      break
    }
  }
  iframeRef.value.style.height = height + 'px'
}

onMounted(() => {
  initHeight()
  if (window.addEventListener) {
    window.addEventListener('resize', initHeight, false)
  } else {
    window.onresize = initHeight
  }
})

onUnmounted(() => {
  if (window.addEventListener) {
    window.removeEventListener('resize', initHeight, false)
  } else {
    window.onresize = null
  }
})
</script>

<template>
  <iframe
    :id="iframeId"
    class="auto-iframe"
    ref="iframeRef"
    sandbox
    seamless
    width="100%"
    style="border: 1px solid var(--c-border);"
  />
</template>
