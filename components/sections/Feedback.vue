<template>
  <div class="feedback">
    <div class="feedback__wrapper wrapper">
      <div class="feedback__container container">
        <span class="feedback__subtitle ts">
          / Заявка
        </span>
        <h2 class="feedback__title t2">
          {{ feedback.title }}
        </h2>
        <div class="feedback__form">
          <BlocksFeedbackForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { feedback } = defineProps({
  feedback: {
    type: Object
  }
})
import { useStateGlobal } from "~/composables/stateGlobal";
const state = useStateGlobal();
const { popupDescription } = storeToRefs(state);
popupDescription.value = feedback.popup_description;

</script>

<style lang="scss" scoped>
  .feedback {
    min-height: 100vh;
    // background-color: $black;
    // color: $white;

    &__wrapper {
      display: flex;
      align-items: center;
      min-height: inherit;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;
      width: 100%;

      @include mobile {
        display: flex;
        flex-direction: column;
      }
    }

    &__subtitle {
      color: $gray;
      grid-column: 2 span;
      @include laptop {

      }
      @include tablet {
        grid-row: 1;
      }
      @include mobile {

      }
    }

    &__title {  
      grid-column: 5 span;

      @include laptop {
        grid-column: 6 span;
      }
      @include tablet {
        grid-row: 2;
        grid-column: 9 span;
        margin-top: 32px;
      }
      @include mobile {
        margin-top: 20px;
      }
    }

    &__form {
      grid-column: -6 / 5 span;
      grid-row: 2;
      @include aprop('margin-top', 80px, 60px, 60px, 60px);

      @include laptop{
        grid-column: 5 / 8 span;
      }

      @include tablet{
        grid-column: 3 / 10 span;
        grid-row: 3;
      }

      @include mobile{
        width: 100%
      }
    }
  }
</style>