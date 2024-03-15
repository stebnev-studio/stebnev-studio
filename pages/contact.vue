<template>
  <main class="main bgBlack">
    <LazySectionsContact class="section-contact" />
    <LazySectionsBrief class="section-brief" />
  </main>
</template>

<script lang="ts" setup>
  import { useStateGlobal } from '~/composables/stateGlobal';
  const state = useStateGlobal();
  onMounted(() => {
    state.setIsHeaderActive(true);
    nextTick(() => {
      state.setIsHeaderActive(true);
    })
  })
  
</script>

<style scoped lang="scss">
  .section-contact {
    
  }
</style>