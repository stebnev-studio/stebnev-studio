<template>
  <div class="portfolio-header">
    <span class="portfolio-header__subtitle ts">
      / Кейсы
    </span>
    <h2 class="portfolio-header__title t2">
      {{ header?.title }}
    </h2>
    <p class="portfolio-header__description text-med">{{ header?.description }}</p>
  </div>
</template>

<script lang="ts" setup>
const { header } = defineProps({
  header: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .portfolio-header {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    column-gap: $gutter;
    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include laptop {
        grid-row: 1;
      }
      @include tablet {
        grid-row: 1;
      }
      @include mobile {
        grid-row: 1;
        grid-column: 4 span;
      }
    }
    &__title {
      grid-column: 5 span;
      @include aprop("margin-top", 0px, 0px, 32px, 20px);

      @include tablet {
        grid-row: 2;
      }
      @include mobile {
        grid-row: 2;
        grid-column: 4 span;
      }
    }

    &__description {
      grid-column: 8 / 5 span;
      grid-row: 2;
      @include aprop("margin-top", 80px, 60px, 60px, 40px);

      @include tablet {
        grid-row: 3;
        grid-column: 5 / 8 span;
      }

      @include mobile {
        grid-column: 4 span;
        display: flex;
        flex-direction: column;
        grid-row: 3;
      }
    }

    @include mobile {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>