<template>
  <main class="main bgBlack">
    <LazySectionsFeedback />
  </main>
</template>

<script lang="ts" setup>
const { $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  nextTick(() => {
      $ScrollTrigger.refresh();
    })
})
</script>

<style lang="scss" scoped>
  .main {
    
  }
</style>