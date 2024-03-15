<template>
  <div class="faq">
    <div class="faq__wrapper wrapper">
      <div class="faq__container container">
        <span class="faq__subtitle ts">
          / Вопросы
        </span>
        <h2 class="faq__title t2">
          Часто задаваемые вопросы наших клиентов
        </h2>
        <BlocksFAQContent class="faq__content">
          <ElementsFAQItem v-for="(item, idx) in faqItems" :title="item.title" :text="item.text" @click="open(item)" :class="{open: item.isActive}" :isActive="item.isActive"/>
        </BlocksFAQContent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  const { questions } = defineProps({
    questions: {
      type: Object,
      default: reactive([
        {
          title: 'Что нельзя рекламировать?',
          text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
          isActive: false
        },
        {
          title: 'Что нельзя рекламировать?',
          text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
          isActive: false  
        },
        {
          title: 'Что нельзя рекламировать?',
          text: 'Рекламировать товары, копирующие известные бренды, реплики, использовать авторский контент, размещать на изображениях или упоминать в тексте чужие торговые марки, товарные знаки;, публиковать фотографии, нарушающие конфиденциальность личной жизни и данных людей;',
          isActive: false  
        },
      ])
    }
  })

  const faqItems = questions;

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