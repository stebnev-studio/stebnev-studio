<template>
  <div class="results-item">
    <div class="results-item__top">
      <span>Клиннинг</span>
      <span>Яндекс.директ</span>
    </div>
    <div class="results-item__statistic">
      <svg width="12" height="119" viewBox="0 0 12 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0V118M6 118L1 112.595M6 118L11 112.595" stroke="#FAFAFA"/>
      </svg>
      <p class="numeral-big">
        420 ₽
      </p>
    </div>
    <p class="results-item__statistic-description text-med">
      Стоимость лида
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .results-item {
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

  }
</style>