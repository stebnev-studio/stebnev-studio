<template>
  <div class="tariff-item">
    <div class="tariff-item__title t3">
      {{ item.title }}
    </div>
    <div class="tariff-item__list">
      <li class="tariff-item__list-item text-med" v-for="i in item.list">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4.5" stroke="#A9A9A9"/>
        </svg>
        <p>
          {{ i.text }}
        </p>
      </li>
    </div>
    <p class="tariff-item__price price-text">
      {{ item.price }}
    </p>
    <ElementsLinkAdditional :to="item.button.link">
      {{ item.button.text }}
    </ElementsLinkAdditional>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    item: {
      title: string,
      list: [{
        text: string
      }],
      price: string,
      button: {
        text: string,
        link: string
      }
    }
  }>();
</script>

<style lang="scss" scoped>
  .tariff-item {
    display: flex;
    flex-direction: column;
    border: 1px solid $white;
    max-width: 350px;
    @include aprop('padding-left', 40px, 24px, 24px, 20px);
    @include aprop('padding-right', 40px, 24px, 24px, 20px);
    @include aprop('padding-top', 48px, 32px, 32px, 32px);
    @include aprop('padding-bottom', 48px, 32px, 32px, 32px);

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }

    &__list-item {
      display: flex;
      column-gap: 8px;
      
      
      svg {
        flex: 0 1 1;
      }

      p {
        flex: 1;
      }
    }

    &__title {
      @include aprop('margin-bottom', 20px, 20px, 20px, 12px);
    }

    &__price {
      @include aprop('margin-top', 40px, 40px, 40px, 20px);
      @include aprop('margin-bottom', 40px, 40px, 40px, 20px);
    }
  }
</style>