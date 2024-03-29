<template>
  <div class="portfolio" :class="{bgWhite: isMobile}">
    
    <div class="portfolio__wrapper wrapper">
      <div class="portfolio__container container">
        <LazyBlocksPortfolioHeader class="portfolio__header" :header="portfolio.header" />
      </div>
    </div>

    <div class="portfolio__wrapper wrapper" v-if="!isMobile">
      <div class="portfolio__container container">
        <LazyBlocksPortfolioContent class="portfolio__content" :repeater="portfolio.repeater"/>
      </div>
    </div>

    <div class="portfolio__container-mobile container" v-else>
      <LazyBlocksPortfolioContentMobile class="portfolio__content" :repeater="portfolio.repeater"/>
    </div>
    
    <div class="portfolio__wrapper wrapper">
      <div class="portfolio__container container">
        <BlocksPortfolioFooter class="portfolio__footer" :footer="portfolio.footer" />
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

  const { portfolio } = defineProps({
    portfolio: {
      type: Object
    }
  })
</script>

<style scoped lang="scss">
  .portfolio {

    display: flex;
    flex-direction: column;
    overflow: hidden;   
    @include aprop("row-gap", 200px, 120px, 120px, 80px);

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      // @include aprop("row-gap", 200px, 120px, 120px, 80px);

      @include mobile {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }

      &-mobile {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: $gutter;
        padding: 0px 30px;
        order: 0;
      }
    }

    &__header {
      grid-column: 12 span;
      grid-row: 1;

      @include mobile {
        grid-column: 4 span;
      }
    }

    &__content {
      grid-row: 2;

      @include mobile{
        grid-row: auto;
      }
    }

    &__footer {
      grid-row: 3;
      grid-column: 8 / 5 span;

      @include tablet {
        grid-column: 5 / 8 span;
      }

      @include mobile {
        grid-column: 4 span;
      }
    }

    @include mobile{
      max-height: 1180px;
    }
  }
</style>