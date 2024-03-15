<template>
  <div class="good-results">
      <div class="good-results__wrapper wrapper">
        <div class="good-results__container container">
          <h2 class="good-results__title t2">
            Хороший результат — это работа системы
          </h2>
          <p class="good-results__description text-med">
            Мы придерживаемся определённых принципов, которые обеспечивают комфортную работу с нами для наших клиентов.
          </p>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.good-results {
  // background-color: $black;
  // color: $white;

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
    grid-column: 7 span;

    @include laptop {
      grid-column: 8 span;
    }
    @include tablet {
      grid-column: 11 span;
    }
    @include mobile {
      width: 100%;
    }
  }  
  &__description {
    grid-column: 5 / 5 span;
    grid-row: 2;

    @include laptop {
      grid-column: 5 / 8 span;
    }
    @include tablet {
      grid-column: 3 / 10 span;
    }
    @include mobile {
      width: 100%;
    }
  }  

}
</style>