<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import seedrandom from 'seedrandom'
import type { CSSProperties } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const formatter = computed(() => ($slidev?.slide.value?.frontmatter || {}))

// 从 frontmatter 读取 glowSeed 和 glowOpacity
glowSeed = 'default', // 默认为 default
  glowOpacity = 0.6, // 默认为 0.6
  glowDistribution = 'top', // 默认为 top
  // 其他属性
  class: string
  style: string | CSSProperties
}

const _glowSeed = computed(() => (props.glowSeed === 'false' || props.glowSeed === false)
  ? Date.now().toString()
  : props.glowSeed,
)

const distributionLimits = computed(() => {
  const min = -0.2
  const max = 1.2

  const limits = {
    full: { x: [min, max], y: [min, max] },
    top: { x: [min, max], y: [min, 0.4] },
    bottom: { x: [min, max], y: [0.6, max] },
    left: { x: [min, 0.4], y: [min, max] },
    right: { x: [0.6, max], y: [min, max] },
    center: { x: [0.3, 0.7], y: [0.3, 0.7] },
  }

  return limits[props.glowDistribution] || limits.full
})

function usePolygons(number = 16) {
  const points = ref<[number, number][]>([])

  function generatePoints() {
    const limits = distributionLimits.value
    const rng = seedrandom(`${_glowSeed.value}-${Math.random()}`)
    const newPoints: [number, number][] = []

    for (let i = 0; i < number; i++) {
      const x = rng() * (limits.x[1] - limits.x[0]) + limits.x[0]
      const y = rng() * (limits.y[1] - limits.y[0]) + limits.y[0]
      newPoints.push([x, y])
    }

    points.value = newPoints
  }

  const polygons = computed(() => {
    return points.value.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', ')
  })

  watch([_glowSeed, () => props.glowDistribution], generatePoints, { immediate: true })

  return { polygons, generatePoints }
}

const { polygons: polygon1 } = usePolygons(8)
const { polygons: polygon2 } = usePolygons(8)
const { polygons: polygon3 } = usePolygons(6)
</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :class="class"
    :style="style"
  >
    <!-- Background Glow Effects -->
    <div
      class="fixed inset-0 pointer-events-none z-0 transform-gpu"
      :style="{ filter: 'blur(100px)' }"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-transparent transition-all duration-1000 ease-in-out"
        :style="{ clipPath: `polygon(${polygon1})`, opacity: glowOpacity }"
      />
      <div
        class="absolute inset-0 bg-gradient-to-l from-lime-400/30 to-transparent transition-all duration-1000 ease-in-out"
        :style="{ clipPath: `polygon(${polygon2})`, opacity: glowOpacity }"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-violet-400/20 to-transparent transition-all duration-1000 ease-in-out"
        :style="{ clipPath: `polygon(${polygon3})`, opacity: glowOpacity * 0.5 }"
      />
    </div>

    <!-- Content Slot -->
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  @apply flex flex-col items-center justify-center h-full;
  background: transparent !important;
}

/* Override default cover background */
.slidev-layout.cover::before,
.slidev-layout.cover::after {
  display: none !important;
}

:deep(h1) {
  @apply text-5xl font-bold mb-4 bg-clip-text text-transparent;
  background-image: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
}

:deep(p) {
  @apply text-xl text-slate-300;
}

/* Light mode adjustments */
.light .slidev-layout.cover :deep(h1) {
  background-image: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
}

.light .slidev-layout.cover :deep(p) {
  @apply text-slate-600;
}
</style>
