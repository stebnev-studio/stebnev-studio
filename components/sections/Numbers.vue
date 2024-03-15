<template>
  <div class="numbers">
    <div class="numbers__wrapper wrapper">
      <div class="numbers__container container">
        <span class="numbers__subtitle ts">/ Цифры</span>
        <h2 class="numbers__title t2" v-html="title"></h2>
        <BlocksNumbersGrid class="numbers__grid" :numbers="numbers" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { numbers, title } = defineProps({
    numbers: Object,
    title: String
  })
</script>

<style lang="scss" scoped>
  .numbers {
    // background-color: $black;
    // color: $white;
    overflow: hidden;

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        display: flex;
        flex-direction: column;
      }
    }

    &__title {
      grid-column: 6 span;

      @include laptop {
        grid-row: 2;
        grid-column: 8 span;
        margin-top: 32px;
      }
      @include tablet {
        grid-row: 2;
        grid-column: 11 span;
        margin-top: 32px;
      }
      @include mobile {
        margin-top: 20px;

      }
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;
    }

    &__grid {
      grid-column: -6 / 5 span;
      grid-row: 3;
      @include aprop('margin-top', 144px, 80px, 80px, 60px);

      @include laptop{
        grid-column: 5 / 8 span;
      } 
      
      @include tablet{
        grid-column: 3 / 10 span;
      }
    }
  }
</style>