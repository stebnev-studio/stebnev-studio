<template>
  <div class="about-service">
    <BlocksAboutServiceHeader :title="info?.title" :description="info?.description" />

    <BlocksTicker class="about-service__ticker" :words="ticker.words" v-if="ticker.enabled"/>

    <BlocksAboutServiceContent class="about-service__content" v-if="stebnev" :cite="cite" />
  </div>
</template>

<script setup>

  const { ticker, stebnev, info, words } = defineProps({
    ticker: Object,
    stebnev: Boolean,
    info: Object,
    cite: Object
  })
  
</script>

<style lang="scss" scoped>
  .about-service {

    &__ticker {
      @include aprop("margin-top", 300px, 200px, 200px, 140px);
    }
    &__content {
      @include aprop("margin-top", 300px, 200px, 200px, 140px);
    }
  }
</style>