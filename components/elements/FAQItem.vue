<template>
  <div class="faq-item">
    <div class="faq-item__header">
      <p class="faq-item__title tex-med">
        {{ title }}
      </p>
      <svg class="faq-item__close" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.68555 16.0002H27.313M15.9993 4.68652V27.3139" stroke="#FAFAFA"/>
      </svg>
      <div class="faq-item__line"></div>
    </div>
    <div class="faq-item__content">
      <p class="faq-item__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { title, text } = defineProps({
    title: String,
    text: String,
    isActive: Boolean
  })
</script>

<style lang="scss" scoped>
.faq-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  cursor: pointer;

  &__header {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: $gutter;
    padding: 30px 0;
    transition: 0.2s;
  }

  &__content {
    width: 100%;
    height: 0px;
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(8, 1fr);
    column-gap: $gutter;
    transition-duration: 0.3s;

    @include laptop{
      grid-template-columns: repeat(10, 1fr);
    }

    @include tablet{
      grid-template-columns: repeat(12, 1fr);
    }

    @include mobile{
      grid-template-columns: repeat(12, 1fr);
    }
  }

  &__title {
    grid-column: 7 span;
    align-self: center;
  }

  &__close {
    grid-column: 1 span;
    justify-self: flex-end;
    transform: rotate(0deg);
    transition: $transitionTime;
  }

  &__text {
    grid-column: 4 / 5 span;
    color: $gray;
    opacity: 0;
    transition: 0.3s;

    @include laptop {
      grid-column: 10 span;
    }
    @include tablet {
      grid-column: 12 span;
    }
    @include mobile {
      grid-column: 12 span;
    }
  }

  &__line {
    position: absolute;
    bottom: 0;
    display: block;
    transform-origin: left;
    width: 100%;
    height: 1px;
    background-color: $white;
    transition: $transitionTime ease-in-out;
  }

}

.faq-item.open {

  .faq-item__content {
    height: auto;
    @include aprop('padding-bottom', 80px, 40px, 40px, 40px);
    transition: 0.3s;

  }
  .faq-item__close {
    transform-origin: center;
    transform: rotate(45deg);
  }

  .faq-item__line {
    width: 0;
    transition-duration: $transitionTime;
  }

  .faq-item__text {
    opacity: 1;
  }
}
</style>