<template>
  <div class="number-item">
    <div class="number-item__first numeral-small">
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
const { item } = defineProps({
  item: {
    type: Object || undefined
  }
})
</script>

<style lang="scss" scoped>
  .number-item {
    display: flex;
    flex-direction: column;

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