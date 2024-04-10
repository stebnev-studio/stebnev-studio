<template>
  <div class="stages">
    <div class="stages__wrapper wrapper">
      <div class="stages__container container">
        <div class="stages__header">
          <span class="stages__subtitle ts">/ Этапы работы</span>
          <div class="stages__title t2">
            {{ title }}
          </div>
        </div>
        <div class="stages__content">
          <div class="stages__counter">
            <div class="stages__numbers">
              <span class="stages__counter-big numeral-big"
                >{{ currentSlide.toString().padStart(2,0) }}</span
              >
              <span class="stages__counter-small t2"> /{{ maxSlides.toString().padStart(2,0) }}</span>
            </div>
            <div class="stages__arrows">
              <div class="stages__prev" ref="prev" :class="{isOpacity: isStart}">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 16H9M9 16L14.3103 11M9 16L14.3103 21"
                    stroke="#FAFAFA"
                  />
                </svg>
              </div>
              <div class="stages__next" ref="next" :class="{isOpacity: isEnd}">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16H23M23 16L17.6897 11M23 16L17.6897 21"
                    stroke="#FAFAFA"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p class="stages__description text-med">
            {{ description }}
          </p>
        </div>
        <Swiper
          class="stages__slider"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: next,
            prevEl: prev,
          }"
          @slideChange="slideChange"
          v-if="!isMobile"
        >
          <SwiperSlide
            class="stages__slide"
            v-for="(item, idx) in stages.repeater"
            :key="idx"
          >

            <NuxtImg :src="item.image" :alt="item.description" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="stages__mobile" v-if="isMobile">
      <Swiper
        class="stages__slider"
        :modules="[SwiperNavigation]"
        :navigation="{
          nextEl: next,
          prevEl: prev,
        }"
        @slideChange="slideChange"
      >
        <SwiperSlide
          class="stages__slide"
          v-for="(item, idx) in stages.repeater"
          :key="idx"
        >
          <NuxtImg :src="item.image" :alt="item.description" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";

const { stages } = defineProps({
  stages: {
    type: Object,
    required: true,
  },
});

const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");
const next = ref(null);
const prev = ref(null);

const slides = stages.repeater;

const description = ref(slides[0].description);
const title = ref(slides[0].title);
const currentSlide = ref(1);
const maxSlides = ref(slides.length);
const isEnd = ref(false);
const isStart = ref(true);

function slideChange(e) {
  description.value = slides[e.activeIndex].description;
  title.value = slides[e.activeIndex].title;
  currentSlide.value = e.activeIndex + 1;

  isStart.value = e.isBeginning;
  isEnd.value = e.isEnd;

}
</script>

<style scoped lang="scss">
.stages {
  .swiper-button-disabled,
  &__prev,
  &__next {
    transition-duration: 0.35s;
    cursor: pointer;
  }

  .isOpacity {
    opacity: 0;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }

  &__header {
    display: grid;
    grid-column: 7 span;

    grid-template-columns: repeat(7, 1fr);
    column-gap: $gutter;

    @include tablet {
      grid-column: 12 span;
      grid-template-columns: repeat(12, 1fr);
    }

    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }

  &__subtitle {
    color: $gray;
    grid-column: 2 span;
    @include tablet {
      grid-column: 3 span;
    }
  }

  &__title {
    grid-column: 5 span;

    @include tablet {
      grid-column: 9 span;
    }

    @include mobile {
      margin-top: 20px;
    }
  }

  &__slider {
    grid-column: -6 / 5 span;
    grid-row: 1 / 2 span;

    @include tablet {
      grid-row: 3;
      grid-column: 12 span;
      margin-top: 40px;
    }
  }

  &__slide img {
    max-height: 650px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    user-select: none;


    @include laptop {
      max-height: 352px;
    }

    @include tablet {
      max-height: 378px;
    }

    @include mobile {
      max-height: 308px;
    }
  }

  &__content {
    grid-row: 2;
    grid-column: 3 / 4 span;

    display: flex;
    flex-direction: column;
    row-gap: 60px;
    align-self: flex-end;

    @include laptop {
      grid-column: 7 span;
    }

    @include tablet {
      grid-column: 12 span;
      grid-row: 2;
      margin-top: 60px;
    }

    @include mobile {
      row-gap: 40px;
      margin-top: 40px;
    }
  }

  &__counter {
    display: flex;
    justify-content: space-between;
    &-big {
      transform: translateY(-20px);
      color: $gray;
    }

    &-small {
      color: $dark-gray;
    }

    @include tablet {
      justify-content: inherit;
    }
  }

  &__arrows {
    display: flex;
    column-gap: 20px;
    align-self: flex-end;

    @include tablet {
      margin-left: 57px;
    }
  }

  &__mobile {
    margin-top: 40px;
  }
}
</style>
