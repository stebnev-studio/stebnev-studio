<template>
  <div class="about-service-header">
    <div class="about-service-header__wrapper wrapper">
      <div class="about-service-header__container container">
        <span class="about-service-header__subtitle ts">/ О нас</span>
        <h2 class="about-service-header__title t2">
          {{ title }}
        </h2>
        <p class="about-service-header__description text-med" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  const { title, description } = defineProps({
    title: String,
    description: String
  })

</script>

<style lang="scss" scoped>
  .about-service-header {
    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;
      @include aprop("row-gap", 80px, 60px, 60px, 0px);

      @include mobile {
        display: flex;
        flex-direction: column;
      }
    }

    &__subtitle {
      grid-column: 2 span;
      color: $gray;

      @include tablet{
        grid-column: 3 span;
      }
    }

    &__title {
      grid-column: 6 span;

      @include laptop {
        grid-column: 8 span;
      }
      @include tablet {
        grid-column: 11 span;
        grid-row: 2;
      }
      @include mobile {
        margin-top: 20px;
        margin-bottom: 40px;
      }
    }

    &__description {
      grid-row: 2;
      grid-column: -6 / span 5 ;

      @include laptop {
        grid-column: 5 / span 8 ;
      }
      @include tablet {
        grid-row: 3;
        grid-column: 3 / span 10 ;
      }
      @include mobile {

      }
    }
  }
</style>
