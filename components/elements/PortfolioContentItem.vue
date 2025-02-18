<template>
  <div class="portfolio-content-item row">
    <LazyNuxtLink
      :to="info.link"
      class="portfolio-content-item__content"
      target="_blank"
    >
      <div class="portfolio-content-item__picture">
        <LazyNuxtImg
          class="portfolio-content-item__img"
          :class="{ img_phone: isMobile && route.path != '/cases' }"
          :src="info.image"
          :portfolio-attr="info.image"
          data-scroll
          data-scroll-position="middle,middle"
          data-scroll-speed="0.1"
          densities="x1"
          format="webp"
        />
      </div>
      <div class="portfolio-content-item__wrapper">
        <div class="portfolio-content-item__title btn-text-big">
          {{ info.title }}
        </div>
        <div class="portfolio-content-item__desc ts">
          {{ info.description }}
        </div>
      </div>
    </LazyNuxtLink>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

const { info } = defineProps({
  info: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");

onMounted(async () => {
  if (process.client) {
    await nextTick();
    // new LocomotiveScroll();
    document.querySelectorAll("div[portfolio-attr]").forEach(function (e) {
      e.style.backgroundImage = "url(" + e.getAttribute("portfolio-attr") + ")";
    });
  }
});
</script>

<style lang="scss" scoped>
.portfolio-content-item {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: $gutter;
  overflow: hidden;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    color: $black;
  }

  &__title {
    margin-bottom: 4px;
  }

  &__desc {
    color: $gray;
  }

  &__wrapper {
    @include aprop("margin-top", 40px, 28px, 28px, 25.5px);
  }

  &__picture {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .portfolio-content-mobile .img_phone {
    max-height: 270px;
  }

  &__img {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    scale: 1;

    @include laptop {
      min-height: 355px;
    }

    @include tablet {
      min-height: 420px;
    }

    @include mobile {
      min-height: 270px;
    }
  }
  .img_phone {
    max-height: 270px;
  }

  &:nth-child(2n) {
    .portfolio-content-item__content {
      grid-column: 8 / 5 span;

      .portfolio-content-item__img {
        background-position: right top;
      }

      @include tablet {
        grid-column: 5 / 8 span;
      }

      @include mobile {
        grid-column: 4 span;
      }
    }
  }
  &:nth-child(2n + 1) {
    .portfolio-content-item__content {
      grid-column: 5 span;

      @include laptop {
        grid-column: 6 span;
      }

      @include tablet {
        grid-column: 9 span;
      }

      @include mobile {
        grid-column: 4 span;
      }
    }
  }

  @include mobile {
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    max-height: 340px;
  }
}
</style>
