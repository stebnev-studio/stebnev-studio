<template>
  <div class="faq">
    <div class="faq__wrapper wrapper">
      <div class="faq__container container">
        <span class="faq__subtitle ts">
          / Вопросы
        </span>
        <h2 class="faq__title t2">
          {{ faq.title }}
        </h2>
        <BlocksFAQContent class="faq__content">
          <ElementsFAQItem v-for="(item, idx) in faqItems" :title="item.question" :text="item.answer" @click="open(item)" :class="{open: item.isActive}" :isActive="item.isActive"/>
        </BlocksFAQContent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  const { faq } = defineProps({
    faq: {
      type: Object,
    }
  })

  const faqItems = faq.list;

  function open(e) {
    return e.isActive = !e.isActive
  }
</script>

<style lang="scss" scoped>
  .faq {
    // background-color: $black;
    // color: $white;

    &__container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        grid-template-columns: repeat(4, 1fr);
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
      @include aprop('margin-top', 0px, 0px, 32px, 20px);

      @include laptop{
        grid-column: 3 / 10 span
      }

      @include tablet{
        grid-column: 12 span;
      }

      @include mobile {
        display: flex;
        flex-direction: column;
        grid-column: 4 span
      }
    }

    &__content {
      @include aprop('margin-top', 80px, 60px, 60px, 40px);
      grid-row: 2;
      grid-column: 5 / span 8;

      @include laptop{
        grid-column: 3 / 10 span;
        grid-row: 3;
      }

      @include tablet{
        grid-column: 12 span;
        grid-row: 3;
      }

      @include mobile {
        display: flex;
        flex-direction: column;
        grid-column: 4 span;
        grid-row: 3;
      }
    }

  }
</style>