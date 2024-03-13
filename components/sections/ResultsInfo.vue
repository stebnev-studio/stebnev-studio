<template>
  <div class="results-info">
    <div class="results-info__wrapper wrapper">
      <div class="results-info__container container">
        <div class="results-info__header">
          <span class="results-info__subtitle ts">
            / Результаты
          </span>
          <h2 class="results-info__title t2">
            Наша реклама даёт результаты
          </h2>
        </div>
        <div class="results-info__content">
          <BlocksResultsContent class="results-info__item" />
        </div>
        <div class="results-info__footer">
          <p class="results-info__description text-med">
            Настраиваем рекламу с точностью до географической области, пола и возрастной группы. Это позволяет сконцентрировать рекламу на конкретном аудитории и увеличить конверсию.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .results-info {
    background-color: $black;
    color: $white;

    &__header {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;
      @include aprop('row-gap', 0px, 32px, 32px, 20px);

      @include laptop{
        display: flex;
        flex-direction: column;
      }

      @include tablet{
        display: flex;
        flex-direction: column;
      }

      @include mobile{
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
    }

    &__content {

      @include aprop('padding-top', 80px, 60px, 60px, 80px);
      @include aprop('padding-bottom', 80px, 60px, 60px, 80px);
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include laptop{
       grid-column: 3 / 6 span;
      }

      @include tablet{
        grid-column: 3 / 9 span;
      }

      @include mobile{
        display: flex;
        flex-direction: column;
      }
    }

    &__item {
      grid-column: 5 / 5 span;
      max-width: calc(100% + $gutter);

      @include laptop{
       grid-column: 3 / 6 span;
      }

      @include tablet{
        grid-column: 3 / 9 span;
      }
    }

    &__footer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        display: flex;
        width: 100%;
      }
    }

    &__description {
      grid-column: -6 / 5 span;

      @include laptop{
        grid-column: 5 / 8 span;
      }

      @include tablet{
        grid-column: 3 / 10 span;

      }

      @include mobile{
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  }
</style>