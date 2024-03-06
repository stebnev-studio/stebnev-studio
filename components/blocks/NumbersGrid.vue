<template>
  <div class="numbers-grid">
    <div class="numbers-grid__first">
      <ElementsFirstNumberItem :item="firstNumber" />
    </div>
    <ElementsNumbersItem class="numbers-grid__item" v-for="(item, idx) in otherNumber" :item="item" :key="idx" v-if="!isMobile"/>
    <div class="numbers-grid__slider" v-if="isMobile">
      <Swiper class="numbers-grid__swiper"
        space-between="40px"
      >
        <SwiperSlide class="numbers-grid__swiper" v-for="(item, idx) in otherNumber">
          <ElementsNumbersItem class="numbers-grid__item" :item="item" :key="idx"/>
        </SwiperSlide>
    </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core';

const { numbers } = defineProps({
  numbers : Object
})

const isMobile = useMediaQuery('(min-width: 340px) and (max-width: 767.5px)');

const firstNumber = numbers?.[0];
const otherNumber = numbers?.slice(1);
</script>

<style scoped lang="scss">
  .numbers-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include aprop('row-gap', 100px, 80px, 80px, 60px);

    &__first {
      width: 100%;
    }

    &__item {
      @include aprop('max-width', 240px, 200px, 200px, 200px);
    }

    &__slider {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: $gutter;
      width: 100%;
    }

    &__swiper {
      grid-column: 3 span;
      overflow: visible;
    }

  }
</style>