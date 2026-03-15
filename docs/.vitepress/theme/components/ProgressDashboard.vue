<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface PhaseInfo {
  name: string
  icon: string
  color: string
  checklistIds: string[]
  link: string
}

const phases: PhaseInfo[] = [
  {
    name: '第一阶段：补齐基础',
    icon: '📐',
    color: '#F2CC8F',
    checklistIds: ['phase1-overview', 'phase1-math', 'phase1-dl', 'phase1-writing', 'phase1-opensource'],
    link: '/phase-1/'
  },
  {
    name: '第二阶段：建立学术可见度',
    icon: '🔬',
    color: '#E07A5F',
    checklistIds: ['phase2-overview', 'phase2-safety', 'phase2-paper', 'phase2-mats', 'phase2-community'],
    link: '/phase-2/'
  },
  {
    name: '第三阶段：博士期间',
    icon: '🏆',
    color: '#3D405B',
    checklistIds: ['phase3-year1', 'phase3-year2', 'phase3-year3', 'phase3-phd', 'phase3-conf', 'phase3-internship'],
    link: '/phase-3/'
  }
]

interface PhaseStats {
  total: number
  done: number
  percent: number
}

const stats = ref<Map<string, PhaseStats>>(new Map())
const totalDone = ref(0)
const totalItems = ref(0)

onMounted(() => {
  let allDone = 0
  let allTotal = 0

  for (const phase of phases) {
    let done = 0
    let total = 0
    for (const id of phase.checklistIds) {
      const saved = localStorage.getItem(`ata-checklist-${id}`)
      if (saved) {
        try {
          const arr: boolean[] = JSON.parse(saved)
          total += arr.length
          done += arr.filter(Boolean).length
        } catch { /* skip */ }
      }
    }
    stats.value.set(phase.name, {
      total,
      done,
      percent: total > 0 ? Math.round((done / total) * 100) : 0
    })
    allDone += done
    allTotal += total
  }

  totalDone.value = allDone
  totalItems.value = allTotal
})

const overallPercent = computed(() => {
  if (totalItems.value === 0) return 0
  return Math.round((totalDone.value / totalItems.value) * 100)
})

const motivationText = computed(() => {
  const p = overallPercent.value
  if (p === 0) return '开始你的旅程吧！每一步都算数。'
  if (p < 25) return '好的开始！继续保持这个势头。'
  if (p < 50) return '你已经走了不少路了！加油！'
  if (p < 75) return '超过一半了！终点在望。'
  if (p < 100) return '快到了！最后的冲刺！'
  return '恭喜！你已经完成了所有目标！🎉'
})
</script>

<template>
  <div class="dashboard">
    <!-- Overall Progress -->
    <div class="dashboard-overall">
      <div class="overall-ring">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="10" />
          <circle
            cx="60" cy="60" r="52" fill="none"
            stroke="var(--ata-coral)"
            stroke-width="10"
            stroke-linecap="round"
            :stroke-dasharray="`${overallPercent * 3.27} 327`"
            transform="rotate(-90 60 60)"
            style="transition: stroke-dasharray 1s ease;"
          />
        </svg>
        <div class="overall-text">
          <span class="overall-number">{{ overallPercent }}%</span>
          <span class="overall-label">总进度</span>
        </div>
      </div>
      <div class="overall-info">
        <h3>你的学习进度</h3>
        <p class="overall-stats">已完成 <strong>{{ totalDone }}</strong> / {{ totalItems }} 个目标</p>
        <p class="motivation">{{ motivationText }}</p>
      </div>
    </div>

    <!-- Phase Cards -->
    <div class="phase-cards">
      <a
        v-for="phase in phases"
        :key="phase.name"
        :href="phase.link"
        class="phase-card"
        :style="{ '--phase-color': phase.color }"
      >
        <div class="phase-icon">{{ phase.icon }}</div>
        <div class="phase-info">
          <h4>{{ phase.name }}</h4>
          <div class="phase-progress-bar">
            <div
              class="phase-progress-fill"
              :style="{ width: (stats.get(phase.name)?.percent || 0) + '%' }"
            />
          </div>
          <span class="phase-stats">
            {{ stats.get(phase.name)?.done || 0 }} / {{ stats.get(phase.name)?.total || 0 }}
            （{{ stats.get(phase.name)?.percent || 0 }}%）
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem 0;
}

.dashboard-overall {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  margin-bottom: 2rem;
}

.overall-ring {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.overall-ring svg {
  width: 100%;
  height: 100%;
}

.overall-text {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overall-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--ata-coral);
  line-height: 1;
}

.overall-label {
  font-size: 0.75rem;
  color: #888;
  margin-top: 2px;
}

.overall-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.overall-stats {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
}

.dark .overall-stats {
  color: #aaa;
}

.motivation {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--ata-coral);
  font-weight: 500;
}

.phase-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.phase-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 2px solid transparent;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.25s ease;
}

.phase-card:hover {
  border-color: var(--phase-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.phase-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.phase-info {
  flex: 1;
  min-width: 0;
}

.phase-info h4 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.phase-progress-bar {
  height: 8px;
  background: rgba(0,0,0,0.08);
  border-radius: 999px;
  overflow: hidden;
}

.dark .phase-progress-bar {
  background: rgba(255,255,255,0.08);
}

.phase-progress-fill {
  height: 100%;
  background: var(--phase-color);
  border-radius: 999px;
  transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.phase-stats {
  font-size: 0.78rem;
  color: #888;
  margin-top: 0.3rem;
  display: block;
}

@media (max-width: 640px) {
  .dashboard-overall {
    flex-direction: column;
    text-align: center;
  }
}
</style>
