<template>
  <div class="offer">
      <div class="offer__front">
          <div class="offer__wrapper wrapper">
            <div class="offer__container container" v-if="to">
                <h1 class="offer__title t1">
                  <slot name="offerTitle">

                  </slot>
                </h1>
                <div class="offer__description">
                    <span class="offer__text text-med">
                      <slot name="offerDescription">

                      </slot>
                    </span>

                      <NuxtLink :to="to" class="offer__link btn-text-big">
                        <slot name="offerButton" v-if="to">

                        </slot>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6H14M14 6L8.68966 1M14 6L8.68966 11" stroke="#0D0D0D"/>
                        </svg>
                      </NuxtLink>
                </div>
            </div>
            <slot name="StebnevStudio" v-if="!to">
              <div class="offer__container container stebnev-container">
                  <ElementsStebnevStudioOffer class="offer__stebnev" />
              </div>
            </slot>
          </div>
      </div>
      <div class="offer__back">
          <img src="/background-offer.png" alt="">
      </div>
  </div>
</template>

<script lang="ts" setup>
  const { to } = defineProps({
    to: String
  })

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
      mix-blend-mode: lighten;
      display: flex;
      width: 100%;
      align-items: center;

      @include mobile {
        height: 70dvh;
      }
    }

    &__back {
      position: sticky;
      top: 0;
      height: 100dvh;
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
      @include aprop('margin-bottom', 200px, 120px, 120px, 80px);

      @include laptop {
        grid-column: 5 / 5 span;
        max-width: 315px;
      }
      @include tablet {
        grid-column: 5 / 8 span;
        max-width: 345px;
      }

      @include mobile {
        grid-column: 4 span
      }
    }

    &__text {
      @include aprop('margin-top', 80px, 60px, 60px, 40px);
      @include aprop('margin-bottom', 60px, 40px, 40px, 32px);
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