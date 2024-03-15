<template>
  <li class="service-item">
    <div class="service-item__title t3">
        <i class="service-item__icon">
          <svg width="16" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="1" width="15" height="15" stroke="#FAFAFA"/>
          </svg>
        </i>
        <p class="t3">Продвижение</p>
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
      transition: $transitionTime;
      margin-bottom: 0;
      
      &:hover {
        opacity: 1;
        @include aprop("margin-bottom", 120px, 80px, 60px, 60px);
      }

      @include laptop{
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

        @include laptop{
          grid-column: 4 span;
          column-gap: 16px;
        };

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

        @include laptop{
          grid-column: 8 span
        };

      }

      @include mobile{
        min-height: 114px;
      }
  }
</style>