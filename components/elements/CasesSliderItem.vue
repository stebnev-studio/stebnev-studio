<template>
  <NuxtLink :to="caseItem?.link" class="case">
    <div class="case__img">
      <NuxtImg :src="caseItem?.image" format="webp" alt="" class="case__source" />
    </div>
    <div class="case__footer">
      <p class="case__title btn-text-big">
        {{ caseItem?.title }}
      </p>
      <span class="case__desc ts">
        {{ caseItem?.description }}
      </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
  const { caseItem } = defineProps({
    caseItem: {
      type: Object
    }
  })
</script>

<style lang="scss" scoped>
  .case {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    overflow: hidden;

    height: 100%;
    width: max-content;

    img {
      height: 700px;
      margin-top: auto;
      @include laptop{
        height: 400px
      }

      @include tablet{
        height: 260px;
      }

      @include mobile{
        height: 270px;
      }
    }

    &__title {
      text-transform: uppercase;
      color: $black;
    }

    &__desc {
      color: $black;
    }

    &__img {
      max-height: 700px;
      overflow: hidden;
    }

    &__footer {
      margin-top: 40px;
    }
  }
</style>
