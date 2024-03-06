<template>
  <li class="service-item">
    <div class="service-item__title t3">
        <i class="service-item__icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8.5" y="8.5" width="15" height="15" stroke="#FAFAFA"/>
          </svg>
        </i>
        Продвижение
    </div>
    <ElementsServiceItemContent class="service-item__content"/>
  </li>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .service-item {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      column-gap: $gutter;
      opacity: 0.5;
      cursor: pointer;
      transition: 0.25s ease-out;

      &:hover {
        opacity: 1;
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
      }


  }
</style>