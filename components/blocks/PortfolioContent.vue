<template>
  <div class="portfolio-content">
      <ElementsPortfolioContentItem class="portfolio-content__item" v-for="(item, idx) in cases" :key="idx" :info="item" v-if="route.path != '/cases'"/>
      <ElementsPortfolioContentItem class="portfolio-cases-content__item" v-for="(item, idx) in cases" :key="idx" :info="item" v-if="route.path == '/cases'" />
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const state = useStateGlobal();
  const cases = state.cases;
</script>

<style lang="scss" scoped>
  .portfolio-content {
    display: flex;
    flex-direction: column;
    grid-column: 12 span;

    @include tablet {
      row-gap: 80px;
    }

    .portfolio-cases-content__item {

      &:nth-child(1n) {
        min-height: 800px;
        @include laptop{
        min-height: 427px;
        }
        @include tablet{
        min-height: 492px;
        }
        @include mobile{
        min-height: 404px;
        }
      }
      &:nth-child(2n) {
        min-height: 870px;
        @include laptop{
        min-height: 463px;
        }
        @include tablet{
        min-height: 505px;
        }
        @include mobile{
        min-height: 419px;
        }

        & .portfolio-content-item__img {
          background-position: right;
        }
      }
      &:nth-child(3n) {
        min-height: 701px;
        @include laptop{
        min-height: 352px;
        }
        @include tablet{
        min-height: 440px;
        }
        @include mobile{
        min-height: 326px;
        }
      }
      &:nth-child(4n) {
        min-height: 699px;
        @include laptop{
        min-height: 378px;
        }
        @include tablet{
        min-height: 412px;
        }
        @include mobile{
        min-height: 344px;
        }
      }
      &:nth-child(5n) {
        min-height: 903px;
        @include laptop{
        min-height: 479px;
        }
        @include tablet{
        min-height: 492px;
        }
        @include mobile{
        min-height: 404px;
        }
      }
      &:nth-child(6n) {
        min-height: 870px;
        @include laptop{
        min-height: 463px;
        }
        @include tablet{
        min-height: 505px;
        }
        @include mobile{
        min-height: 419px;
        }
      }
      &:nth-child(7n) {
        min-height: 701px;
        @include laptop{
        min-height: 352px;
        }
        @include tablet{
        min-height: 440px;
        }
        @include mobile{
        min-height: 326px;
        }
      }
      &:nth-child(8n) {
        min-height: 699px;
        @include laptop{
        min-height: 378px;
        }
        @include tablet{
        min-height: 412px;
        }
        @include mobile{
        min-height: 344px;
        }
      }

      @include mobile{
        display: flex;
        width: 100%;
        grid-column: 4 span !important;
      }
    }

    @include mobile{
      row-gap: 140px;
    }
  }
</style>