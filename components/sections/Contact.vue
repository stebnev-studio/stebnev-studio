<template>
  <div class="contact">
    <div class="contact__wrapper wrapper">
      <div class="contact__container container">
        <span class="contact__subtitle ts">/ Контакты</span>
        <h2 class="contact__title t2">{{ contacts.title }}</h2>
        <ul class="contact__list">
          <ElementsContactListItem figure="square" :to="contacts.phone_link" :text="contacts.phone" />
          <ElementsContactListItem figure="triangle" :to="contacts.mail" :text="contacts.mail" />
          <ElementsContactListItem figure="circle" :to="contacts.address_link" :text="contacts.address" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const contactList = reactive([
    {
      text: "+7 (473) 200-04-63",
      to: "tel:+74732000463",
      figure: "square"
    },
    {
      text: "mail@stebnev-studio.ru",
      to: "mailto:mail@stebnev-studio.ru",
      figure: "circle"
    },
    {
      text: "Россия, г. Воронеж, пр-т Труда, д. 68, к1",
      to: "/",
      figure: "triangle"
    }
  ])

  const { contacts } = defineProps({
    contacts: {
      type: Object
    }
  })
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