<script setup lang="ts">
import { ref, onMounted, watch, useSlots } from 'vue'

const props = defineProps<{
  id: string
  title: string
  prompt: string
}>()

const slots = useSlots()
const hasExample = ref(false)

onMounted(() => {
  hasExample.value = !!slots.example
})

const text = ref('')
const showExample = ref(false)

onMounted(() => {
  const saved = localStorage.getItem(`ata-writing-${props.id}`)
  if (saved) text.value = saved
  hasExample.value = !!slots.example
})

watch(text, (val) => {
  localStorage.setItem(`ata-writing-${props.id}`, val)
})

const wordCount = ref(0)
watch(text, (val) => {
  wordCount.value = val.trim() ? val.trim().split(/\s+/).length : 0
})
</script>

<template>
  <div class="writing-exercise">
    <h4>✍️ {{ title }}</h4>
    <p class="writing-prompt">{{ prompt }}</p>
    <textarea
      v-model="text"
      class="writing-textarea"
      placeholder="在这里写下你的答案..."
    />
    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem;">
      <span style="font-size: 0.8rem; color: #999;">{{ wordCount }} 词</span>
      <button
        v-if="hasExample"
        class="writing-toggle"
        @click="showExample = !showExample"
      >
        {{ showExample ? '隐藏参考' : '📖 查看参考答案' }}
      </button>
    </div>
    <div v-if="showExample && hasExample" class="writing-example">
      <strong>参考示例：</strong>
      <slot name="example" />
    </div>
  </div>
</template>
