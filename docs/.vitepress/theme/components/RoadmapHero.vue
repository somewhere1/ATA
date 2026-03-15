<script setup lang="ts">
const stages = [
  { label: '现在的你', sub: '开源项目 · Master · CET-6', icon: '🌱', color: '#81B29A' },
  { label: '第一阶段', sub: '数学 · 深度学习 · 英语写作', icon: '📐', color: '#F2CC8F' },
  { label: '第二阶段', sub: 'AI Safety · 第一篇论文 · MATS', icon: '🔬', color: '#E07A5F' },
  { label: '第三阶段', sub: '顶会论文 · 实习 · 专精方向', icon: '🏆', color: '#3D405B' },
  { label: 'Anthropic', sub: 'Research Scientist / Engineer', icon: '🎯', color: '#E07A5F' },
]
</script>

<template>
  <div class="roadmap-hero">
    <div
      v-for="(stage, i) in stages"
      :key="i"
      class="roadmap-stage"
      :style="{ '--stage-color': stage.color, animationDelay: `${i * 0.15}s` }"
    >
      <div class="roadmap-icon">{{ stage.icon }}</div>
      <div class="roadmap-content">
        <strong>{{ stage.label }}</strong>
        <span>{{ stage.sub }}</span>
      </div>
      <div v-if="i < stages.length - 1" class="roadmap-arrow">→</div>
    </div>
  </div>
</template>

<style scoped>
.roadmap-hero {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.roadmap-stage {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 2px solid var(--stage-color);
  animation: fadeSlideIn 0.5s ease both;
  transition: transform 0.2s, box-shadow 0.2s;
}

.roadmap-stage:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.roadmap-icon {
  font-size: 1.5rem;
}

.roadmap-content {
  display: flex;
  flex-direction: column;
}

.roadmap-content strong {
  font-size: 0.9rem;
  color: var(--stage-color);
}

.roadmap-content span {
  font-size: 0.75rem;
  opacity: 0.7;
}

.roadmap-arrow {
  font-size: 1.2rem;
  opacity: 0.3;
  margin-left: 0.5rem;
}

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .roadmap-hero {
    flex-direction: column;
  }
  .roadmap-arrow {
    transform: rotate(90deg);
    margin: 0;
  }
}
</style>
