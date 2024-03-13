<template>
  <div class="active-tariffs">
    <Swiper 
      class="active-tariffs__slider"
      :modules="[SwiperNavigation]"
      :slides-per-view="'auto'"
      :navigation="{
        nextEl: props.prev,
        prevEl: props.next,
      }"
    >
      <SwiperSlide class="active-tariffs__slide">
        <ElementsTariffsItem />
      </SwiperSlide>
      <SwiperSlide class="active-tariffs__slide">
        <ElementsTariffsItem />
      </SwiperSlide>
      <SwiperSlide class="active-tariffs__slide">
        <ElementsTariffsItem />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>

  const props = defineProps({
    next: {},
    prev: {}
  })

</script>

<style lang="scss" scoped>
  .active-tariffs {

    &__slider {
      grid-column: 4 / 9 span;
      overflow: visible;

      @include laptop{
        grid-column: 3 / 10 span;
      }

      @include tablet{
        grid-column: 12 span;
      }

      @include mobile{
        grid-column: 4 span;
      }
    }

    &__slide {
      @include aprop('max-width', 350px, 320px, 320px, 250px);
      @include aprop('margin-right', 58px, 32px, 32px, 20px);
      opacity: 0.5;
      transition: 0.3s ease-in-out;
    }

    &__slide:hover {
      opacity: 1;
      cursor: pointer;
    }

  }
</style>