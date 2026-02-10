<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const formatter = computed(() => ($slidev?.slide.value?.frontmatter || {}))
const glowSeed = computed(() => formatter.value.glowSeed || 'default')
const glowOpacity = computed(() => formatter.value.glowOpacity ?? 0.5)
</script>

<template>
  <div
    class="slidev-layout statement flex flex-col items-center justify-center text-center h-full"
    :class="$attrs.class"
  >
    <!-- Background Effect -->
    <div
      class="fixed inset-0 pointer-events-none z-0"
      :style="{
        background: `radial-gradient(circle at 50% 50%, rgba(45, 212, 191, ${glowOpacity * 0.3}) 0%, transparent 60%)`,
        filter: 'blur(60px)',
      }"
    />

    <!-- Content -->
    <div class="relative z-10 max-w-4xl px-8">
      <slot />
    </div>

    <!-- Bottom Decoration -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-50">
      <div class="w-12 h-px bg-gradient-to-r from-transparent to-teal-400" />
      <div class="w-2 h-2 rounded-full bg-teal-400" />
      <div class="w-12 h-px bg-gradient-to-l from-transparent to-teal-400" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.statement {
  background: transparent !important;
}

:deep(h1) {
  @apply text-5xl font-bold mb-6;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(p) {
  @apply text-xl text-slate-300 leading-relaxed;
}

:deep(strong) {
  @apply text-teal-300;
}

/* Light mode */
.light :deep(h1) {
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.light :deep(p) {
  @apply text-slate-600;
}
</style>
