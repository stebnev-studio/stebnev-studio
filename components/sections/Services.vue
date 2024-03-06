<template>
  <div class="services bg-black">
    <div class="services__wrapper wrapper">
      <div class="services__container container">
          <h2 class="services__title ts">/ Услуги</h2>
          <ul class="services__list">
              <BlocksServiceItem />
              <BlocksServiceItem />
              <BlocksServiceItem />
          </ul>
      </div>
    </div>
    <BlocksTicker class="services__ticker" :words="words" />
  </div>
</template>

<script lang="ts" setup>
const words = reactive(['JAVA script.', 'BRANDING.', 'DEVELOPMENT.', 'UI/UX DESIGN', 'CSS.']);
</script>

<style scoped lang="scss">
  .services {
      &__container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: $gutter;
          @include aprop("padding-top", 300px, 200px, 200px, 140px);
          @include aprop("padding-bottom", 300px, 200px, 200px, 140px);

          @include laptop {

          }
          @include tablet {

          }
          @include mobile {
            grid-template-columns: repeat(4, 1fr);
          }
      }

      &__title {
        grid-row: 1;
        grid-column: 4 span;
        color: $gray;
        @include laptop {
          grid-row: 1;
          margin-bottom: 80px;
        }
        @include tablet {
          grid-row: 1;
          margin-bottom: 60px;
        }
        @include mobile {
          grid-row: 1;
          margin-bottom: 60px;
          grid-template-columns: repeat(4, 1fr);
        }
      }

      &__list {
        grid-column: 5 / 8 span;
        grid-row: 1;
        row-gap: 120px;
        @include aprop("row-gap", 120px, 80px, 60px, 60px);
        display: grid;

        @include laptop {
          grid-row: 2;
          grid-column: 12 span;
        }
        @include tablet {
          grid-row: 2;
          grid-column: 3 / 10 span;
        }
        @include mobile {
          grid-row: 2;
          display: flex;
          flex-direction: column;
          grid-column: 4 span;
        }
      }

      &__ticker {
        @include aprop('padding-bottom', 296px, 191px, 200px, 140px)
      }
  }
</style>