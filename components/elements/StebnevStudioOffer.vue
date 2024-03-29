<template>
  <div class="stebnev">
    <h1 class="stebnev__title">{{ title_stebnev }}</h1>
    <div class="stebnev__subtitle">{{ subtitle }}</div>
  </div>
</template>

<script lang="ts" setup>
  const { title_stebnev, subtitle} = defineProps({
    title_stebnev: {
      type: String
    },
    subtitle: {
      type: String
    }
  })

</script>

<style scoped lang="scss">
  .stebnev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
</style>