<script setup lang="ts">
defineProps<{
  title: string
  description: string
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="colab-card">
    <span class="colab-icon">🚀</span>
    <div class="colab-info">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
    </div>
    <span style="margin-left: auto; opacity: 0.4; font-size: 1.2rem;">↗</span>
  </a>
</template>
