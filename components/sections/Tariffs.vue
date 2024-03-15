<template>
  <div class="tariffs">
    <div class="tariffs__wrapper wrapper">
      <div class="tariffs__container container">
        <div class="tariffs__header">
          <h2 class="tariffs__title t2">Действующие тарифы на наши услуги</h2>
          <div class="tariffs__arrows">
            <div class="tariffNext" ref="next">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 16H9M9 16L14.3103 11M9 16L14.3103 21" stroke="#FAFAFA"/>
              </svg>
            </div>
            <div class="tariffPrev" ref="prev">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16H23M23 16L17.6897 11M23 16L17.6897 21" stroke="#FAFAFA"/>
              </svg>
            </div>
          </div>
        </div>
        <BlocksActiveTariffs class="tariffs__active" :next="next" :prev="prev" />
        <div class="tariffs__footer">
          <p class="tariffs__description text-med">
            Стоимость услуг рассчитывается индивидуально. Оставьте заявку и получите персональное предложение для вашего бизнеса
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const prev = ref(null);
  const next = ref(null);
</script>

<style lang="scss" scoped>
  .tariffs {
    // background-color: $black;
    // color: $white;
    overflow: hidden;

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__arrows {
      display: none;
      column-gap: 20px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

      }

      @include laptop{
        display: flex;
      }

      @include tablet{
        display: flex;
      }

    }

    &__footer {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        display: flex;
        width: 100%;
      }
    }

    &__title {
      @include laptop{
        max-width: 600px
      }

      @include tablet{
        max-width: 310px
      }
    }

    &__active {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;
      @include aprop('margin-top', 80px, 60px, 60px, 40px);
      @include aprop('margin-bottom', 80px, 60px, 60px, 40px);

      @include mobile{
        grid-template-columns: repeat(4, 1fr);
        grid-column: 4 span;
      }
    }

    &__description {
      grid-column: -6 / span 5;

      @include laptop {
        grid-column: 5 / span 8;
      }
      @include tablet {
        grid-column: 3 / span 10;
      }
      @include mobile {
        grid-column: 5 / span 8;
      }
    }
  }
</style>