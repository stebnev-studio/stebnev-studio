<template>
  <div class="offer">
    <div class="offer__front" :class="{ mix: route.fullPath == '/about' }">
      <div class="offer__wrapper wrapper">
        <div class="offer__container container" v-if="to">
          <h1 class="offer__title t1" ref="titleS">{{ title }}</h1>
          <div class="offer__description">
            <span class="offer__text text-med">
              {{ description }}
            </span>

            <LazyNuxtLink :to="to" class="offer__link btn-text-big">
              <slot name="offerButton" v-if="to"> </slot>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6H14M14 6L8.68966 1M14 6L8.68966 11"
                  stroke="#0D0D0D"
                />
              </svg>
            </LazyNuxtLink>
          </div>
        </div>

        <slot name="StebnevStudio" v-if="!to">
          <div class="offer__container container stebnev-container">
            <LazyElementsStebnevStudioOffer
              class="offer__stebnev"
              :title_stebnev="title_stebnev"
              :subtitle="subtitle"
            />
          </div>
        </slot>
      </div>
    </div>
    <div class="offer__back">
      <video autoplay muted loop :poster="poster" v-if="!isMobile">
        <source :src="video" type="video/mp4" />
      </video>
      <img :src="poster" v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
const { $gsap } = useNuxtApp();
const { to, video, poster, title_stebnev, subtitle, title, description } =
  defineProps({
    to: {
      type: String,
    },
    video: {
      type: String,
    },
    poster: {
      type: String,
    },
    title_stebnev: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  });

const titleS = ref(null);
const isMobile = useMediaQuery("(min-width: 340px) and (max-width: 767.5px)");
const route = useRoute();

onMounted(async () => {
  if (process.client) {
    const isMobile = useMediaQuery(
      "(min-width: 340px) and (max-width: 767.5px)",
    );
    if (!isMobile.value) {
      if (!document.querySelector(".offer__stebnev")) {
        await nextTick();

        titleS.value = splitToSpan(titleS);

        const words = $gsap.utils.toArray(".offer__title span");

        $gsap.fromTo(
          words,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            transform: "translateY(-25px)",
          },
          {
            stagger: 0.065,
            clipPath: "inset(0% 0% 0% 0%)",
            transform: "translateY(0)",
          },
        );

        $gsap.set(".offer__text", {
          opacity: 0,
          blur: 100,
        });

        $gsap.to(
          ".offer__text",
          {
            opacity: 1,
            blur: 0,
            duration: 0.2,
          },
          "+=0.025",
        );
      }
    }

    function splitToSpan(word: any) {
      let container = word.value;
      let str = container.innerHTML;
      return (container.innerHTML = str
        .split(" ")
        .map((s: any) => `<span>${s}</span>`)
        .join(" "));
    }
  }
});
</script>

<style lang="scss" scoped>
.offer {
  position: relative;
  min-height: 200dvh;
  width: 100%;

  &__front {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 90dvh;
    width: 100%;
    background: $white;
    display: flex;
    width: 100%;
    align-items: center;

    &.mix {
      mix-blend-mode: lighten;
    }

    @include mobile {
      height: 70dvh;
    }
  }

  &__back {
    position: sticky;
    top: 0;
    height: 100dvh;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    @include mobile {
      height: 100dvh;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 90dvh;
    width: 100%;

    @include mobile {
      max-height: 466px;
      height: 466px;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content;
    column-gap: $gutter;

    @include mobile {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__wrapper:has(.stebnev-container) {
    justify-content: center;
  }
  .stebnev-container {
    display: flex;
  }

  &__title {
    grid-column: 3 / 6 span;

    & > span {
      display: block;
    }

    @include laptop {
      grid-column: 3 / 7 span;
      max-width: 450px;
    }
    @include tablet {
      grid-column: 3 / 10 span;
      max-width: 437px;
    }

    @include mobile {
      grid-column: 1 / 4 span;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    grid-column: 5 / 4 span;
    grid-row: 2;
    @include aprop("margin-bottom", 200px, 120px, 120px, 80px);

    @include laptop {
      grid-column: 5 / 5 span;
      max-width: 315px;
    }
    @include tablet {
      grid-column: 5 / 8 span;
      max-width: 345px;
    }

    @include mobile {
      grid-column: 4 span;
    }
  }

  &__text {
    @include aprop("margin-top", 80px, 60px, 60px, 40px);
    @include aprop("margin-bottom", 60px, 40px, 40px, 32px);
  }

  &__link {
    display: flex;
    align-items: center;
    color: $black;
    column-gap: 17px;
  }

  @include mobile {
    min-height: 200vh;
  }
}
</style>
