<template>
  <div class="about-content">
    <div class="about-content__wrapper wrapper">
      <div class="about-content__container container">
        <span class="about-content__subtitle ts">
          / О нас
        </span>
        <LazyNuxtImg densities="x1" class="about-content__img" format="webp" :src="img" />
        <h2 class="about-content__title t2">
          {{ title }}
        </h2>
        <div class="about-content__desc text-med">
          {{ description }}
        </div>
        <div class="about-content__link">
          <ElementsLinkAdditional :to="button?.link">
            {{ button?.text }}
          </ElementsLinkAdditional>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { img, title, description, button } = defineProps({
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
     button: {
      type: Object
     }
  });
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
      width: 100%;
      grid-row: 1;
      transform: translateY(80px);

      @include laptop {
        width: 100%;
        height: 110%;
        grid-row: 1;
        transform: translateY(0px);
      }

      @include tablet {
        transform: translateY(0px);
        max-height: 409px;
        height: 100%;
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
      grid-row: 2;

      @include laptop {
        grid-row: 1
      }

      @include tablet {
        grid-row: 1
      }

      @include mobile {
        // margin-bottom: 221px;
      }

    }

    &__title {
      grid-column: 3 / 5 span;
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
        grid-column: 5 / span 8;
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
