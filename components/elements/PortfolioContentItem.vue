<template>
  <div class="portfolio-content-item row">
    <LazyNuxtLink :to="link" class="portfolio-content-item__content">
      <div class="portfolio-content-item__picture">
        <NuxtImg provider="aliyun" 
           class="portfolio-content-item__img" 
          :class="{img_phone: isMobile && route.path != '/cases'}"
          :src="src" 
          :portfolio-attr="src" 
          data-scroll
          data-scroll-position="middle,middle"
          data-scroll-speed="0.1"
          densities="x1"
          format="webp" 
          />
      </div>
      <div class="portfolio-content-item__wrapper">
        <div class="portfolio-content-item__title btn-text-big">
          {{ title }}
        </div>
        <div class="portfolio-content-item__desc ts">
          {{ desc }}
        </div>
      </div>
    </LazyNuxtLink>
  </div>
</template>

<script setup>
  import { useMediaQuery } from "@vueuse/core";
  import LocomotiveScroll from 'locomotive-scroll';

  const props = defineProps({
    info: {
      type: Object,
      required: true
    }
  });

  const route = useRoute();
  const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");
  const title = props.info.title;
  const src = props.info.img;
  const link = props.info.link;
  const desc = props.info.desc;

  onMounted(async () => {
    await nextTick();
    new LocomotiveScroll();
    document.querySelectorAll("div[portfolio-attr]").forEach(function (e) {
      e.style.backgroundImage = 'url('+e.getAttribute('portfolio-attr')+')';
    })
  })

</script>

<style lang="scss" scoped>
.portfolio-content-item {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: $gutter;

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
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: contain;
      scale: 1.5;

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

    &:nth-child(2n){
      .portfolio-content-item__content {
        grid-column: 8 / 5 span;

        .portfolio-content-item__img {
          background-position: right top;
        }

        @include tablet {
          grid-column: 5 / 8 span;
        }
      }
    }
    &:nth-child(2n + 1){
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