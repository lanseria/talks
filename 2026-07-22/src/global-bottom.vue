<script setup lang="ts">
/**
 * 大学讲座风装饰：极简——仅在每页顶部加一条深藏青细装饰线，
 * 保持白底干净，替代仓库默认的霓虹光效。
 */
</script>

<template>
  <div class="lecture-accent" aria-hidden="true">
    <div class="lecture-accent-line" />
  </div>
</template>

<style scoped>
.lecture-accent {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -10;
}

.lecture-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    to right,
    #14274e 0%,
    #14274e 40%,
    #d97706 40%,
    #d97706 48%,
    transparent 48%
  );
}
</style>
