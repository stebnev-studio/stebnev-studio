<template>
  <div class="about-service-content">
    <div class="about-service-content__wrapper wrapper">
      <div class="about-service-content__container container">
        <h2 class="about-service-content__title t2">
          {{ cite?.title }}
        </h2>
        <BlocksStebnevCite class="about-service-content__cite" :text="cite?.text" :fio="cite?.fio" :stebnev="cite?.stebnev" :img="cite?.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { cite } = defineProps({
  cite: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .about-service-content {

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include aprop('row-gap', 80px, 60px, 60px, 40px);

      @include mobile{
        display: flex;
        flex-direction: column;
      }
    }

    &__title {
      grid-column: 8 span;

      @include tablet {
        grid-column: 12 span;
      }
    }

    &__cite {
      grid-column: -6 / 5 span;
      @include laptop {
        grid-column: 5 / 8 span;
      }
      @include tablet {
        grid-column: 3 / 10 span;
      }
      @include mobile {
        grid-column: 4 span;
      }
    }
  }
</style>