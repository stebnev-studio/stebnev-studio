<template>
  <main class="main bgBlack">
    <LazySectionsContact class="section-contact" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  const { $ScrollTrigger } = useNuxtApp();

  onMounted(async () => {
    await nextTick();
    await $ScrollTrigger.refresh();
    state.setIsHeaderActive(true);
  })

  onUnmounted(async () => {
    await nextTick();
    $ScrollTrigger.killAll();
    $ScrollTrigger.refresh();
  })
  
</script>

<style scoped lang="scss">
  .section-contact {
    
  }
</style>