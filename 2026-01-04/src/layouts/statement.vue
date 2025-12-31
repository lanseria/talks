<template>
  <div class="slidev-layout statement">
    <div class="absolute top-0 left-0 w-full h-full grid-bg"></div>
    <img class="absolute bottom-20px right-90px w-150px" src="/statement-logo.png" alt="">
    <img class="absolute bottom-0 right-0 w-100px" src="/statement-water.png" alt="">
    <div class="flex items-start flex-col z-1">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.grid-bg {
  background-image: 
    linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px);
  background-size: 5px 5px;
}
</style>