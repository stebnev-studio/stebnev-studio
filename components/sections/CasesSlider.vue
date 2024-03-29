<template>
  <div class="cases">
    <div class="cases__header">
      <div class="cases__wrapper wrapper">
        <div class="cases__container container">
          <span class="cases__subtitle ts">
            / Кейсы
          </span>
          <h2 class="cases__title t2">
            {{ cases.title }}
          </h2>
          <p class="cases__description text-med">
            {{ cases.description_header }}
          </p>
        </div>
      </div>
    </div>
    <div class="cases__content">
      <div class="cases__wrapper wrapper">
        <div class="cases__container container">
          <div class="cases__content-header">
            <div class="cases__numbers">
              <span class="numeral-big">{{ (currentSlide + 1).toString().padStart(2,0) }}</span>
              <span class="t2"> /{{ maxSlide.toString().padStart(2,0) }}</span>
            </div>
            <div class="cases__arrows">
              <div class="cases__prev" ref="prev">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 16H9M9 16L14.3103 11M9 16L14.3103 21" stroke="#0D0D0D"/>
                </svg>
              </div>
              <div class="cases__next" ref="next">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16H23M23 16L17.6897 11M23 16L17.6897 21" stroke="#0D0D0D"/>
                </svg>
              </div>
            </div>
          </div>

          <Swiper 
          :modules="[SwiperNavigation]"
          slidesPerView="auto"
          spaceBetween="20px"
          :navigation="{
            prevEl: prev,
            nextEl: next
          }"
          :initialSlide="0"
          @slideChange="slideChange"
          class="cases__swiper">
            <SwiperSlide class="cases__slide" v-for="(item, idx) in cases.repeater" :key="idx">
              <ElementsCasesSliderItem :caseItem="item" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="cases__footer">
      <div class="cases__wrapper wrapper">
        <div class="cases__container container">
          <div class="cases__footer-wrapper">
            <p class="cases__description-link">
              {{ cases.description_footer }}
            </p>
            <ElementsLinkAdditional :to="cases.button.link" class="cases__link black">
              {{ cases.button.text }}
            </ElementsLinkAdditional>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  const next = ref(null);
  const prev = ref(null);
  // const cases = reactive([
  //   {
  //     img: '/slidebig.png',
  //     title: 'website.com',
  //     desc: 'Work / 2019'
  //   },
  //   {
  //     img: '/slidebig.png',
  //     title: 'website.com',
  //     desc: 'Work / 2019'
  //   },
  //   {
  //     img: '/slidebig.png',
  //     title: 'website.com',
  //     desc: 'Work / 2019'
  //   },
  //   {
  //     img: '/slidebig.png',
  //     title: 'website.com',
  //     desc: 'Work / 2019'
  //   },
  //   {
  //     img: '/slidebig.png',
  //     title: 'website.com',
  //     desc: 'Work / 2019'
  //   },

  // ])

  const { cases } = defineProps({
    cases: {
      type: Object,
      required: true
    }
  })

  const maxSlide = ref(cases.repeater.length);
  console.log(cases);
  const  currentSlide = ref(0);

  function slideChange(e) {
    currentSlide.value = e.activeIndex;
  }
</script>

<style lang="scss" scoped>
.cases {
  // background-color: $white;
  // color: $black;

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;

    @include mobile{
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__subtitle {
    color: $gray;
    grid-column: 2 span;

    @include tablet{
      grid-row: 1;
    }

    @include mobile{
      grid-column: 4 span;
      grid-row: 1;
    }
  }

  &__title {
    grid-column: 5 span;

    @include tablet{
      grid-row: 2;
      margin-top: 32px;
    }
    @include mobile{
      margin-top: 20px;
      grid-column: 4 span;
      grid-row: 2;
    }
  }

  &__description {
    grid-column: -6 / 5 span;
    grid-row: 2;
    margin-top: 80px;

    @include tablet{
      grid-column: 5 / 8 span;
      grid-row: 3;
      margin-top: 60px;
    }
    @include mobile{
      margin-top: 40px;
      grid-column: 4 span;
      grid-row: 3;
    }
  }

  &__footer-wrapper {
    grid-column: -6 / 5 span;

    @include tablet{
      grid-column: 5 / 8 span;
    }

    @include mobile{
      grid-column: 4 span;
    }
  }

  &__link {
    margin-top: 60px;
  }

  &__content {
    @include aprop('margin-top', 200px, 120px, 120px, 80px);
    @include aprop('margin-bottom', 200px, 120px, 120px, 80px);
  }

  &__content-header {

    grid-column: 3 / 5 span;

    display: flex;
    justify-content: space-between;

    @include tablet{
      grid-column: 3 / 10 span;
    }

    @include mobile{
      display: none;
    }

  }

  &__arrows {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    width: max-content;
    column-gap: 20px;
    cursor: pointer;
  }

  &__numbers {
    color: $dark-gray
  }

  &__content {
    overflow: hidden;
  }

  &__swiper {
    margin-top: 40px;
    overflow: visible;
    grid-row: 2;
    grid-column: 3 / 5 span;
    @include mobile{
      grid-column: 3 span;
    }
  }

  &__slide {
    max-width: max-content;
    transition: 0.3s ease-in-out;

    @include mobile{
      width: 100%;
      overflow: hidden
    }
  }

}
</style>