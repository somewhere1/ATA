<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  phase: string
  checklistIds: string[]
}>()

const progress = ref(0)

onMounted(() => {
  let total = 0
  let done = 0
  for (const id of props.checklistIds) {
    const saved = localStorage.getItem(`ata-checklist-${id}`)
    if (saved) {
      try {
        const arr: boolean[] = JSON.parse(saved)
        total += arr.length
        done += arr.filter(Boolean).length
      } catch {
        // skip
      }
    }
  }
  progress.value = total > 0 ? Math.round((done / total) * 100) : 0
})

const badgeClass = computed(() => {
  if (progress.value === 0) return 'not-started'
  if (progress.value === 100) return 'completed'
  return 'in-progress'
})

const badgeLabel = computed(() => {
  if (progress.value === 0) return '未开始'
  if (progress.value === 100) return '已完成'
  return `${progress.value}%`
})
</script>

<template>
  <div style="margin: 0.5rem 0;">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
      <span style="font-weight: 600; font-size: 0.9rem;">{{ phase }}</span>
      <span class="phase-badge" :class="badgeClass">{{ badgeLabel }}</span>
    </div>
    <div class="checklist-progress">
      <div class="checklist-progress-bar" :style="{ width: progress + '%' }" />
    </div>
  </div>
</template>
