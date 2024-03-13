<template>
  <div class="number-item">
    <div class="number-item__first numeral-big">
      {{ item?.number }}
      <div class="number-item__title t3">
        {{ item?.title }}
      </div>
      <div class="number-item__description ts">
        {{ item?.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    item: {
      type: Object
    }
  })
</script>

<style lang="scss" scoped>
  .number-item {
    display: flex;
    flex-direction: column;
    @include aprop('max-width', 421px, 300px, 300px, 340px);
    // @include aprop('margin-bottom', 100px, 80px, 80px, 60px);

    &__description {
      color: $gray;
      @include aprop('margin-top', 32px, 32px, 32px, 12px);

      @include mobile{
        display: none;
      }
    }

    &__title {
      @include aprop('margin-top', 20px, 20px, 20px, 12px);
    }
  }
</style>