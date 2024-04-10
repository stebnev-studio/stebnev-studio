<template>
  <li class="service-item">
    <div class="service-item__title t3">
      <i class="service-item__icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="idx == 0">
          <rect x="8.5" y="8.5" width="15" height="15" stroke="#FAFAFA"/>
        </svg>

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="idx == 1">
          <path d="M6.47372 23.5L16 7L25.5263 23.5H6.47372Z" stroke="#FAFAFA"/>
        </svg>

        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="idx == 2">
          <circle cx="16" cy="16" r="8.5" stroke="#FAFAFA"/>
        </svg>

      </i>
      <p class="t3">{{ item?.title }}</p>
    </div>
    <ElementsServiceItemContent
      class="service-item__content"
      :header="item?.header"
      :description="item?.description"
      :button="item?.button.text"
      :link="item?.button.link"
    />
  </li>
</template>

<script lang="ts" setup>
import { number } from 'yup';

const { item } = defineProps({
  item: {
    type: Object,
  },
  idx: {
    type: Number
  }
});
</script>

<style lang="scss" scoped>
.service-item {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: $gutter;
  opacity: 0.5;
  cursor: pointer;
  transition: $transitionTime;
  margin-bottom: 0;
  @include aprop("margin-bottom", 120px, 0px, 0px, 0px);

  &:hover {
    opacity: 1;
  }

  @include laptop {
    grid-template-columns: repeat(12, 1fr);
  }

  @include tablet {
    // grid-template-columns: repeat(10, 1fr);
    display: flex;
    flex-direction: column;
  }

  @include mobile {
    display: flex;
    flex-direction: column;
  }

  &__title {
    grid-column: 3 span;
    display: flex;
    align-items: flex-start;
    column-gap: 40px;

    @include laptop {
      grid-column: 4 span;
      column-gap: 16px;
    }

    @include tablet {
      margin-bottom: 12px;
    }

    @include mobile {
      margin-bottom: 12px;
    }
  }

  &__icon {
    display: flex;
    align-items: center;

    @include tablet {
      display: none;
    }

    @include mobile {
      display: none;
    }
  }

  &__content {
    grid-column: 5 span;

    @include laptop {
      grid-column: 8 span;
    }
  }

  @include mobile {
    min-height: 114px;
  }
}
</style>
