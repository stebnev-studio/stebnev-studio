<template>
  <Swiper class="portfolio-content portfolio-content-mobile" space-between="20">
    <SwiperSlide v-for="(item, idx) in repeater" :key="idx">
      <ElementsPortfolioContentItem
        :key="idx"
        class="portfolio-content__item"
        :info="item"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
const { repeater } = defineProps({
  repeater: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.portfolio-content {
  display: flex;
  flex-direction: column;
  grid-column: 12 span;
  overflow: visible;
  height: fit-content;

  @include tablet {
    row-gap: 80px;
  }

  @include mobile {
    grid-column: 3 span;
  }
}
</style>
