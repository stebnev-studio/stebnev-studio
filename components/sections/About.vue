<template>
  <div class="about">
      <div class="about__header">
        <BlocksTicker :words="wordsOne" />
        <BlocksTicker class="about__ticker-slow" :words="wordsTwo" />
      </div>
      <BlocksAboutContent class="about__content" />
      <div class="about__footer">
        <BlocksTicker :words="wordsOne" />
        <BlocksTicker class="about__ticker-slow" :words="wordsTwo" />
      </div>
  </div>
</template>

<script lang="ts" setup>
  const wordsOne = reactive([
    'EVENT-HALL.',
    'SOKU',
    'RODGEN.',
    'DENTIS'
  ]);
  const wordsTwo = reactive([
    'SOKU',  
    'EVENT-HALL.',
    'DENTIS',
    'RODGEN.'
  ]);
</script>

<style lang="scss" scoped>
  .about {
    transition: 0.3s;
    // background-color: $black;
    // color: $white;
    overflow-x: hidden;;

    &__header {
      @include aprop("padding-top", 280px, 210px, 200px, 163px);
    }

    &__content {
      @include aprop("margin-top", 300px, 200px, 200px, 140px);
      @include aprop("margin-bottom", 300px, 200px, 200px, 140px);
    }
  }
</style>