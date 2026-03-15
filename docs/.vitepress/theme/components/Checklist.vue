<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps<{
  id: string
  title: string
  items: string[]
}>()

const checked = ref<boolean[]>([])

onMounted(() => {
  const saved = localStorage.getItem(`ata-checklist-${props.id}`)
  if (saved) {
    try {
      checked.value = JSON.parse(saved)
    } catch {
      checked.value = new Array(props.items.length).fill(false)
    }
  } else {
    checked.value = new Array(props.items.length).fill(false)
  }
})

watch(checked, (val) => {
  localStorage.setItem(`ata-checklist-${props.id}`, JSON.stringify(val))
}, { deep: true })

const completedCount = computed(() => checked.value.filter(Boolean).length)
const progress = computed(() => {
  if (props.items.length === 0) return 0
  return (completedCount.value / props.items.length) * 100
})
const allDone = computed(() => completedCount.value === props.items.length)

function toggle(index: number) {
  const copy = [...checked.value]
  copy[index] = !copy[index]
  checked.value = copy
}
</script>

<template>
  <div class="checklist-container" :class="{ 'confetti-burst': allDone }">
    <div class="checklist-header">
      <h4>{{ title }}</h4>
      <span class="checklist-count">{{ completedCount }}/{{ items.length }}</span>
    </div>
    <div class="checklist-progress">
      <div class="checklist-progress-bar" :style="{ width: progress + '%' }" />
    </div>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="checklist-item"
      :class="{ done: checked[i] }"
      @click="toggle(i)"
    >
      <div class="checklist-checkbox" :class="{ checked: checked[i] }" />
      <span>{{ item }}</span>
    </div>
  </div>
</template>
