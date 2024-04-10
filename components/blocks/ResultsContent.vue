<template>
  <div class="results-item">
    <div class="results-item__top">
      <span>{{ item.title }}</span>
      <span>{{ item.subtitle }}</span>
    </div>
    <div class="results-item__statistic">
      <p class="numeral-big">
        {{ item.number }}
      </p>
    </div>
    <p class="results-item__statistic-description text-med">
      {{ item.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
  const { item } = defineProps({
    item: Object
  });
</script>

<style lang="scss" scoped>
  .results-item {
    grid-column: 3 / 4 span;
    display: flex;
    flex-direction: column;

    &__top {
      display: flex;
      flex-direction: column;
      row-gap: 4px;
      margin-bottom: 32px;
    }

    &__statistic {
      display: flex;
      align-items: center;
      width: 100%;
      column-gap: 10px;
      max-height: 136px;

      svg {
        max-height: inherit;
        height: inherit;
      }

      @include laptop{
        max-height: 136px;
      }

      @include tablet{
        max-height: 96px;
      }

      @include mobile{
        max-height: 64px;
      }

      &-description {
        color: $gray;
        margin-top: 16px;
      }
    }

    @include laptop{
      grid-column: 3 / 4 span;
    }

    @include tablet{
      grid-column: 3 / 6 span;
    }

    @include mobile{
      grid-column: 4 span;
    }

  }
</style>
