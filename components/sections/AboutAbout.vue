<template>
  <div class="about">
    <BlocksAboutContentAbout class="about__content" :content="about" />
  </div>
</template>

<script lang="ts" setup>
const { about } = defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .about {
    transition: 0.3s;
  }
</style>