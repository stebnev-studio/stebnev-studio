<template>
  <div class="cases-offer">
    <div class="cases-offer__wrapper wrapper">
      <div class="cases-offer__container container">
        <h1 class="cases-offer__title t1">{{ offer.title }}</h1>
        <p class="cases-offer__description text-med">
          {{ offer.description }}
        </p>
        <ElementsLinkAdditional class="cases-offer__link black" :to="offer.button.link">
          {{ offer.button.text }}
        </ElementsLinkAdditional>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { offer } = defineProps({
  offer: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
    .cases-offer {
      // color: $black;

      &__container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: $gutter;

        @include mobile {
          display: flex;
          flex-direction: column;
        }

      }

      &__title {
        grid-column: 3 / 4 span;

        @include laptop {
          grid-column: 3 / 5 span;
        }
        @include tablet {
          grid-column: 3 / 7 span;
        }
      }

      &__description {
        grid-row: 2;
        grid-column: 5 / 4 span;
        @include aprop('margin-top', 80px, 60px, 60px, 40px);

        @include laptop {
          grid-column: 5 / 5 span;
        }
        @include tablet {
          grid-column: 5 / 8 span;
        }
      }

      &__link {
        grid-row: 3;
        grid-column: 5 / 2 span;
        @include aprop('margin-top', 60px, 40px, 40px, 32px);

        @include laptop {
          grid-column: 5 / 3 span;
        }

        @include tablet{
          grid-column: 5 / 5 span;
        }

        @include mobile {
          
        }
      }

    }  
</style>