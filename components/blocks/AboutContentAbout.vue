<template>
  <div class="about-content">
    <div class="about-content__wrapper wrapper">
      <div class="about-content__container container">
        <span class="about-content__subtitle ts" v-if="isMobile">
          / О нас
        </span>
      </div>
    </div>
    <NuxtImg class="about-content__img" :src="content.image" v-if="route.path == '/about' && isMobile"/>
    <div class="about-content__wrapper wrapper">
      <div class="about-content__container container">
        <span class="about-content__subtitle ts" v-if="!isMobile">
          / О нас
        </span>
        <NuxtImg class="about-content__img" :src="content.image" v-if="route.path == '/about' && !isMobile"/>
        <h2 class="about-content__title t2">
          {{ content.title }}
        </h2>
        <div class="about-content__desc text-med">
          {{ content.first_description }}
        </div>
        <div class="about-content__desc-additional text-med">
          {{ content.second_description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

  const { content } = defineProps({
    content: {
      type: Object,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .about-content {
    position: relative;
    overflow: hidden;

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile {
        display: flex;
        flex-direction: column;
      }
    }
    &__img {
      z-index: 0;
      grid-column: 5 / 8 span;
      grid-row: 1;
      // transform: translateY(80px);
      height: 110%;
      width: 100%;
      object-fit: cover;

      @include laptop {
        width: 100%;
        height: 110%;
        grid-row: 1;
        transform: translateY(0px);
      }

      @include tablet {
        grid-column: 3 / span 10;
        transform: translateY(0px);
        
        max-height: 409px;
        width: auto;
        height: 110%;
      }

      @include mobile {
        // position: absolute;
        left: 0;
        height: max-content;
        transform: translateY(30px);
        width: 100%;
        object-fit: cover;
      }
    }

    &__subtitle {
      color : $gray;
      grid-column: 2 span;
      grid-row: 1;

      @include laptop {
        grid-row: 1
      }

      @include tablet {
        grid-row: 1
      }

      @include mobile {

      }

    }

    &__title {
      grid-column: 5 span;
      grid-row: 2;
      z-index: 2;
      @include aprop("margin-bottom", 80px, 60px, 25px, 36px);

      @include laptop {
        grid-column: 8 span;
      }

      @include tablet {
        grid-column: 12 span;
        transform: translateY(-30px);
      }

    }

    &__desc {
      grid-row: 3;
      grid-column: 5 / span 3;
      z-index: 2;

      @include laptop {
        grid-column: 3 / span 5;
      }
      @include tablet {
        grid-column: 3 / span 10;
      }
    }

    &__desc-additional {
      grid-row: 3;
      grid-column: -6 / span 5;
      z-index: 2;

      @include laptop {
        grid-column: -6 / span 5;
      }
      @include tablet {
        grid-row: 4;
        grid-column: 3 / span 10;
        margin-top: 20px;
      }
      @include mobile{
        margin-top: 20px;
      }
    }

    &__link {
      display: flex;
      grid-row: 3;
      grid-column: -3 / span 2;
      justify-content: flex-end;
      align-items: flex-end;

      @include laptop {
        grid-column: -4 / span 3;
      }
      @include tablet {
        grid-row: 4;
        grid-column: -5 / span 4;
        margin-top: 20px;
      }

      @include mobile {
        margin-top: 32px;
      }
    }
  }
</style>