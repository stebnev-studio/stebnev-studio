<template>
  <div class="about-service">
    <BlocksAboutServiceHeader :title="info?.title" :description="info?.description" />
    <BlocksTicker class="about-service__ticker" :words="words" v-if="ticker"/>
    <BlocksAboutServiceContent class="about-service__content" v-if="stebnev" />
  </div>
</template>

<script setup>

  const { ticker, stebnev, info} = defineProps({
    ticker: Boolean,
    stebnev: Boolean,
    info: Object
  })

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