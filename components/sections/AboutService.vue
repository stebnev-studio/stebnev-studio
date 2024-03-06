<template>
  <div class="about-service">
    <BlocksAboutServiceHeader />
    <BlocksTicker class="about-service__ticker" :words="words" />
    <BlocksAboutServiceContent class="about-service__content" />
  </div>
</template>

<script lang="ts" setup>
const words = reactive(['JAVA script.', 'BRANDING.', 'DEVELOPMENT.', 'UI/UX DESIGN', 'CSS.']);
</script>

<style lang="scss" scoped>
  .about-service {
    background-color: $black;
    color: $white;

    &__ticker {
      @include aprop("margin-top", 300px, 200px, 200px, 140px);
    }
    &__content {
      @include aprop("margin-top", 300px, 200px, 200px, 140px);
    }
  }
</style>