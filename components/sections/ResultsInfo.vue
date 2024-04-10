<template>
  <div class="results-info">
    <div class="results-info__wrapper wrapper">
      <div class="results-info__container container">
        <div class="results-info__header">
          <span class="results-info__subtitle ts">
            / Результаты
          </span>
          <h2 class="results-info__title t2">
            {{ results.title }}
          </h2>
        </div>
        <LazySwiper
          :modules="[SwiperNavigation, SwiperController]"
          :free-mode="true"
          class="results-info__swiper"
          :loop="true"
          @init="initSwiper"
         >
          <LazySwiperSlide class="results-info__content" v-for="(i, idx) in results.slides" :key="idx">
            <LazyBlocksResultsContent :item="i" />
          </LazySwiperSlide>
        </LazySwiper>
        <div class="results-info__footer">
          <p class="results-info__description text-med">
            {{ results.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    const { results } = defineProps({
      results: Object
    });
    const riSwiper = inject('riSwiper');
    function initSwiper(e: any) {
      riSwiper.value = e;
    }
</script>

<style lang="scss" scoped>
  .results-info {

    &__header {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;
      @include aprop('row-gap', 0px, 32px, 32px, 20px);

      @include laptop{
        display: flex;
        flex-direction: column;
      }

      @include tablet{
        display: flex;
        flex-direction: column;
      }

      @include mobile{
        display: flex;
        flex-direction: column;
      }
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include tablet{
        grid-column: 3 span;
      }
    }

    &__title {
      grid-column: 6 span;
    }

    &__content {

      position: relative;

      @include aprop('padding-top', 80px, 60px, 60px, 80px);
      @include aprop('padding-bottom', 80px, 60px, 60px, 80px);
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include laptop{
       grid-column: 3 / 6 span;
      }

      @include tablet{
        grid-column: 3 / 9 span;
      }

      @include mobile{
        display: flex;
        flex-direction: column;
      }
    }

    &__item {
      grid-column: 5 / 5 span;
      max-width: calc(100% + $gutter);

      @include laptop{
       grid-column: 3 / 6 span;
      }

      @include tablet{
        grid-column: 3 / 9 span;
      }
    }

    &__footer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        display: flex;
        width: 100%;
      }
    }

    &__description {
      grid-column: -6 / 5 span;

      @include laptop{
        grid-column: 5 / 8 span;
      }

      @include tablet{
        grid-column: 3 / 10 span;

      }

      @include mobile{
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
</style>
