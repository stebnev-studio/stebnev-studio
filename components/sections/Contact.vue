<template>
  <div class="contact">
    <div class="contact__wrapper wrapper">
      <div class="contact__container container">
        <span class="contact__subtitle ts">/ Контакты</span>
        <h2 class="contact__title t2">Вам нужен сайт? <br> У нас есть идея!</h2>
        <ul class="contact__list">
          <ElementsContactListItem v-for="(item, idx) in contactList" :figure="item.figure" :to="item.to" :text="item.text" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const contactList = reactive([
    {
      text: "+7 (473) 200-04-63",
      to: "tel:+7 (473) 200-04-63",
      figure: "square"
    },
    {
      text: "mail@stebnev-studio.ru",
      to: "mailto:mail@stebnev-studio.ru",
      figure: "circle"
    },
    {
      text: "Россия, г. Воронеж, пр-т Труда, д. 68, к1",
      to: "google.com",
      figure: "triangle"
    }
  ])
</script>

<style lang="scss" scoped>
  .contact {
    // background-color: $black;
    // color: $white;
    min-height: 100vh;

    &__wrapper {
      min-height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__container {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(12, 1fr);
      column-gap: $gutter;

      @include mobile{
        display: flex;
        flex-direction: column;
      }

    }

    &__subtitle {
      color: $gray;
      grid-column: 2 span;

      @include tablet{
        grid-row: 1;
        grid-column: 3 span;
      }
    }

    &__title {
      grid-column: 6 span;

      @include tablet{
        margin-top: 32px;
        grid-row: 2;
      }

      @include mobile{
        margin-top: 20px;
      }
    }

    &__list {
      grid-row: 2;
      grid-column: 5 / 5 span;
      display: flex;
      flex-direction: column;
      @include aprop('margin-top', 81px, 60px, 60px, 40px);
      @include aprop('row-gap', 60px, 40px, 40px, 20px);

      @include laptop{
        grid-column: 5 / 8 span;
      }

      @include tablet{
       grid-row: 3;
       grid-column: 3 / 10 span;
      }
    }

  }
</style>