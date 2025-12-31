<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="absolute top-0 left-0 w-full h-full bg-[#4396CC]"></div>
    <img  class="absolute top-0 left-0 h-full" src="/cover-1.png" alt="">
    <img  class="absolute top-10px right-10px w-110px h-auto" src="/csafety-logo.png" alt="">
    <div class="my-auto w-full z-1 text-white">
      <slot />
    </div>
  </div>
</template>