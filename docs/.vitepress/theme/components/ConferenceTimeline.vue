<script setup lang="ts">
import { computed } from 'vue'

interface Event {
  name: string
  date: string
  type: 'deadline' | 'notification' | 'application' | 'event'
  description?: string
}

const props = defineProps<{
  events: Event[]
}>()

const now = new Date()

const sortedEvents = computed(() => {
  return [...props.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr)
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })
}

function typeIcon(type: string): string {
  switch (type) {
    case 'deadline': return '🔴'
    case 'notification': return '📬'
    case 'application': return '📝'
    case 'event': return '🎪'
    default: return '📌'
  }
}

function typeColor(type: string): string {
  switch (type) {
    case 'deadline': return '#E07A5F'
    case 'notification': return '#81B29A'
    case 'application': return '#F2CC8F'
    case 'event': return '#3D405B'
    default: return '#888'
  }
}

function isPast(dateStr: string): boolean {
  return new Date(dateStr) < now
}
</script>

<template>
  <div class="timeline-container">
    <div
      v-for="(event, i) in sortedEvents"
      :key="i"
      class="timeline-event"
      :class="{ past: isPast(event.date) }"
      :style="{ '--event-color': typeColor(event.type) }"
    >
      <div class="timeline-marker">
        <div class="timeline-dot" />
        <div v-if="i < sortedEvents.length - 1" class="timeline-line" />
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-icon">{{ typeIcon(event.type) }}</span>
          <strong>{{ event.name }}</strong>
          <span class="timeline-date">{{ formatDate(event.date) }}</span>
        </div>
        <p v-if="event.description" class="timeline-desc">{{ event.description }}</p>
        <span v-if="!isPast(event.date) && daysUntil(event.date) <= 90" class="timeline-countdown">
          {{ daysUntil(event.date) }} 天后
        </span>
        <span v-if="isPast(event.date)" class="timeline-past-badge">已过</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  padding: 1rem 0;
}

.timeline-event {
  display: flex;
  gap: 1rem;
  position: relative;
  padding-bottom: 1.5rem;
  transition: opacity 0.2s;
}

.timeline-event.past {
  opacity: 0.45;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--event-color);
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--event-color);
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: rgba(0,0,0,0.1);
  margin-top: 4px;
}

.dark .timeline-line {
  background: rgba(255,255,255,0.1);
}

.timeline-content {
  flex: 1;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--event-color);
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.timeline-icon {
  font-size: 1rem;
}

.timeline-date {
  font-size: 0.8rem;
  color: #888;
  margin-left: auto;
}

.timeline-desc {
  font-size: 0.85rem;
  color: #666;
  margin: 0.3rem 0 0;
}

.dark .timeline-desc {
  color: #aaa;
}

.timeline-countdown {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ata-coral);
  background: rgba(224, 122, 95, 0.1);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}

.timeline-past-badge {
  display: inline-block;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #999;
  background: rgba(0,0,0,0.05);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
}
</style>
