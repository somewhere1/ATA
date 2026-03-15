<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  question: string
  options: string[]
  answer: number
  explanation?: string
}>()

const selected = ref<number | null>(null)
const answered = ref(false)

const isCorrect = computed(() => selected.value === props.answer)

function select(index: number) {
  if (answered.value) return
  selected.value = index
  answered.value = true
}

function optionClass(index: number) {
  if (!answered.value) {
    return selected.value === index ? 'selected' : ''
  }
  if (index === props.answer) return 'correct'
  if (index === selected.value) return 'incorrect'
  return ''
}
</script>

<template>
  <div class="quiz-container">
    <h4>🧠 {{ question }}</h4>
    <div
      v-for="(option, i) in options"
      :key="i"
      class="quiz-option"
      :class="optionClass(i)"
      @click="select(i)"
    >
      <span style="font-weight: 600; opacity: 0.5; min-width: 24px;">{{ String.fromCharCode(65 + i) }}.</span>
      <span>{{ option }}</span>
      <span v-if="answered && i === answer" style="margin-left: auto;">✓</span>
    </div>
    <div v-if="answered && explanation" class="quiz-explanation">
      <strong>{{ isCorrect ? '✅ 正确！' : '❌ 答错了。' }}</strong> {{ explanation }}
    </div>
  </div>
</template>
