<template>
  <div class="portfolio">
    <div class="portfolio__wrapper wrapper">
      <div class="portfolio__container container">
        <BlocksPortfolioContent class="portfolio__content" :repeater="cases" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { cases }= defineProps({
  cases: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .portfolio {
    overflow: hidden;
  }
</style>